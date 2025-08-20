# Roofing CRM SaaS - Product Requirements Document

## 1. Executive Summary

### Product Vision
A comprehensive SaaS platform designed specifically for roofing contractors to manage their entire business operations, from lead generation through project completion. The platform includes a partner portal for lead generation partners (sales reps, referral partners) to submit and track leads.

### Core Value Proposition
- Complete roofing business management in one platform
- Partner ecosystem for lead generation and tracking
- Mobile-first design for field operations
- Multi-tenant SaaS architecture for scalability
- Modern, fast, and intuitive user experience

## 2. Target Users

### Primary Users
1. **Roofing Company Owners** - Overall business management
2. **Office Staff** - Customer service, scheduling, administrative tasks
3. **Sales Reps** - Lead management, estimates, customer communication
4. **Field Crews** - Mobile job tracking, photo uploads, material requests
5. **Project Managers** - Job oversight, crew coordination, timeline management

### Secondary Users
1. **Lead Generation Partners** - Submit and track referred leads
2. **Customers** - View project status, photos, invoices
3. **Material Suppliers** - Integration for ordering (future)

## 3. Core Features & User Stories

### 3.1 Authentication & Multi-Tenancy
**Epic**: Secure multi-tenant platform

- As a **roofing company owner**, I want to create an account so that my company has its own secure workspace
- As a **team member**, I want role-based access so that I only see relevant information
- As a **partner**, I want a separate login so that I can submit leads to multiple roofing companies

**Technical Requirements**:
- Row Level Security (RLS) for data isolation
- Company-based user management
- Role hierarchy: Owner > Manager > Sales Rep > Field Worker > Partner
- Single sign-on capability for larger companies

### 3.2 Customer Management
**Epic**: Comprehensive customer database

- As a **sales rep**, I want to capture customer information so that I can track all interactions
- As an **office manager**, I want to see customer history so that I can provide better service
- As a **field worker**, I want to access customer details on mobile so that I know job requirements

**Features**:
- Customer profiles with contact information
- Property details (address, roof type, size, age)
- Communication history and notes
- Document storage (insurance, permits, contracts)
- Customer tags and segmentation
- Duplicate detection and merge capability

### 3.3 Lead Management & Partner Portal
**Epic**: Lead capture and partner ecosystem

- As a **partner**, I want to submit leads through a simple form so that I can earn referral fees
- As a **sales rep**, I want to receive lead notifications so that I can follow up quickly
- As a **partner**, I want to track my lead status so that I know when to expect payment
- As a **company owner**, I want to manage partner relationships so that I can optimize lead sources

**Partner Portal Features**:
- Lead submission form with property photos
- Lead status tracking dashboard
- Commission tracking and payment history
- Partner performance analytics
- Mobile-optimized for door-to-door partners

**Lead Management Features**:
- Lead scoring and qualification
- Automatic lead assignment to sales reps
- Lead source tracking and ROI analysis
- Follow-up task automation
- Lead conversion reporting

### 3.4 Job/Project Management
**Epic**: Complete job lifecycle management

- As a **project manager**, I want to create jobs from estimates so that work can begin
- As a **field crew**, I want to update job status so that everyone knows progress
- As a **customer**, I want to see job progress so that I know what to expect

**Features**:
- Job creation from accepted estimates
- Project stages: Scheduled > In Progress > Materials Ordered > Installation > Completed > Invoiced
- Crew assignment and scheduling
- Timeline tracking with milestone management
- Job notes and communication log
- Weather tracking integration
- Permit and inspection tracking

### 3.5 Estimate Builder
**Epic**: Professional estimate creation

- As a **sales rep**, I want to create detailed estimates so that customers understand the scope
- As a **company owner**, I want standardized pricing so that margins are consistent
- As a **customer**, I want professional estimates so that I can make informed decisions

**Features**:
- Line-item estimates with materials, labor, and markup
- Pre-built templates for common roof types
- Drag-and-drop estimate builder
- Photo integration for visual estimates
- PDF generation with company branding
- Electronic signature capability
- Estimate versioning and revision tracking
- Automatic material calculators (squares, linear feet, etc.)

### 3.6 Photo & Document Management
**Epic**: Visual project documentation

- As a **field crew**, I want to upload before/after photos so that work is documented
- As a **sales rep**, I want to attach photos to estimates so that customers see the issues
- As a **customer**, I want to see progress photos so that I know work quality

**Features**:
- Mobile photo upload with GPS tagging
- Before/during/after photo organization
- Damage documentation with annotations
- Document storage (contracts, permits, warranties)
- Customer portal photo access
- Automatic backup and sync
- Photo compression and optimization

### 3.7 Scheduling & Dispatch
**Epic**: Crew and resource management

- As a **dispatcher**, I want to schedule crews so that jobs are completed on time
- As a **field worker**, I want to see my schedule so that I know where to go
- As a **customer**, I want appointment notifications so that I can be present

