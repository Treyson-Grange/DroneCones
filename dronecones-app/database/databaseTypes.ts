export type Cone = Database['public']['Tables']['cones']['Row']
export type IcecreamFlavor = Database['public']['Tables']['icecreamFlavors']['Row']
export type Topping = Database['public']['Tables']['toppings']['Row']

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cones: {
        Row: {
          amount: number | null
          available: boolean | null
          id: number
          name: string
          price: number | null
        }
        Insert: {
          amount?: number | null
          available?: boolean | null
          id?: number
          name: string
          price?: number | null
        }
        Update: {
          amount?: number | null
          available?: boolean | null
          id?: number
          name?: string
          price?: number | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      icecreamFlavors: {
        Row: {
          amount: number | null
          available: boolean | null
          id: number
          name: string
          pricePerScoop: number | null
        }
        Insert: {
          amount?: number | null
          available?: boolean | null
          id?: number
          name?: string
          pricePerScoop?: number | null
        }
        Update: {
          amount?: number | null
          available?: boolean | null
          id?: number
          name?: string
          pricePerScoop?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      toppings: {
        Row: {
          amount: number | null
          available: boolean | null
          id: number
          name: string
          price: number | null
        }
        Insert: {
          amount?: number | null
          available?: boolean | null
          id?: number
          name?: string
          price?: number | null
        }
        Update: {
          amount?: number | null
          available?: boolean | null
          id?: number
          name?: string
          price?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
