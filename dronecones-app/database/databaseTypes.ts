export type Cone = Database['public']['Tables']['cones']['Row']
export type IcecreamFlavor = Database['public']['Tables']['icecreamFlavors']['Row']
export type Topping = Database['public']['Tables']['toppings']['Row']
export type UserType = Database['public']['Tables']['userType']['Row']
export type User = Database['public']['Tables']['users']['Row']
export type UserUpdate = Database['public']['Tables']['users']['Update']
export type Address = Database['public']['Tables']['addresses']['Row']
export type Transaction = Database['public']['Tables']['transactions']['Row']
export type OrderItem = Database['public']['Tables']['orderItem']['Row']
export type DroneDelivery = Database['public']['Tables']['droneDelivery']['Row']
export type Drone = Database['public']['Tables']['drones']['Row']
export type DroneSize = Database['public']['Tables']['drones']['Row']
export type SupportForm = Database['public']['Tables']['supportForms']['Row']

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
      addresses: {
        Row: {
          aptNum: string | null
          city: string | null
          country: string | null
          id: number
          state: string | null
          streetAddress: string | null
          userID: number | null
          zipCode: string | null
        }
        Insert: {
          aptNum?: string | null
          city?: string | null
          country?: string | null
          id?: number
          state?: string | null
          streetAddress?: string | null
          userID?: number | null
          zipCode?: string | null
        }
        Update: {
          aptNum?: string | null
          city?: string | null
          country?: string | null
          id?: number
          state?: string | null
          streetAddress?: string | null
          userID?: number | null
          zipCode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_userID_fkey"
            columns: ["userID"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
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
      droneDelivery: {
        Row: {
          droneID: number | null
          id: number
          transactionID: number
        }
        Insert: {
          droneID?: number | null
          id?: number
          transactionID: number
        }
        Update: {
          droneID?: number | null
          id?: number
          transactionID?: number
        }
        Relationships: [
          {
            foreignKeyName: "droneDelivery_droneID_fkey"
            columns: ["droneID"]
            referencedRelation: "drones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "droneDelivery_transactionID_fkey"
            columns: ["transactionID"]
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          }
        ]
      }
      drones: {
        Row: {
          available: boolean | null
          id: number
          inUser: boolean | null
          lastDelivery: string | null
          name: string | null
          ownerID: number
          size: number | null
        }
        Insert: {
          available?: boolean | null
          id?: number
          inUser?: boolean | null
          lastDelivery?: string | null
          name?: string | null
          ownerID: number
          size?: number | null
        }
        Update: {
          available?: boolean | null
          id?: number
          inUser?: boolean | null
          lastDelivery?: string | null
          name?: string | null
          ownerID?: number
          size?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "drones_ownerID_fkey"
            columns: ["ownerID"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "drones_size_fkey"
            columns: ["size"]
            referencedRelation: "droneSizes"
            referencedColumns: ["id"]
          }
        ]
      }
      droneSizes: {
        Row: {
          count: number
          id: number
        }
        Insert: {
          count: number
          id?: number
        }
        Update: {
          count?: number
          id?: number
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
      orderItem: {
        Row: {
          cone: number | null
          flavor1: number | null
          flavor2: number | null
          flavor3: number | null
          id: number
          price: number | null
          scoops: number | null
          topping: number | null
          transactionID: number
        }
        Insert: {
          cone?: number | null
          flavor1?: number | null
          flavor2?: number | null
          flavor3?: number | null
          id?: number
          price?: number | null
          scoops?: number | null
          topping?: number | null
          transactionID: number
        }
        Update: {
          cone?: number | null
          flavor1?: number | null
          flavor2?: number | null
          flavor3?: number | null
          id?: number
          price?: number | null
          scoops?: number | null
          topping?: number | null
          transactionID?: number
        }
        Relationships: [
          {
            foreignKeyName: "orderItem_cone_fkey"
            columns: ["cone"]
            referencedRelation: "cones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_flavor1_fkey"
            columns: ["flavor1"]
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_flavor2_fkey"
            columns: ["flavor2"]
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_flavor3_fkey"
            columns: ["flavor3"]
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_topping_fkey"
            columns: ["topping"]
            referencedRelation: "toppings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_transactionID_fkey"
            columns: ["transactionID"]
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          }
        ]
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
      supportForms: {
        Row: {
          formField: string | null
          id: number
          resolved: boolean | null
          userID: number
        }
        Insert: {
          formField?: string | null
          id?: number
          resolved?: boolean | null
          userID: number
        }
        Update: {
          formField?: string | null
          id?: number
          resolved?: boolean | null
          userID?: number
        }
        Relationships: [
          {
            foreignKeyName: "supportForms_userID_fkey"
            columns: ["userID"]
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
      transactions: {
        Row: {
          completed: boolean | null
          finalPrice: number | null
          id: number
          itemCount: number | null
          orderTime: string | null
          salesPrice: number | null
          tax: number | null
          userID: number | null
        }
        Insert: {
          completed?: boolean | null
          finalPrice?: number | null
          id?: number
          itemCount?: number | null
          orderTime?: string | null
          salesPrice?: number | null
          tax?: number | null
          userID?: number | null
        }
        Update: {
          completed?: boolean | null
          finalPrice?: number | null
          id?: number
          itemCount?: number | null
          orderTime?: string | null
          salesPrice?: number | null
          tax?: number | null
          userID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_userID_fkey"
            columns: ["userID"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          banned: boolean | null
          email: string | null
          firstName: string | null
          id: number
          lastName: string | null
          username: string | null
          userType: number
        }
        Insert: {
          banned?: boolean | null
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          username?: string | null
          userType: number
        }
        Update: {
          banned?: boolean | null
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          username?: string | null
          userType?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_userType_fkey"
            columns: ["userType"]
            referencedRelation: "userType"
            referencedColumns: ["id"]
          }
        ]
      }
      userType: {
        Row: {
          id: number
          userType: string
        }
        Insert: {
          id?: number
          userType: string
        }
        Update: {
          id?: number
          userType?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_cone_amount: {
        Args: {
          quote_id: number
          increment_num: number
        }
        Returns: undefined
      }
      add_flavor_amount: {
        Args: {
          quote_id: number
          increment_num: number
        }
        Returns: undefined
      }
      add_topping_amount: {
        Args: {
          quote_id: number
          increment_num: number
        }
        Returns: undefined
      }
      toggle_cone_availability: {
        Args: {
          quote_id: number
        }
        Returns: undefined
      }
      toggle_flavor_availability: {
        Args: {
          quote_id: number
        }
        Returns: undefined
      }
      toggle_topping_availability: {
        Args: {
          quote_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