**Features**:
- Drag-and-drop calendar interface
- Crew availability tracking
- Equipment and material scheduling
- Weather-based rescheduling suggestions
- Customer appointment confirmations
- GPS tracking for crew location
- Time tracking for payroll integration

### 3.8 Material & Inventory Management
**Epic**: Material tracking and procurement

- As a **project manager**, I want to order materials so that jobs aren't delayed
- As a **warehouse manager**, I want to track inventory so that I know what's available
- As a **field crew**, I want to request materials so that I have what I need

**Features**:
- Material database with pricing
- Inventory tracking by location
- Purchase order generation
- Supplier integration (future)
- Material usage tracking per job
- Low stock alerts
- Waste tracking and reporting

### 3.9 Invoicing & Payments
**Epic**: Financial management and collections

- As an **office manager**, I want to generate invoices so that customers can pay
- As a **customer**, I want flexible payment options so that I can pay easily
- As a **company owner**, I want payment tracking so that I know cash flow

**Features**:
- Automated invoice generation from completed jobs
- Progress billing for large projects
- Multiple payment methods (credit card, ACH, check)
- Payment plan management
- Late payment tracking and automated reminders
- Integration with accounting software (QuickBooks, etc.)
- Tax calculation and reporting

### 3.10 Customer Portal
**Epic**: Customer self-service platform

- As a **customer**, I want to see my project status so that I'm informed
- As a **customer**, I want to communicate with my crew so that issues are resolved
- As a **customer**, I want to access documents so that I have records

**Features**:
- Project status dashboard
- Photo gallery access
- Document download (contracts, warranties, invoices)
- Direct messaging with project team
- Payment portal
- Appointment scheduling/rescheduling
- Review and feedback submission

### 3.11 Reporting & Analytics
**Epic**: Business intelligence and performance tracking

- As a **company owner**, I want sales reports so that I can track performance
- As a **manager**, I want crew productivity reports so that I can optimize operations
- As a **sales manager**, I want conversion reports so that I can improve processes

**Features**:
- Sales pipeline and conversion tracking
- Crew productivity and profitability reports
- Customer satisfaction analytics
- Lead source ROI analysis
- Partner performance tracking
- Financial reporting (P&L, cash flow)
- Custom dashboard creation
- Automated report scheduling

## 4. Technical Architecture

### 4.1 Technology Stack

**Frontend**:
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- React Hook Form for form management
- TanStack Query for data fetching
- Zustand for state management

**Backend**:
- Supabase (PostgreSQL database)
- Row Level Security for multi-tenancy
- Supabase Auth for authentication
- Edge Functions for serverless logic
- Supabase Storage for file management

**Mobile**:
- Progressive Web App (PWA)
- Responsive design for all screen sizes
- Offline capability for field operations
- Push notifications

### 4.2 Database Schema

#### Core Tables

**companies**
```sql
- id (uuid, primary key)
- name (text)
- plan_type (enum: starter, professional, enterprise)
- settings (jsonb)
- created_at (timestamp)
- updated_at (timestamp)
```

**users**
```sql
- id (uuid, primary key)
- company_id (uuid, foreign key)
- email (text, unique)
- role (enum: owner, manager, sales_rep, field_worker, partner)
- profile (jsonb)
- created_at (timestamp)
```

**customers**
```sql
- id (uuid, primary key)
- company_id (uuid, foreign key)
- name (text)
- email (text)
- phone (text)
- address (jsonb)
- property_details (jsonb)
- tags (text[])
- created_at (timestamp)
```

**leads**
```sql
- id (uuid, primary key)
- company_id (uuid, foreign key)
- partner_id (uuid, foreign key, nullable)
- customer_id (uuid, foreign key)
- source (text)
- status (enum: new, contacted, qualified, estimate_sent, won, lost)
- score (integer)
- notes (text)
- created_at (timestamp)
```

**jobs**
```sql
- id (uuid, primary key)
- company_id (uuid, foreign key)
- customer_id (uuid, foreign key)
- estimate_id (uuid, foreign key)
- status (enum: scheduled, in_progress, materials_ordered, installation, completed, invoiced)
- scheduled_start (date)
- actual_start (date)
- completion_date (date)
- assigned_crew (uuid[])
- notes (text)
- created_at (timestamp)
```

**estimates**
```sql
- id (uuid, primary key)
- company_id (uuid, foreign key)
- customer_id (uuid, foreign key)
- sales_rep_id (uuid, foreign key)
- status (enum: draft, sent, accepted, rejected, expired)
- line_items (jsonb)
- total_amount (decimal)
- valid_until (date)
- created_at (timestamp)
```

