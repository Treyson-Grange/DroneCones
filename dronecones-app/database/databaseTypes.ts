export type Cone = Database['public']['Tables']['cones']['Insert']
export type IcecreamFlavor = Database['public']['Tables']['icecreamFlavors']['Insert']
export type Topping = Database['public']['Tables']['toppings']['Insert']
export type UserType = Database['public']['Tables']['userType']['Insert']
export type User = Database['public']['Tables']['users']['Insert']
export type UserUpdate = Database['public']['Tables']['users']['Update']
export type Address = Database['public']['Tables']['addresses']['Insert']
export type Transaction = Database['public']['Tables']['transactions']['Insert']
export type OrderItem = Database['public']['Tables']['orderItem']['Insert']
export type ItemInProgress = Database['public']['Tables']['itemsInProgress']['Insert']
export type DroneDelivery = Database['public']['Tables']['droneDelivery']['Insert']
export type Drone = Database['public']['Tables']['drones']['Insert']
export type DroneSize = Database['public']['Tables']['drones']['Insert']
export type SupportForm = Database['public']['Tables']['supportForms']['Insert']
export type RestockHistory = Database['public']['Tables']['restockHistory']['Insert']

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
          apt_num: string | null
          city: string | null
          country: string | null
          id: number
          state: string | null
          street_address: string | null
          user_id: string | null
          zipcode: string | null
        }
        Insert: {
          apt_num?: string | null
          city?: string | null
          country?: string | null
          id?: number
          state?: string | null
          street_address?: string | null
          user_id?: string | null
          zipcode?: string | null
        }
        Update: {
          apt_num?: string | null
          city?: string | null
          country?: string | null
          id?: number
          state?: string | null
          street_address?: string | null
          user_id?: string | null
          zipcode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
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
          image: string | null
          name: string
          price: number | null
        }
        Insert: {
          amount?: number | null
          available?: boolean | null
          id?: number
          image?: string | null
          name: string
          price?: number | null
        }
        Update: {
          amount?: number | null
          available?: boolean | null
          id?: number
          image?: string | null
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
          drone_id: number | null
          id: number
          transaction_id: number
        }
        Insert: {
          drone_id?: number | null
          id?: number
          transaction_id: number
        }
        Update: {
          drone_id?: number | null
          id?: number
          transaction_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "droneDelivery_drone_id_fkey"
            columns: ["drone_id"]
            isOneToOne: false
            referencedRelation: "drones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "droneDelivery_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          }
        ]
      }
      drones: {
        Row: {
          available: boolean | null
          id: number
          in_use: boolean | null
          last_delivery: string | null
          name: string | null
          owner_id: string | null
          size: number | null
        }
        Insert: {
          available?: boolean | null
          id?: number
          in_use?: boolean | null
          last_delivery?: string | null
          name?: string | null
          owner_id?: string | null
          size?: number | null
        }
        Update: {
          available?: boolean | null
          id?: number
          in_use?: boolean | null
          last_delivery?: string | null
          name?: string | null
          owner_id?: string | null
          size?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "drones_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "drones_size_fkey"
            columns: ["size"]
            isOneToOne: false
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
          image: string | null
          name: string
          price_per_scoop: number | null
        }
        Insert: {
          amount?: number | null
          available?: boolean | null
          id?: number
          image?: string | null
          name?: string
          price_per_scoop?: number | null
        }
        Update: {
          amount?: number | null
          available?: boolean | null
          id?: number
          image?: string | null
          name?: string
          price_per_scoop?: number | null
        }
        Relationships: []
      }
      itemsInProgress: {
        Row: {
          cone: number | null
          flavor1: number | null
          flavor2: number | null
          flavor3: number | null
          id: number
          price: number | null
          scoops: number | null
          topping: number | null
          user_id: string
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
          user_id: string
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
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "itemsInProgress_cone_fkey"
            columns: ["cone"]
            isOneToOne: false
            referencedRelation: "cones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "itemsInProgress_flavor1_fkey"
            columns: ["flavor1"]
            isOneToOne: false
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "itemsInProgress_flavor2_fkey"
            columns: ["flavor2"]
            isOneToOne: false
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "itemsInProgress_flavor3_fkey"
            columns: ["flavor3"]
            isOneToOne: false
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "itemsInProgress_topping_fkey"
            columns: ["topping"]
            isOneToOne: false
            referencedRelation: "toppings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "itemsInProgress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
          transaction_id: number
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
          transaction_id: number
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
          transaction_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "orderItem_cone_fkey"
            columns: ["cone"]
            isOneToOne: false
            referencedRelation: "cones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_flavor1_fkey"
            columns: ["flavor1"]
            isOneToOne: false
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_flavor2_fkey"
            columns: ["flavor2"]
            isOneToOne: false
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_flavor3_fkey"
            columns: ["flavor3"]
            isOneToOne: false
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_topping_fkey"
            columns: ["topping"]
            isOneToOne: false
            referencedRelation: "toppings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orderItem_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
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
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      restockHistory: {
        Row: {
          amount: number | null
          cone: number | null
          created_at: string
          flavor: number | null
          id: number
          status: string | null
          topping: number | null
          type: string | null
        }
        Insert: {
          amount?: number | null
          cone?: number | null
          created_at?: string
          flavor?: number | null
          id?: number
          status?: string | null
          topping?: number | null
          type?: string | null
        }
        Update: {
          amount?: number | null
          cone?: number | null
          created_at?: string
          flavor?: number | null
          id?: number
          status?: string | null
          topping?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "restockHistory_cone_fkey"
            columns: ["cone"]
            isOneToOne: false
            referencedRelation: "cones"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "restockHistory_flavor_fkey"
            columns: ["flavor"]
            isOneToOne: false
            referencedRelation: "icecreamFlavors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "restockHistory_topping_fkey"
            columns: ["topping"]
            isOneToOne: false
            referencedRelation: "toppings"
            referencedColumns: ["id"]
          }
        ]
      }
      supportForms: {
        Row: {
          created_at: string | null
          form_field: string | null
          id: number
          resolved: boolean | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          form_field?: string | null
          id?: number
          resolved?: boolean | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          form_field?: string | null
          id?: number
          resolved?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supportForms_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
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
          image: string | null
          name: string
          price: number | null
        }
        Insert: {
          amount?: number | null
          available?: boolean | null
          id?: number
          image?: string | null
          name?: string
          price?: number | null
        }
        Update: {
          amount?: number | null
          available?: boolean | null
          id?: number
          image?: string | null
          name?: string
          price?: number | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          completed: boolean | null
          final_price: number | null
          id: number
          item_count: number | null
          order_time: string | null
          sales_price: number | null
          tax: number | null
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          final_price?: number | null
          id?: number
          item_count?: number | null
          order_time?: string | null
          sales_price?: number | null
          tax?: number | null
          user_id: string
        }
        Update: {
          completed?: boolean | null
          final_price?: number | null
          id?: number
          item_count?: number | null
          order_time?: string | null
          sales_price?: number | null
          tax?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          banned: boolean | null
          email: string | null
          firstname: string | null
          id: string
          lastname: string | null
          username: string | null
          usertype: number
        }
        Insert: {
          banned?: boolean | null
          email?: string | null
          firstname?: string | null
          id?: string
          lastname?: string | null
          username?: string | null
          usertype: number
        }
        Update: {
          banned?: boolean | null
          email?: string | null
          firstname?: string | null
          id?: string
          lastname?: string | null
          username?: string | null
          usertype?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_usertype_fkey"
            columns: ["usertype"]
            isOneToOne: false
            referencedRelation: "userType"
            referencedColumns: ["id"]
          }
        ]
      }
      userType: {
        Row: {
          id: number
          user_type: string
        }
        Insert: {
          id?: number
          user_type: string
        }
        Update: {
          id?: number
          user_type?: string
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
      toggle_drone_availability: {
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
      toggle_form_resolved: {
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
      toggle_user_ban: {
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
