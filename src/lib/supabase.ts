import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// Vercel Supabase integration automatically provides these environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only throw errors in browser/runtime, not during build
if (typeof window !== 'undefined') {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
  }
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