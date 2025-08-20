export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Enums
export type UserRole = 'owner' | 'manager' | 'sales_rep' | 'field_worker' | 'partner'
export type PlanType = 'starter' | 'professional' | 'enterprise'
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'estimate_sent' | 'won' | 'lost'
export type JobStatus = 'scheduled' | 'in_progress' | 'materials_ordered' | 'installation' | 'completed' | 'invoiced'
export type EstimateStatus = 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired'
export type PhotoType = 'damage' | 'before' | 'during' | 'after'

// Database Tables
export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          plan_type: PlanType
          settings: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          plan_type?: PlanType
          settings?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          plan_type?: PlanType
          settings?: Json
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          company_id: string
          email: string
          role: UserRole
          profile: Json
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          email: string
          role?: UserRole
          profile?: Json
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          email?: string
          role?: UserRole
          profile?: Json
          created_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          company_id: string
          name: string
          email: string | null
          phone: string | null
          address: Json | null
          property_details: Json | null
          tags: string[] | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          name: string
          email?: string | null
          phone?: string | null
          address?: Json | null
          property_details?: Json | null
          tags?: string[] | null
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          address?: Json | null
          property_details?: Json | null
          tags?: string[] | null
          created_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          company_id: string
          partner_id: string | null
          customer_id: string
          source: string
          status: LeadStatus
          score: number | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          partner_id?: string | null
          customer_id: string
          source: string
          status?: LeadStatus
          score?: number | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          partner_id?: string | null
          customer_id?: string
          source?: string
          status?: LeadStatus
          score?: number | null
          notes?: string | null
          created_at?: string
        }
      }
      jobs: {
        Row: {
          id: string
          company_id: string
          customer_id: string
          estimate_id: string | null
          status: JobStatus
          scheduled_start: string | null
          actual_start: string | null
          completion_date: string | null
          assigned_crew: string[] | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          customer_id: string
          estimate_id?: string | null
          status?: JobStatus
          scheduled_start?: string | null
          actual_start?: string | null
          completion_date?: string | null
          assigned_crew?: string[] | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          customer_id?: string
          estimate_id?: string | null
          status?: JobStatus
          scheduled_start?: string | null
          actual_start?: string | null
          completion_date?: string | null
          assigned_crew?: string[] | null
          notes?: string | null
          created_at?: string
        }
      }
      estimates: {
        Row: {
          id: string
          company_id: string
          customer_id: string
          sales_rep_id: string
          status: EstimateStatus
          line_items: Json
          total_amount: number
          valid_until: string | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          customer_id: string
          sales_rep_id: string
          status?: EstimateStatus
          line_items: Json
          total_amount: number
          valid_until?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          customer_id?: string
          sales_rep_id?: string
          status?: EstimateStatus
          line_items?: Json
          total_amount?: number
          valid_until?: string | null
          created_at?: string
        }
      }
      photos: {
        Row: {
          id: string
          company_id: string
          job_id: string | null
          estimate_id: string | null
          type: PhotoType
          file_path: string
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          job_id?: string | null
          estimate_id?: string | null
          type: PhotoType
          file_path: string
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          job_id?: string | null
          estimate_id?: string | null
          type?: PhotoType
          file_path?: string
          metadata?: Json | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: UserRole
      plan_type: PlanType
      lead_status: LeadStatus
      job_status: JobStatus
      estimate_status: EstimateStatus
      photo_type: PhotoType
    }
  }
}

// Helper types for easier usage
export type Company = Database['public']['Tables']['companies']['Row']
export type User = Database['public']['Tables']['users']['Row']
export type Customer = Database['public']['Tables']['customers']['Row']
export type Lead = Database['public']['Tables']['leads']['Row']
export type Job = Database['public']['Tables']['jobs']['Row']
export type Estimate = Database['public']['Tables']['estimates']['Row']
export type Photo = Database['public']['Tables']['photos']['Row']

export type InsertCompany = Database['public']['Tables']['companies']['Insert']
export type InsertUser = Database['public']['Tables']['users']['Insert']
export type InsertCustomer = Database['public']['Tables']['customers']['Insert']
export type InsertLead = Database['public']['Tables']['leads']['Insert']
export type InsertJob = Database['public']['Tables']['jobs']['Insert']
export type InsertEstimate = Database['public']['Tables']['estimates']['Insert']
export type InsertPhoto = Database['public']['Tables']['photos']['Insert']

export type UpdateCompany = Database['public']['Tables']['companies']['Update']
export type UpdateUser = Database['public']['Tables']['users']['Update']
export type UpdateCustomer = Database['public']['Tables']['customers']['Update']
export type UpdateLead = Database['public']['Tables']['leads']['Update']
export type UpdateJob = Database['public']['Tables']['jobs']['Update']
export type UpdateEstimate = Database['public']['Tables']['estimates']['Update']
export type UpdatePhoto = Database['public']['Tables']['photos']['Update'] 