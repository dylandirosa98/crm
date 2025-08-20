# RoofCRM - Roofing Business Management Platform

A comprehensive SaaS platform designed specifically for roofing contractors to manage their entire business operations, from lead generation through project completion. Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

### Core Features
- **Multi-tenant Architecture** - Secure company-based data isolation
- **Lead Management** - Partner portal for lead submission and tracking
- **Customer Management** - Comprehensive customer database
- **Estimate Builder** - Professional estimate creation with photos
- **Job Management** - Complete project lifecycle tracking
- **Photo Management** - Before/after documentation with GPS tagging
- **Mobile-First Design** - Optimized for field operations
- **Real-time Updates** - Live notifications and status updates

### User Roles
- **Company Owner** - Full system access and management
- **Manager** - Team and operations oversight
- **Sales Rep** - Lead and estimate management
- **Field Worker** - Mobile job tracking and updates
- **Partner** - Lead submission and commission tracking

## 🛠 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **State Management**: Zustand, TanStack Query
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI, Lucide React
- **Deployment**: Vercel + Supabase Integration

## 📋 Prerequisites

- Node.js 18+ and npm
- Vercel account
- GitHub account

## 🚀 Getting Started

### 1. Clone and Install Dependencies

\`\`\`bash
git clone <your-repo-url>
cd crm
npm install
\`\`\`

### 2. Run Local Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🌐 Deploy to Production with Vercel + Supabase Integration

### Option 1: One-Click Deploy (Recommended)

1. **Deploy to Vercel:**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" and import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Add Supabase Integration:**
   - In your Vercel dashboard, go to your project
   - Click on the "Integrations" tab
   - Find "Supabase" and click "Add Integration"
   - Choose "Create new Supabase project" or connect existing one
   - Vercel will automatically set up all environment variables

3. **Set up Database:**
   - Once the Supabase project is created, go to your Supabase dashboard
   - Navigate to the SQL Editor
   - Copy and paste the contents of `supabase-schema.sql`
   - Run the SQL to create all tables and security policies

4. **Deploy:**
   - Your app will automatically redeploy with Supabase connected
   - All environment variables are managed by Vercel

### Option 2: Manual Setup

If you prefer manual setup:

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Run the SQL schema from `supabase-schema.sql`

2. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - In project settings, add environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Deploy

## 🗄 Database Schema

The application uses the following main entities:

- **Companies** - Multi-tenant organization data
- **Users** - User accounts with role-based access
- **Customers** - Customer and property information
- **Leads** - Lead tracking and partner management
- **Estimates** - Professional estimate creation
- **Jobs** - Project lifecycle management
- **Photos** - Visual documentation system

All tables use Row Level Security (RLS) for multi-tenant data isolation.

## 📱 Mobile Support

The application is built mobile-first with:
- Progressive Web App (PWA) capabilities
- Offline functionality for field operations
- Touch-optimized interfaces
- Camera integration for photo uploads
- GPS tagging for location verification

## 🔐 Authentication & Security

- Supabase Auth with email/password and social logins
- Row Level Security (RLS) for data isolation
- Role-based access control (RBAC)
- Multi-tenant architecture
- Secure file storage and access

## 📁 Project Structure

\`\`\`
src/
├── app/                 # Next.js 14 app router
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Main application
│   └── partner/        # Partner portal
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   └── forms/         # Form components
├── lib/               # Utility libraries
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
\`\`\`

## 🔧 Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
\`\`\`

### Code Style

- TypeScript for type safety
- ESLint + Prettier for code formatting
- Conventional commits for git messages
- Component-first architecture

## 📈 Roadmap

### Phase 1: MVP (Weeks 1-3) ✅
- [x] Project setup and authentication
- [x] Basic customer management
- [x] Lead tracking system
- [x] Simple job creation
- [x] Photo upload capability

### Phase 2: Core Features (Weeks 4-6)
- [ ] Estimate builder
- [ ] Partner portal
- [ ] Advanced job management
- [ ] Customer portal basics
- [ ] Mobile optimization

### Phase 3: Advanced Features (Weeks 7-9)
- [ ] Scheduling and dispatch
- [ ] Invoicing and payments
- [ ] Reporting and analytics
- [ ] Material management
- [ ] Advanced integrations

### Phase 4: Scale & Polish (Weeks 10-12)
- [ ] Performance optimization
- [ ] Advanced reporting
- [ ] Additional integrations
- [ ] Enterprise features

## 🚀 Vercel + Supabase Integration Benefits

Using Vercel's Supabase integration provides:

- **Automatic Environment Variables** - No manual setup required
- **Seamless Deployment** - One-click setup and deployment
- **Preview Deployments** - Each PR gets its own preview with database
- **Edge Functions** - Supabase Edge Functions work out of the box
- **Analytics Integration** - Built-in analytics and monitoring
- **Automatic Updates** - Environment variables stay in sync

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Email: support@roofcrm.com
- Documentation: [docs.roofcrm.com](https://docs.roofcrm.com)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database and auth by [Supabase](https://supabase.com/)
- Deployed on [Vercel](https://vercel.com/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

**RoofCRM** - Streamline your roofing business operations with modern technology. 