**photos**
```sql
- id (uuid, primary key)
- company_id (uuid, foreign key)
- job_id (uuid, foreign key, nullable)
- estimate_id (uuid, foreign key, nullable)
- type (enum: damage, before, during, after)
- file_path (text)
- metadata (jsonb)
- created_at (timestamp)
```

### 4.3 API Structure

**RESTful API with real-time subscriptions**:
- `/api/customers` - Customer CRUD operations
- `/api/leads` - Lead management
- `/api/jobs` - Job lifecycle management
- `/api/estimates` - Estimate creation and management
- `/api/photos` - File upload and management
- `/api/reports` - Analytics and reporting
- `/api/partners` - Partner portal endpoints

**Real-time subscriptions**:
- Job status updates
- New lead notifications
- Photo uploads
- Schedule changes

### 4.4 Security & Compliance

- Row Level Security (RLS) for data isolation
- Role-based access control (RBAC)
- GDPR compliance for data handling
- SOC 2 Type II compliance preparation
- Encrypted file storage
- Audit logging for all actions

## 5. User Interface Design

### 5.1 Design Principles
- **Mobile-first**: Field crews need mobile access
- **Intuitive**: Minimal learning curve for non-tech users
- **Fast**: Quick load times for field operations
- **Professional**: Enterprise-grade appearance for customer-facing features

### 5.2 Key Screens

**Dashboard**:
- Today's schedule overview
- Key metrics (sales, jobs in progress, overdue items)
- Recent activity feed
- Quick actions (new customer, create estimate, etc.)

**Lead Management**:
- Lead pipeline view (kanban board)
- Lead detail forms
- Partner submission interface
- Follow-up task management

**Job Board**:
- Calendar view for scheduling
- Job detail modal with all information
- Status update interface
- Photo upload with drag-and-drop

**Estimate Builder**:
- Step-by-step wizard interface
- Visual line-item builder
- Photo integration panels
- PDF preview and generation

**Partner Portal**:
- Simplified lead submission form
- Lead tracking dashboard
- Commission reporting
- Performance metrics

### 5.3 Mobile Considerations
- Touch-friendly interfaces
- Offline data sync
- Camera integration for photos
- GPS for job location verification
- Push notifications for important updates

## 6. Integration Requirements

### 6.1 Essential Integrations
- **Payment Processing**: Stripe for credit cards, ACH
- **Email**: SendGrid/Mailgun for notifications
- **SMS**: Twilio for customer communications
- **Weather**: OpenWeatherMap for scheduling
- **Maps**: Google Maps for routing and location

### 6.2 Future Integrations
- **Accounting**: QuickBooks, Xero
- **Material Suppliers**: ABC Supply, SRS Distribution
- **Insurance**: Integration with major carriers
- **Background Checks**: For partner verification

## 7. Success Metrics & KPIs

### 7.1 User Engagement
- Daily active users (DAU)
- Feature adoption rates
- Mobile app usage
- Customer portal engagement

### 7.2 Business Metrics
- Lead conversion rates
- Average deal size
- Time from lead to close
- Customer satisfaction scores
- Partner-generated revenue

### 7.3 Technical Metrics
- App performance (load times)
- Uptime and reliability
- Error rates
- Data sync success rates

## 8. Development Phases

### Phase 1: MVP (Weeks 1-3)
- User authentication and company setup
- Customer management
- Basic lead tracking
- Simple job creation
- Photo upload capability

### Phase 2: Core Features (Weeks 4-6)
- Estimate builder
- Partner portal
- Advanced job management
- Customer portal basics
- Mobile optimization

### Phase 3: Advanced Features (Weeks 7-9)
- Scheduling and dispatch
- Invoicing and payments
- Reporting and analytics
- Material management
- Advanced integrations

### Phase 4: Scale & Polish (Weeks 10-12)
- Performance optimization
- Advanced reporting
- Additional integrations
- Enterprise features
- Marketing and onboarding flows

## 9. Deployment & DevOps

### 9.1 Environment Strategy
- **Development**: Local development with Supabase local
- **Staging**: Vercel preview deployments
- **Production**: Vercel production with Supabase cloud

### 9.2 CI/CD Pipeline
- GitHub Actions for automated testing
- Automated database migrations
- Feature flag management
- Rollback capabilities

### 9.3 Monitoring
- Application performance monitoring (APM)
- Error tracking and alerting
- User analytics and behavior tracking
- Database performance monitoring

## 10. Compliance & Security

### 10.1 Data Protection
- Encryption at rest and in transit
- Regular security audits
- GDPR compliance measures
- Data retention policies

### 10.2 Business Compliance
- SOC 2 Type II preparation
- HIPAA considerations (if handling personal health info)
- State licensing integration capabilities
- Insurance requirements tracking

This PRD provides a comprehensive foundation for building a world-class roofing CRM with partner portal capabilities. The focus on mobile-first design, scalable architecture, and industry-specific features will create a competitive advantage in the roofing software market. 