import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// Vercel Supabase integration automatically provides these environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Auth helpers
export const auth = supabase.auth

// Database helpers - these will be used once we connect to Supabase
export const getCompanies = () => supabase.from('companies').select('*')
export const getUsers = () => supabase.from('users').select('*')
export const getCustomers = () => supabase.from('customers').select('*')
export const getLeads = () => supabase.from('leads').select('*')
export const getJobs = () => supabase.from('jobs').select('*')
export const getEstimates = () => supabase.from('estimates').select('*')
export const getPhotos = () => supabase.from('photos').select('*')

export default supabase 