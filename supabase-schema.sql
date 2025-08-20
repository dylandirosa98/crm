-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create enums
CREATE TYPE user_role AS ENUM ('owner', 'manager', 'sales_rep', 'field_worker', 'partner');
CREATE TYPE plan_type AS ENUM ('starter', 'professional', 'enterprise');
CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'qualified', 'estimate_sent', 'won', 'lost');
CREATE TYPE job_status AS ENUM ('scheduled', 'in_progress', 'materials_ordered', 'installation', 'completed', 'invoiced');
CREATE TYPE estimate_status AS ENUM ('draft', 'sent', 'accepted', 'rejected', 'expired');
CREATE TYPE photo_type AS ENUM ('damage', 'before', 'during', 'after');

-- Companies table
CREATE TABLE companies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    plan_type plan_type DEFAULT 'starter',
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (extends Supabase auth.users)
CREATE TABLE users (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role user_role DEFAULT 'field_worker',
    profile JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customers table
CREATE TABLE customers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    address JSONB,
    property_details JSONB,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads table
CREATE TABLE leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
    partner_id UUID REFERENCES users(id),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
    source TEXT NOT NULL,
    status lead_status DEFAULT 'new',
    score INTEGER CHECK (score >= 0 AND score <= 100),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Estimates table
CREATE TABLE estimates (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
    sales_rep_id UUID REFERENCES users(id) NOT NULL,
    status estimate_status DEFAULT 'draft',
    line_items JSONB NOT NULL DEFAULT '[]',
    total_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
    valid_until DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Jobs table
CREATE TABLE jobs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
    estimate_id UUID REFERENCES estimates(id),
    status job_status DEFAULT 'scheduled',
    scheduled_start DATE,
    actual_start DATE,
    completion_date DATE,
    assigned_crew UUID[],
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Photos table
CREATE TABLE photos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
    estimate_id UUID REFERENCES estimates(id) ON DELETE CASCADE,
    type photo_type NOT NULL,
    file_path TEXT NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT photos_reference_check CHECK (
        (job_id IS NOT NULL AND estimate_id IS NULL) OR
        (job_id IS NULL AND estimate_id IS NOT NULL)
    )
);

-- Create indexes for better performance
CREATE INDEX idx_users_company_id ON users(company_id);
CREATE INDEX idx_customers_company_id ON customers(company_id);
CREATE INDEX idx_leads_company_id ON leads(company_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_estimates_company_id ON estimates(company_id);
CREATE INDEX idx_estimates_customer_id ON estimates(customer_id);
CREATE INDEX idx_jobs_company_id ON jobs(company_id);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_photos_company_id ON photos(company_id);
CREATE INDEX idx_photos_job_id ON photos(job_id);
CREATE INDEX idx_photos_estimate_id ON photos(estimate_id);

-- Row Level Security Policies

-- Companies: Users can only access their own company
CREATE POLICY "Users can view their own company" ON companies
    FOR SELECT USING (
        id IN (
            SELECT company_id FROM users WHERE id = auth.uid()
        )
    );

CREATE POLICY "Company owners can update their company" ON companies
    FOR UPDATE USING (
        id IN (
            SELECT company_id FROM users 
            WHERE id = auth.uid() AND role = 'owner'
        )
    );

-- Users: Users can view users in their company
CREATE POLICY "Users can view users in their company" ON users
    FOR SELECT USING (
        company_id IN (
            SELECT company_id FROM users WHERE id = auth.uid()
        )
    );

CREATE POLICY "Users can update their own profile" ON users
    FOR UPDATE USING (id = auth.uid());

-- Customers: Users can access customers in their company
CREATE POLICY "Users can view customers in their company" ON customers
    FOR ALL USING (
        company_id IN (
            SELECT company_id FROM users WHERE id = auth.uid()
        )
    );

-- Leads: Users can access leads in their company
CREATE POLICY "Users can view leads in their company" ON leads
    FOR ALL USING (
        company_id IN (
            SELECT company_id FROM users WHERE id = auth.uid()
        )
    );

-- Estimates: Users can access estimates in their company
CREATE POLICY "Users can view estimates in their company" ON estimates
    FOR ALL USING (
        company_id IN (
            SELECT company_id FROM users WHERE id = auth.uid()
        )
    );

-- Jobs: Users can access jobs in their company
CREATE POLICY "Users can view jobs in their company" ON jobs
    FOR ALL USING (
        company_id IN (
            SELECT company_id FROM users WHERE id = auth.uid()
        )
    );

-- Photos: Users can access photos in their company
CREATE POLICY "Users can view photos in their company" ON photos
    FOR ALL USING (
        company_id IN (
            SELECT company_id FROM users WHERE id = auth.uid()
        )
    );

-- Enable RLS on all tables
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- Function to handle user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    -- Create a default company for the first user (owner)
    IF NOT EXISTS (SELECT 1 FROM users WHERE email = NEW.email) THEN
        -- This is a new user, create a company if they don't have one
        INSERT INTO companies (name) VALUES ('My Roofing Company')
        RETURNING id INTO NEW.raw_user_meta_data->>'company_id';
    END IF;
    
    -- Insert into users table
    INSERT INTO users (id, company_id, email, role, profile)
    VALUES (
        NEW.id,
        COALESCE(
            (NEW.raw_user_meta_data->>'company_id')::UUID,
            (SELECT id FROM companies ORDER BY created_at DESC LIMIT 1)
        ),
        NEW.email,
        COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'owner'),
        COALESCE(NEW.raw_user_meta_data::JSONB, '{}')
    );
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user registration
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on companies
CREATE TRIGGER update_companies_updated_at
    BEFORE UPDATE ON companies
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 