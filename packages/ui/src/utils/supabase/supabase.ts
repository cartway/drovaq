export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      aod_plans: {
        Row: {
          applicable_user_type: string | null
          badge_icon_name: string | null
          created_at: string
          created_by: string
          id: number
          lower_limit: number
          lower_limit_percentage_discount: number
          name: string
          plan_description: string | null
          plan_price: number
          plan_validity_days: number
          single_delivery_discount_percentage: number
          status: Database["public"]["Enums"]["coupon_status"]
          updated_at: string | null
          upper_limit: number
          upper_limit_percentage_discount: number
        }
        Insert: {
          applicable_user_type?: string | null
          badge_icon_name?: string | null
          created_at?: string
          created_by: string
          id?: number
          lower_limit: number
          lower_limit_percentage_discount: number
          name: string
          plan_description?: string | null
          plan_price: number
          plan_validity_days: number
          single_delivery_discount_percentage: number
          status: Database["public"]["Enums"]["coupon_status"]
          updated_at?: string | null
          upper_limit: number
          upper_limit_percentage_discount: number
        }
        Update: {
          applicable_user_type?: string | null
          badge_icon_name?: string | null
          created_at?: string
          created_by?: string
          id?: number
          lower_limit?: number
          lower_limit_percentage_discount?: number
          name?: string
          plan_description?: string | null
          plan_price?: number
          plan_validity_days?: number
          single_delivery_discount_percentage?: number
          status?: Database["public"]["Enums"]["coupon_status"]
          updated_at?: string | null
          upper_limit?: number
          upper_limit_percentage_discount?: number
        }
        Relationships: [
          {
            foreignKeyName: "aod_plans_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      aod_subscriptions: {
        Row: {
          amount_paid: number
          aod_plan_id: number
          created_at: string
          end_date: string
          id: string
          is_expired: boolean | null
          paystack_reference_id: string
          start_date: string
          status: Database["public"]["Enums"]["coupon_status"]
          user_id: string
        }
        Insert: {
          amount_paid: number
          aod_plan_id: number
          created_at?: string
          end_date: string
          id?: string
          is_expired?: boolean | null
          paystack_reference_id: string
          start_date: string
          status: Database["public"]["Enums"]["coupon_status"]
          user_id: string
        }
        Update: {
          amount_paid?: number
          aod_plan_id?: number
          created_at?: string
          end_date?: string
          id?: string
          is_expired?: boolean | null
          paystack_reference_id?: string
          start_date?: string
          status?: Database["public"]["Enums"]["coupon_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aod_subscriptions_aod_plan_id_fkey"
            columns: ["aod_plan_id"]
            isOneToOne: false
            referencedRelation: "aod_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aod_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      aod_usage_logs: {
        Row: {
          aod_plan_id: number | null
          aod_subsription_id: string | null
          created_at: string
          delivery_fee: number | null
          id: number
          order_id: string
          user_id: string | null
        }
        Insert: {
          aod_plan_id?: number | null
          aod_subsription_id?: string | null
          created_at?: string
          delivery_fee?: number | null
          id?: number
          order_id: string
          user_id?: string | null
        }
        Update: {
          aod_plan_id?: number | null
          aod_subsription_id?: string | null
          created_at?: string
          delivery_fee?: number | null
          id?: number
          order_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "aod_usage_logs_aod_plan_id_fkey"
            columns: ["aod_plan_id"]
            isOneToOne: false
            referencedRelation: "aod_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aod_usage_logs_aod_subsription_id_fkey"
            columns: ["aod_subsription_id"]
            isOneToOne: false
            referencedRelation: "aod_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aod_usage_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "package_orders"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "aod_usage_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      business_categories: {
        Row: {
          created_at: string
          description: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      business_plans: {
        Row: {
          amount: number
          created_at: string
          duration: number
          id: string
          name: string
          paystack_plan_id: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          duration: number
          id?: string
          name: string
          paystack_plan_id: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          duration?: number
          id?: string
          name?: string
          paystack_plan_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      business_products: {
        Row: {
          business_id: string
          category_id: string
          created_at: string
          id: string
          image: string
          name: string
          price: string
          updated_at: string | null
        }
        Insert: {
          business_id: string
          category_id: string
          created_at?: string
          id?: string
          image: string
          name: string
          price: string
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          category_id?: string
          created_at?: string
          id?: string
          image?: string
          name?: string
          price?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_products_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "business_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      business_subscriptions: {
        Row: {
          amount: number
          business_id: string
          coupon: string | null
          created_at: string
          discount: number | null
          id: string
          payment_reference: string | null
          plan_id: string
          status: Database["public"]["Enums"]["business_subscriptions_status"]
          updated_at: string | null
        }
        Insert: {
          amount: number
          business_id: string
          coupon?: string | null
          created_at?: string
          discount?: number | null
          id?: string
          payment_reference?: string | null
          plan_id: string
          status?: Database["public"]["Enums"]["business_subscriptions_status"]
          updated_at?: string | null
        }
        Update: {
          amount?: number
          business_id?: string
          coupon?: string | null
          created_at?: string
          discount?: number | null
          id?: string
          payment_reference?: string | null
          plan_id?: string
          status?: Database["public"]["Enums"]["business_subscriptions_status"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_subscriptions_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "business_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      business_verifications: {
        Row: {
          business_id: string
          created_at: string
          file: string
          id: string
          id_number: string
          status: Database["public"]["Enums"]["business_verification_status"]
          type: Database["public"]["Enums"]["business_identification_type"]
          updated_at: string | null
        }
        Insert: {
          business_id: string
          created_at?: string
          file: string
          id?: string
          id_number: string
          status?: Database["public"]["Enums"]["business_verification_status"]
          type: Database["public"]["Enums"]["business_identification_type"]
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string
          file?: string
          id?: string
          id_number?: string
          status?: Database["public"]["Enums"]["business_verification_status"]
          type?: Database["public"]["Enums"]["business_identification_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_verifications_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          address: string | null
          allow_pickup: boolean | null
          category_id: string
          close: string | null
          created_at: string
          description: string | null
          id: string
          instagram: string | null
          logo: string
          name: string
          open: string | null
          phone: string | null
          slug: string
          status: Database["public"]["Enums"]["business_status"]
          tiktok: string | null
          updated_at: string | null
          user_id: string
          whatsapp: string | null
        }
        Insert: {
          address?: string | null
          allow_pickup?: boolean | null
          category_id: string
          close?: string | null
          created_at?: string
          description?: string | null
          id?: string
          instagram?: string | null
          logo: string
          name: string
          open?: string | null
          phone?: string | null
          slug: string
          status?: Database["public"]["Enums"]["business_status"]
          tiktok?: string | null
          updated_at?: string | null
          user_id: string
          whatsapp?: string | null
        }
        Update: {
          address?: string | null
          allow_pickup?: boolean | null
          category_id?: string
          close?: string | null
          created_at?: string
          description?: string | null
          id?: string
          instagram?: string | null
          logo?: string
          name?: string
          open?: string | null
          phone?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["business_status"]
          tiktok?: string | null
          updated_at?: string | null
          user_id?: string
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "businesses_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "business_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "businesses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          color: string
          created_at: string
          id: string
          landing_page: string | null
          location: string
          logo: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          color: string
          created_at?: string
          id?: string
          landing_page?: string | null
          location: string
          logo: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          landing_page?: string | null
          location?: string
          logo?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "companies_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons: {
        Row: {
          applicable_user_type:
            | Database["public"]["Enums"]["coupon_applicable_users"]
            | null
          applicable_users_id: string | null
          coupon_code: string
          coupon_type: Database["public"]["Enums"]["coupon_type"]
          created_at: string
          created_by: string | null
          fixed_amount: number | null
          flat_amount: number | null
          id: number
          is_applicable_to_all_selected_usertype: boolean | null
          max_total_usage_count: number | null
          max_usage_per_user_count: number | null
          min_valid_delivery_fee: number | null
          percentage: number | null
          service: Database["public"]["Enums"]["coupon_service"]
          status: Database["public"]["Enums"]["coupon_status"] | null
          updated_at: string | null
          usage_address: string | null
          usage_latitude: number | null
          usage_longitude: number | null
          validity_end_date_time: string | null
          validity_start_date_time: string
        }
        Insert: {
          applicable_user_type?:
            | Database["public"]["Enums"]["coupon_applicable_users"]
            | null
          applicable_users_id?: string | null
          coupon_code: string
          coupon_type: Database["public"]["Enums"]["coupon_type"]
          created_at?: string
          created_by?: string | null
          fixed_amount?: number | null
          flat_amount?: number | null
          id?: number
          is_applicable_to_all_selected_usertype?: boolean | null
          max_total_usage_count?: number | null
          max_usage_per_user_count?: number | null
          min_valid_delivery_fee?: number | null
          percentage?: number | null
          service?: Database["public"]["Enums"]["coupon_service"]
          status?: Database["public"]["Enums"]["coupon_status"] | null
          updated_at?: string | null
          usage_address?: string | null
          usage_latitude?: number | null
          usage_longitude?: number | null
          validity_end_date_time?: string | null
          validity_start_date_time: string
        }
        Update: {
          applicable_user_type?:
            | Database["public"]["Enums"]["coupon_applicable_users"]
            | null
          applicable_users_id?: string | null
          coupon_code?: string
          coupon_type?: Database["public"]["Enums"]["coupon_type"]
          created_at?: string
          created_by?: string | null
          fixed_amount?: number | null
          flat_amount?: number | null
          id?: number
          is_applicable_to_all_selected_usertype?: boolean | null
          max_total_usage_count?: number | null
          max_usage_per_user_count?: number | null
          min_valid_delivery_fee?: number | null
          percentage?: number | null
          service?: Database["public"]["Enums"]["coupon_service"]
          status?: Database["public"]["Enums"]["coupon_status"] | null
          updated_at?: string | null
          usage_address?: string | null
          usage_latitude?: number | null
          usage_longitude?: number | null
          validity_end_date_time?: string | null
          validity_start_date_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupons_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons_usage_tracker: {
        Row: {
          coupon_code: string | null
          created_at: string
          id: number
          order_id: string | null
          user_id: string | null
        }
        Insert: {
          coupon_code?: string | null
          created_at?: string
          id?: number
          order_id?: string | null
          user_id?: string | null
        }
        Update: {
          coupon_code?: string | null
          created_at?: string
          id?: number
          order_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "coupons_usage_tracker_coupon_code_fkey"
            columns: ["coupon_code"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["coupon_code"]
          },
          {
            foreignKeyName: "coupons_usage_tracker_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "package_orders"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "coupons_usage_tracker_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      deliveries: {
        Row: {
          cancellation_reason: string | null
          created_at: string | null
          customer_id: string | null
          has_multiple_dropff: boolean | null
          id: string
          is_vendor_delivery: boolean | null
          item_category: string | null
          note: string | null
          on_hold_reason: string | null
          order_id: string
          order_on_hold: boolean | null
          progress:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_address: string | null
          receiver_latitude: number | null
          receiver_longitude: number | null
          receiver_name: string | null
          receiver_phone: string | null
          rider_id: string
          rider_name: string | null
          rider_phone: string | null
          sender_address: string | null
          sender_latitude: number | null
          sender_longitude: number | null
          sender_name: string | null
          sender_phone: string | null
          status: Database["public"]["Enums"]["delivery_status"]
          updated_at: string | null
          vendor_id: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          created_at?: string | null
          customer_id?: string | null
          has_multiple_dropff?: boolean | null
          id?: string
          is_vendor_delivery?: boolean | null
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_id: string
          order_on_hold?: boolean | null
          progress?:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_address?: string | null
          receiver_latitude?: number | null
          receiver_longitude?: number | null
          receiver_name?: string | null
          receiver_phone?: string | null
          rider_id: string
          rider_name?: string | null
          rider_phone?: string | null
          sender_address?: string | null
          sender_latitude?: number | null
          sender_longitude?: number | null
          sender_name?: string | null
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["delivery_status"]
          updated_at?: string | null
          vendor_id?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          created_at?: string | null
          customer_id?: string | null
          has_multiple_dropff?: boolean | null
          id?: string
          is_vendor_delivery?: boolean | null
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_id?: string
          order_on_hold?: boolean | null
          progress?:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_address?: string | null
          receiver_latitude?: number | null
          receiver_longitude?: number | null
          receiver_name?: string | null
          receiver_phone?: string | null
          rider_id?: string
          rider_name?: string | null
          rider_phone?: string | null
          sender_address?: string | null
          sender_latitude?: number | null
          sender_longitude?: number | null
          sender_name?: string | null
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["delivery_status"]
          updated_at?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deliveries_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliveries_customer_id_fkey1"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliveries_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "package_orders"
            referencedColumns: ["order_id"]
          },
        ]
      }
      delivery_pricing_rules: {
        Row: {
          base_price: number
          created_at: string
          id: number
          maximum_km: number
          minimum_km: number
          price_per_km: number
          step: number
          tier_number: number
          updated_at: string | null
        }
        Insert: {
          base_price: number
          created_at?: string
          id: number
          maximum_km: number
          minimum_km: number
          price_per_km: number
          step?: number
          tier_number: number
          updated_at?: string | null
        }
        Update: {
          base_price?: number
          created_at?: string
          id?: number
          maximum_km?: number
          minimum_km?: number
          price_per_km?: number
          step?: number
          tier_number?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      discovery_rules: {
        Row: {
          created_at: string
          id: number
          rule: string
          type: Database["public"]["Enums"]["discovery_rules_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: never
          rule: string
          type: Database["public"]["Enums"]["discovery_rules_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: never
          rule?: string
          type?: Database["public"]["Enums"]["discovery_rules_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      discovery_waitlist: {
        Row: {
          created_at: string
          id: string
          type: Database["public"]["Enums"]["discovery_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          type: Database["public"]["Enums"]["discovery_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          type?: Database["public"]["Enums"]["discovery_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "discovery_waitlist_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      fleet_rules: {
        Row: {
          created_at: string
          id: number
          rule: string
          type: Database["public"]["Enums"]["rules_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: never
          rule: string
          type: Database["public"]["Enums"]["rules_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: never
          rule?: string
          type?: Database["public"]["Enums"]["rules_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      floating_package_orders: {
        Row: {
          assigned_rider_id: string | null
          cancellation_reason: string | null
          coupon_code: string | null
          created_at: string | null
          created_by: string | null
          creator: string | null
          delivery_fee: number | null
          delivery_type: string | null
          discount: number | null
          discounted_fee: number | null
          distance: number | null
          dropoff_location: string | null
          has_multiple_dropff: boolean | null
          id: string
          is_vendor_order: boolean | null
          item_category: string | null
          note: string | null
          on_hold_reason: string | null
          order_id: string
          payment_method: string | null
          payment_receipt: string | null
          payment_status: string | null
          paystack_reference_id: string | null
          pickup_location: string | null
          progress:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_latitude: number | null
          receiver_longitude: number | null
          receiver_name: string | null
          receiver_phone: string | null
          scheduled_at: string | null
          sender_latitude: number | null
          sender_longitude: number | null
          sender_name: string | null
          sender_phone: string | null
          status: Database["public"]["Enums"]["package_order_status"] | null
          updated_at: string | null
          user_id: string | null
          vendor_id: string | null
        }
        Insert: {
          assigned_rider_id?: string | null
          cancellation_reason?: string | null
          coupon_code?: string | null
          created_at?: string | null
          created_by?: string | null
          creator?: string | null
          delivery_fee?: number | null
          delivery_type?: string | null
          discount?: number | null
          discounted_fee?: number | null
          distance?: number | null
          dropoff_location?: string | null
          has_multiple_dropff?: boolean | null
          id?: string
          is_vendor_order?: boolean | null
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_id: string
          payment_method?: string | null
          payment_receipt?: string | null
          payment_status?: string | null
          paystack_reference_id?: string | null
          pickup_location?: string | null
          progress?:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_latitude?: number | null
          receiver_longitude?: number | null
          receiver_name?: string | null
          receiver_phone?: string | null
          scheduled_at?: string | null
          sender_latitude?: number | null
          sender_longitude?: number | null
          sender_name?: string | null
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["package_order_status"] | null
          updated_at?: string | null
          user_id?: string | null
          vendor_id?: string | null
        }
        Update: {
          assigned_rider_id?: string | null
          cancellation_reason?: string | null
          coupon_code?: string | null
          created_at?: string | null
          created_by?: string | null
          creator?: string | null
          delivery_fee?: number | null
          delivery_type?: string | null
          discount?: number | null
          discounted_fee?: number | null
          distance?: number | null
          dropoff_location?: string | null
          has_multiple_dropff?: boolean | null
          id?: string
          is_vendor_order?: boolean | null
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_id?: string
          payment_method?: string | null
          payment_receipt?: string | null
          payment_status?: string | null
          paystack_reference_id?: string | null
          pickup_location?: string | null
          progress?:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_latitude?: number | null
          receiver_longitude?: number | null
          receiver_name?: string | null
          receiver_phone?: string | null
          scheduled_at?: string | null
          sender_latitude?: number | null
          sender_longitude?: number | null
          sender_name?: string | null
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["package_order_status"] | null
          updated_at?: string | null
          user_id?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "floating_package_orders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      inventories: {
        Row: {
          created_at: string
          id: string
          image: string
          name: string
          price: number
          quantity: number
          status: Database["public"]["Enums"]["inventory_status"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image?: string
          name: string
          price: number
          quantity: number
          status?: Database["public"]["Enums"]["inventory_status"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string
          name?: string
          price?: number
          quantity?: number
          status?: Database["public"]["Enums"]["inventory_status"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      multiple_dropoffs: {
        Row: {
          address: string
          created_at: string
          delivery_fee: number | null
          id: number
          item_type: string | null
          latitude: number
          longitude: number
          name: string
          order_id: string
          phone: string
          priority_index: number | null
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          delivery_fee?: number | null
          id?: number
          item_type?: string | null
          latitude: number
          longitude: number
          name: string
          order_id: string
          phone: string
          priority_index?: number | null
          user_id: string
        }
        Update: {
          address?: string
          created_at?: string
          delivery_fee?: number | null
          id?: number
          item_type?: string | null
          latitude?: number
          longitude?: number
          name?: string
          order_id?: string
          phone?: string
          priority_index?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "multiple_dropoffs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_subscription: {
        Row: {
          created_at: string
          id: string
          key: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_subscription_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      order_points: {
        Row: {
          created_at: string
          email: string | null
          id: string
          location: string
          metadata: Json | null
          name: string
          order_id: string
          phone: string
          type: Database["public"]["Enums"]["order_point_type"]
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          location: string
          metadata?: Json | null
          name: string
          order_id: string
          phone: string
          type: Database["public"]["Enums"]["order_point_type"]
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          location?: string
          metadata?: Json | null
          name?: string
          order_id?: string
          phone?: string
          type?: Database["public"]["Enums"]["order_point_type"]
        }
        Relationships: [
          {
            foreignKeyName: "order_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_status_timelines: {
        Row: {
          created_at: string
          id: number
          order_id: string
          status: Database["public"]["Enums"]["delivery_status"]
        }
        Insert: {
          created_at?: string
          id?: number
          order_id: string
          status: Database["public"]["Enums"]["delivery_status"]
        }
        Update: {
          created_at?: string
          id?: number
          order_id?: string
          status?: Database["public"]["Enums"]["delivery_status"]
        }
        Relationships: [
          {
            foreignKeyName: "order_status_timelines_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          cancellation_reason: string | null
          coupon_code: string | null
          created_at: string | null
          delivery_fee: number | null
          delivery_type: string | null
          discount: number | null
          discounted_fee: number | null
          distance: number | null
          id: string
          item_category: string | null
          note: string | null
          on_hold_reason: string | null
          order_category: Database["public"]["Enums"]["order_category"]
          order_id: string
          payment_method: string | null
          payment_receipt: string | null
          payment_settled: boolean
          schedule_date: string | null
          status: Database["public"]["Enums"]["package_order_status"] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          coupon_code?: string | null
          created_at?: string | null
          delivery_fee?: number | null
          delivery_type?: string | null
          discount?: number | null
          discounted_fee?: number | null
          distance?: number | null
          id?: string
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_category?: Database["public"]["Enums"]["order_category"]
          order_id: string
          payment_method?: string | null
          payment_receipt?: string | null
          payment_settled?: boolean
          schedule_date?: string | null
          status?: Database["public"]["Enums"]["package_order_status"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          coupon_code?: string | null
          created_at?: string | null
          delivery_fee?: number | null
          delivery_type?: string | null
          discount?: number | null
          discounted_fee?: number | null
          distance?: number | null
          id?: string
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_category?: Database["public"]["Enums"]["order_category"]
          order_id?: string
          payment_method?: string | null
          payment_receipt?: string | null
          payment_settled?: boolean
          schedule_date?: string | null
          status?: Database["public"]["Enums"]["package_order_status"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      package_orders: {
        Row: {
          cancellation_reason: string | null
          coupon_code: string | null
          created_at: string | null
          created_by: string | null
          creator: string | null
          deferred_payment_reason: string | null
          delivery_fee: number | null
          delivery_type: string | null
          discount: number | null
          discounted_fee: number | null
          distance: number | null
          dropoff_location: string | null
          has_multiple_dropff: boolean | null
          id: string
          is_payment_on_aod: boolean | null
          is_payment_on_vendor_debt: boolean | null
          is_vendor_order: boolean | null
          item_category: string | null
          note: string | null
          on_hold_reason: string | null
          order_id: string
          payment_method: string | null
          payment_receipt: string | null
          paystack_reference_id: string | null
          pickup_location: string | null
          progress:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_latitude: number | null
          receiver_longitude: number | null
          receiver_name: string | null
          receiver_phone: string | null
          scheduled_at: string | null
          sender_latitude: number | null
          sender_longitude: number | null
          sender_name: string | null
          sender_phone: string | null
          status: Database["public"]["Enums"]["package_order_status"] | null
          updated_at: string | null
          user_id: string | null
          vendor_id: string | null
        }
        Insert: {
          cancellation_reason?: string | null
          coupon_code?: string | null
          created_at?: string | null
          created_by?: string | null
          creator?: string | null
          deferred_payment_reason?: string | null
          delivery_fee?: number | null
          delivery_type?: string | null
          discount?: number | null
          discounted_fee?: number | null
          distance?: number | null
          dropoff_location?: string | null
          has_multiple_dropff?: boolean | null
          id?: string
          is_payment_on_aod?: boolean | null
          is_payment_on_vendor_debt?: boolean | null
          is_vendor_order?: boolean | null
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_id: string
          payment_method?: string | null
          payment_receipt?: string | null
          paystack_reference_id?: string | null
          pickup_location?: string | null
          progress?:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_latitude?: number | null
          receiver_longitude?: number | null
          receiver_name?: string | null
          receiver_phone?: string | null
          scheduled_at?: string | null
          sender_latitude?: number | null
          sender_longitude?: number | null
          sender_name?: string | null
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["package_order_status"] | null
          updated_at?: string | null
          user_id?: string | null
          vendor_id?: string | null
        }
        Update: {
          cancellation_reason?: string | null
          coupon_code?: string | null
          created_at?: string | null
          created_by?: string | null
          creator?: string | null
          deferred_payment_reason?: string | null
          delivery_fee?: number | null
          delivery_type?: string | null
          discount?: number | null
          discounted_fee?: number | null
          distance?: number | null
          dropoff_location?: string | null
          has_multiple_dropff?: boolean | null
          id?: string
          is_payment_on_aod?: boolean | null
          is_payment_on_vendor_debt?: boolean | null
          is_vendor_order?: boolean | null
          item_category?: string | null
          note?: string | null
          on_hold_reason?: string | null
          order_id?: string
          payment_method?: string | null
          payment_receipt?: string | null
          paystack_reference_id?: string | null
          pickup_location?: string | null
          progress?:
            | Database["public"]["Enums"]["order_delivery_status_type"]
            | null
          receiver_latitude?: number | null
          receiver_longitude?: number | null
          receiver_name?: string | null
          receiver_phone?: string | null
          scheduled_at?: string | null
          sender_latitude?: number | null
          sender_longitude?: number | null
          sender_name?: string | null
          sender_phone?: string | null
          status?: Database["public"]["Enums"]["package_order_status"] | null
          updated_at?: string | null
          user_id?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "package_orders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          fcm_token: string | null
          id: string
        }
        Insert: {
          fcm_token?: string | null
          id: string
        }
        Update: {
          fcm_token?: string | null
          id?: string
        }
        Relationships: []
      }
      recurring_orders: {
        Row: {
          created_at: string
          end_date: string | null
          frequency: Database["public"]["Enums"]["recurring_frequency"]
          id: string
          order_id: string
          schedule: string
          start_date: string | null
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          frequency: Database["public"]["Enums"]["recurring_frequency"]
          id?: string
          order_id: string
          schedule: string
          start_date?: string | null
        }
        Update: {
          created_at?: string
          end_date?: string | null
          frequency?: Database["public"]["Enums"]["recurring_frequency"]
          id?: string
          order_id?: string
          schedule?: string
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recurring_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: true
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      rider_location_histories: {
        Row: {
          created_at: string
          id: number
          lattitude: number
          longitude: number
          rider_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          lattitude: number
          longitude: number
          rider_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          lattitude?: number
          longitude?: number
          rider_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rider_location_histories_rider_id_fkey"
            columns: ["rider_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      rider_locations: {
        Row: {
          id: string
          latitude: number
          longitude: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          id?: string
          latitude: number
          longitude: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          id?: string
          latitude?: number
          longitude?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rider_locations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      riders: {
        Row: {
          address: string | null
          availability_status:
            | Database["public"]["Enums"]["availability_status"]
            | null
          created_at: string
          first_name: string
          id: number
          last_name: string
          last_seen: string | null
          latitude: number | null
          longitude: number | null
          rider_id: string
          user: string | null
        }
        Insert: {
          address?: string | null
          availability_status?:
            | Database["public"]["Enums"]["availability_status"]
            | null
          created_at?: string
          first_name?: string
          id?: number
          last_name?: string
          last_seen?: string | null
          latitude?: number | null
          longitude?: number | null
          rider_id: string
          user?: string | null
        }
        Update: {
          address?: string | null
          availability_status?:
            | Database["public"]["Enums"]["availability_status"]
            | null
          created_at?: string
          first_name?: string
          id?: number
          last_name?: string
          last_seen?: string | null
          latitude?: number | null
          longitude?: number | null
          rider_id?: string
          user?: string | null
        }
        Relationships: []
      }
      riders_notifications: {
        Row: {
          body: string | null
          created_at: string
          id: number
          is_read: boolean | null
          order_id: string | null
          original_created_at: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: number
          is_read?: boolean | null
          order_id?: string | null
          original_created_at?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: number
          is_read?: boolean | null
          order_id?: string | null
          original_created_at?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: number
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      roles: {
        Row: {
          id: number
          role_name: Database["public"]["Enums"]["app_role"] | null
        }
        Insert: {
          id?: number
          role_name?: Database["public"]["Enums"]["app_role"] | null
        }
        Update: {
          id?: number
          role_name?: Database["public"]["Enums"]["app_role"] | null
        }
        Relationships: []
      }
      system_configuration: {
        Row: {
          created_at: string
          id: string
          name: string
          property: Database["public"]["Enums"]["system_configuration_parameter"]
          updated_at: string
          value: Json
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          property: Database["public"]["Enums"]["system_configuration_parameter"]
          updated_at?: string
          value: Json
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          property?: Database["public"]["Enums"]["system_configuration_parameter"]
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string
          id: string
          paystack_reference_id: string | null
          status: string
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
          wallet_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          paystack_reference_id?: string | null
          status: string
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id: string
          wallet_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          paystack_reference_id?: string | null
          status?: string
          type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id?: string
          wallet_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      user_push_tokens: {
        Row: {
          created_at: string | null
          id: number
          push_token: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          push_token: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          push_token?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: number
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: number
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          address: string | null
          address_latitude: number | null
          address_longitude: number | null
          business_name: string | null
          cac_certificate_url: string | null
          created_at: string | null
          email: string | null
          enabled: boolean
          first_name: string | null
          id: string
          id_document_url: string | null
          id_type: string | null
          last_name: string | null
          license_plate_number: string | null
          phone: string | null
          profile_img_url: string | null
          role: Database["public"]["Enums"]["app_role"] | null
          updated_at: string | null
          vehicle_make: string | null
        }
        Insert: {
          address?: string | null
          address_latitude?: number | null
          address_longitude?: number | null
          business_name?: string | null
          cac_certificate_url?: string | null
          created_at?: string | null
          email?: string | null
          enabled?: boolean
          first_name?: string | null
          id: string
          id_document_url?: string | null
          id_type?: string | null
          last_name?: string | null
          license_plate_number?: string | null
          phone?: string | null
          profile_img_url?: string | null
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
          vehicle_make?: string | null
        }
        Update: {
          address?: string | null
          address_latitude?: number | null
          address_longitude?: number | null
          business_name?: string | null
          cac_certificate_url?: string | null
          created_at?: string | null
          email?: string | null
          enabled?: boolean
          first_name?: string | null
          id?: string
          id_document_url?: string | null
          id_type?: string | null
          last_name?: string | null
          license_plate_number?: string | null
          phone?: string | null
          profile_img_url?: string | null
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
          vehicle_make?: string | null
        }
        Relationships: []
      }
      vehicle_assignments: {
        Row: {
          created_at: string
          id: string
          rider_id: string
          status: Database["public"]["Enums"]["vehicle_assignment_status"]
          updated_at: string | null
          vehicle_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          rider_id: string
          status?: Database["public"]["Enums"]["vehicle_assignment_status"]
          updated_at?: string | null
          vehicle_id: string
        }
        Update: {
          created_at?: string
          id?: string
          rider_id?: string
          status?: Database["public"]["Enums"]["vehicle_assignment_status"]
          updated_at?: string | null
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_assignments_rider_id_fkey"
            columns: ["rider_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_assignments_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_documents: {
        Row: {
          created_at: string
          document_id: string
          expiry_date: string
          id: string
          issue_date: string
          issuer: string
          type: Database["public"]["Enums"]["vehicle_document_type"]
          updated_at: string | null
          vehicle_id: string
        }
        Insert: {
          created_at?: string
          document_id: string
          expiry_date: string
          id?: string
          issue_date: string
          issuer: string
          type: Database["public"]["Enums"]["vehicle_document_type"]
          updated_at?: string | null
          vehicle_id: string
        }
        Update: {
          created_at?: string
          document_id?: string
          expiry_date?: string
          id?: string
          issue_date?: string
          issuer?: string
          type?: Database["public"]["Enums"]["vehicle_document_type"]
          updated_at?: string | null
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_documents_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_fuels: {
        Row: {
          amount: string
          created_at: string
          id: string
          override_reason: string | null
          payment_method: Database["public"]["Enums"]["vehicle_fuel_payment_method"]
          rider_id: string
          updated_at: string | null
        }
        Insert: {
          amount: string
          created_at?: string
          id?: string
          override_reason?: string | null
          payment_method: Database["public"]["Enums"]["vehicle_fuel_payment_method"]
          rider_id: string
          updated_at?: string | null
        }
        Update: {
          amount?: string
          created_at?: string
          id?: string
          override_reason?: string | null
          payment_method?: Database["public"]["Enums"]["vehicle_fuel_payment_method"]
          rider_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_fuels_rider_id_fkey"
            columns: ["rider_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_inventories: {
        Row: {
          created_at: string
          id: string
          name: string
          price: number
          quantity: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          price: number
          quantity: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          price?: number
          quantity?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      vehicle_inventory_usages: {
        Row: {
          created_at: string
          id: string
          inventory_id: string
          quantity: number
          updated_at: string | null
          user_id: string | null
          vehicle_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          inventory_id: string
          quantity: number
          updated_at?: string | null
          user_id?: string | null
          vehicle_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          inventory_id?: string
          quantity?: number
          updated_at?: string | null
          user_id?: string | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_inventory_usages_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "vehicle_inventories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_inventory_usages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_inventory_usages_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_services: {
        Row: {
          cost: string | null
          created_at: string
          id: string
          note: string | null
          type: Database["public"]["Enums"]["vehicle_service_type"]
          updated_at: string | null
          vehicle_id: string
          vendor: string | null
        }
        Insert: {
          cost?: string | null
          created_at?: string
          id?: string
          note?: string | null
          type: Database["public"]["Enums"]["vehicle_service_type"]
          updated_at?: string | null
          vehicle_id: string
          vendor?: string | null
        }
        Update: {
          cost?: string | null
          created_at?: string
          id?: string
          note?: string | null
          type?: Database["public"]["Enums"]["vehicle_service_type"]
          updated_at?: string | null
          vehicle_id?: string
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_services_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicles: {
        Row: {
          created_at: string
          id: string
          model: string
          plate_number: string
          status: Database["public"]["Enums"]["vehicle_status"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          model: string
          plate_number: string
          status?: Database["public"]["Enums"]["vehicle_status"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          model?: string
          plate_number?: string
          status?: Database["public"]["Enums"]["vehicle_status"]
          updated_at?: string | null
        }
        Relationships: []
      }
      vendor_assigned_riders: {
        Row: {
          created_at: string
          id: number
          rider_user_id: string
          vendor_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          rider_user_id: string
          vendor_id: string
        }
        Update: {
          created_at?: string
          id?: number
          rider_user_id?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_assigned_riders_rider_user_id_fkey"
            columns: ["rider_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_assigned_riders_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["vendor_id"]
          },
        ]
      }
      vendor_debt_financing_payments: {
        Row: {
          amount: number
          created_at: string
          id: number
          payment_id: string
          paystack_reference_id: string | null
          status: Database["public"]["Enums"]["vendor_payment_status"] | null
          user_id: string
          vendor_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: number
          payment_id: string
          paystack_reference_id?: string | null
          status?: Database["public"]["Enums"]["vendor_payment_status"] | null
          user_id: string
          vendor_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: number
          payment_id?: string
          paystack_reference_id?: string | null
          status?: Database["public"]["Enums"]["vendor_payment_status"] | null
          user_id?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_debt_financing_payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_debt_financing_payments_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["vendor_id"]
          },
        ]
      }
      vendor_outlets: {
        Row: {
          active: boolean
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          id: string
          is_primary: boolean
          location: string | null
          name: string
          vendor_id: string
        }
        Insert: {
          active?: boolean
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          is_primary?: boolean
          location?: string | null
          name: string
          vendor_id: string
        }
        Update: {
          active?: boolean
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          id?: string
          is_primary?: boolean
          location?: string | null
          name?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_outlets_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_payments: {
        Row: {
          amount_paid_claim: number
          amount_received: number | null
          conversations: string | null
          created_at: string
          id: number
          payment_id: string
          receipt_url: string
          status: Database["public"]["Enums"]["vendor_payment_status"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount_paid_claim: number
          amount_received?: number | null
          conversations?: string | null
          created_at?: string
          id?: number
          payment_id: string
          receipt_url: string
          status?: Database["public"]["Enums"]["vendor_payment_status"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount_paid_claim?: number
          amount_received?: number | null
          conversations?: string | null
          created_at?: string
          id?: number
          payment_id?: string
          receipt_url?: string
          status?: Database["public"]["Enums"]["vendor_payment_status"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_payments_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["user_id"]
          },
        ]
      }
      vendor_pending_applications: {
        Row: {
          business_address: string
          business_latitude: number
          business_longitude: number
          business_name: string
          created_at: string
          id: number
          pending_reason: string | null
          reason_for_rejection: string | null
          status: Database["public"]["Enums"]["pending_vendor_status"] | null
          user_id: string
        }
        Insert: {
          business_address: string
          business_latitude: number
          business_longitude: number
          business_name: string
          created_at?: string
          id?: number
          pending_reason?: string | null
          reason_for_rejection?: string | null
          status?: Database["public"]["Enums"]["pending_vendor_status"] | null
          user_id: string
        }
        Update: {
          business_address?: string
          business_latitude?: number
          business_longitude?: number
          business_name?: string
          created_at?: string
          id?: number
          pending_reason?: string | null
          reason_for_rejection?: string | null
          status?: Database["public"]["Enums"]["pending_vendor_status"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_pending_applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vendors: {
        Row: {
          active: boolean | null
          alias: string | null
          allow_debt_financing: boolean | null
          allow_zone_pricing: boolean | null
          assign_all_riders: boolean | null
          assigned_riders: string | null
          business_latitude: string | null
          business_longitude: string | null
          cac_certificate_url: string | null
          created_at: string
          customer_dva_code: string | null
          debt_threshold: number | null
          dva_account_number: string | null
          id: string
          location: string | null
          logo: string | null
          name: string | null
          official_business_name: string | null
          status: Database["public"]["Enums"]["vendor_status"] | null
          user_id: string
          vendor_id: string | null
          zones_and_prices: string | null
        }
        Insert: {
          active?: boolean | null
          alias?: string | null
          allow_debt_financing?: boolean | null
          allow_zone_pricing?: boolean | null
          assign_all_riders?: boolean | null
          assigned_riders?: string | null
          business_latitude?: string | null
          business_longitude?: string | null
          cac_certificate_url?: string | null
          created_at?: string
          customer_dva_code?: string | null
          debt_threshold?: number | null
          dva_account_number?: string | null
          id?: string
          location?: string | null
          logo?: string | null
          name?: string | null
          official_business_name?: string | null
          status?: Database["public"]["Enums"]["vendor_status"] | null
          user_id: string
          vendor_id?: string | null
          zones_and_prices?: string | null
        }
        Update: {
          active?: boolean | null
          alias?: string | null
          allow_debt_financing?: boolean | null
          allow_zone_pricing?: boolean | null
          assign_all_riders?: boolean | null
          assigned_riders?: string | null
          business_latitude?: string | null
          business_longitude?: string | null
          cac_certificate_url?: string | null
          created_at?: string
          customer_dva_code?: string | null
          debt_threshold?: number | null
          dva_account_number?: string | null
          id?: string
          location?: string | null
          logo?: string | null
          name?: string | null
          official_business_name?: string | null
          status?: Database["public"]["Enums"]["vendor_status"] | null
          user_id?: string
          vendor_id?: string | null
          zones_and_prices?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      visitors_ip_tracking: {
        Row: {
          created_at: string
          host: string | null
          id: number
          ip: string | null
        }
        Insert: {
          created_at?: string
          host?: string | null
          id?: number
          ip?: string | null
        }
        Update: {
          created_at?: string
          host?: string | null
          id?: number
          ip?: string | null
        }
        Relationships: []
      }
      wallets: {
        Row: {
          account_name: string
          account_number: string
          balance: number
          bank: string
          created_at: string
          customer_code: string
          id: string
          ref: string
          uncleared_balance: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          account_name: string
          account_number: string
          balance?: number
          bank: string
          created_at?: string
          customer_code: string
          id?: string
          ref: string
          uncleared_balance?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          account_name?: string
          account_number?: string
          balance?: number
          bank?: string
          created_at?: string
          customer_code?: string
          id?: string
          ref?: string
          uncleared_balance?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      zone_pricing: {
        Row: {
          created_at: string
          id: number
          price: number
          vendor_id: string
          zone: string
        }
        Insert: {
          created_at?: string
          id?: number
          price: number
          vendor_id: string
          zone: string
        }
        Update: {
          created_at?: string
          id?: number
          price?: number
          vendor_id?: string
          zone?: string
        }
        Relationships: [
          {
            foreignKeyName: "zone_pricing_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["vendor_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
        }
        Returns: boolean
      }
      bytea_to_text: { Args: { data: string }; Returns: string }
      custom_access_token_hook: { Args: { event: Json }; Returns: Json }
      get_dashboard_stats: {
        Args: { end_date: string; start_date: string }
        Returns: {
          avg_delivery_time: number
          success_rate: number
          total_deliveries: number
          total_revenue: number
        }[]
      }
      get_delivery_trends: {
        Args: never
        Returns: {
          completed: number
          day_name: string
          failed: number
          pending: number
        }[]
      }
      get_user_role: { Args: never; Returns: string }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "http_request"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_delete:
        | {
            Args: { uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { content: string; content_type: string; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_get:
        | {
            Args: { uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { data: Json; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
        SetofOptions: {
          from: "*"
          to: "http_header"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_list_curlopt: {
        Args: never
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_post:
        | {
            Args: { content: string; content_type: string; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { data: Json; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_put: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_reset_curlopt: { Args: never; Returns: boolean }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      text_to_bytea: { Args: { data: string }; Returns: string }
      urlencode:
        | { Args: { data: Json }; Returns: string }
        | {
            Args: { string: string }
            Returns: {
              error: true
            } & "Could not choose the best candidate function between: public.urlencode(string => bytea), public.urlencode(string => varchar). Try renaming the parameters or the function itself in the database so function overloading can be resolved"
          }
        | {
            Args: { string: string }
            Returns: {
              error: true
            } & "Could not choose the best candidate function between: public.urlencode(string => bytea), public.urlencode(string => varchar). Try renaming the parameters or the function itself in the database so function overloading can be resolved"
          }
    }
    Enums: {
      app_permission:
        | "package_orders.create"
        | "orders.update"
        | "user_roles.read"
        | "user_roles.update"
        | "package_orders.update"
        | "package_orders.read"
        | "documents.read"
        | "deliveries.create"
        | "deliveries.read"
        | "deliveries.update"
        | "users.read"
        | "users.read.admin"
        | "users.read.superadmin"
        | "users.update.admin"
        | "users.update.superadmin"
        | "vendors.manage"
        | "vendors.read"
        | "orders.manage"
        | "orders.read"
        | "vendor_outlets.manage"
        | "vendor_outlets.read"
        | "order_points.read"
        | "order_points.manage"
        | "recurring_orders.manage"
        | "system_configuration.read"
        | "system_configuration.manage"
        | "my_user.update"
      app_role: "superadmin" | "admin" | "vendor" | "rider" | "customer"
      availability_status: "online" | "offline"
      business_identification_type:
        | "CAC"
        | "utility"
        | "NIN"
        | "drivers_licence"
        | "international_passport"
        | "voters_card"
      business_status: "pending" | "verified" | "suspended"
      business_subscriptions_status: "pending" | "success" | "failed"
      business_verification_status: "pending" | "verified" | "rejected"
      coupon_applicable_users: "customer" | "vendor" | "rider" | "admin"
      coupon_service: "discovery" | "dispatch"
      coupon_status: "active" | "expired" | "disabled"
      coupon_type: "fixed" | "percentage" | "flat"
      delivery_status:
        | "assigned"
        | "accepted"
        | "picked_up"
        | "completed"
        | "cancelled"
        | "on_pick_up_route"
        | "at_pick_up"
        | "delivering"
        | "delivered"
        | "on_hold"
        | "confirmed"
      discovery_rules_type: "pricing"
      discovery_type: "customer" | "business"
      inventory_status: "pending" | "verified"
      order_category: "on_demand" | "scheduled" | "recurring"
      order_delivery_status_type:
        | "pending"
        | "accepted"
        | "assigned"
        | "delivering"
        | "on_hold"
        | "completed"
        | "cancelled"
        | "at_pick_up"
        | "picked_up"
        | "on_pick_up_route"
        | "delivered"
        | "confirmed"
        | "cancel-request"
      order_point_type: "pickup" | "dropoff" | "mapped"
      order_status:
        | "pending"
        | "accepted"
        | "preparing"
        | "ready_for_pickup"
        | "delivering"
        | "completed"
        | "cancelled"
      package_order_status:
        | "pending"
        | "accepted"
        | "assigned"
        | "delivering"
        | "on_hold"
        | "completed"
        | "cancelled"
        | "at_pick_up"
        | "picked_up"
        | "on_pick_up_route"
        | "delivered"
        | "cancel-request"
      pending_vendor_status: "pending" | "rejected" | "approved"
      recurring_frequency:
        | "daily"
        | "weekly"
        | "bi-weekly"
        | "monthly"
        | "quarterly"
      role_type: "admin" | "customer" | "vendor"
      rules_type: "fuel" | "service" | "document"
      system_configuration_parameter: "pricing" | "email" | "notifications"
      transaction_type:
        | "fund"
        | "withdraw"
        | "debt"
        | "dispatch"
        | "dispatch-refund"
      vehicle_assignment_status: "assigned" | "unassigned" | "suspended"
      vehicle_document_type: "insurance" | "roadworthiness" | "licence"
      vehicle_fuel_payment_method: "cash" | "card" | "transfer"
      vehicle_service_type:
        | "oil"
        | "tyre"
        | "brake"
        | "inspection"
        | "general"
        | "tubes"
        | "chain_socket"
      vehicle_status: "active" | "repair" | "inactive"
      vendor_payment_status: "pending" | "approved" | "declined"
      vendor_status:
        | "verified"
        | "unverified"
        | "requested_verification"
        | "pending_verification"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_permission: [
        "package_orders.create",
        "orders.update",
        "user_roles.read",
        "user_roles.update",
        "package_orders.update",
        "package_orders.read",
        "documents.read",
        "deliveries.create",
        "deliveries.read",
        "deliveries.update",
        "users.read",
        "users.read.admin",
        "users.read.superadmin",
        "users.update.admin",
        "users.update.superadmin",
        "vendors.manage",
        "vendors.read",
        "orders.manage",
        "orders.read",
        "vendor_outlets.manage",
        "vendor_outlets.read",
        "order_points.read",
        "order_points.manage",
        "recurring_orders.manage",
        "system_configuration.read",
        "system_configuration.manage",
        "my_user.update",
      ],
      app_role: ["superadmin", "admin", "vendor", "rider", "customer"],
      availability_status: ["online", "offline"],
      business_identification_type: [
        "CAC",
        "utility",
        "NIN",
        "drivers_licence",
        "international_passport",
        "voters_card",
      ],
      business_status: ["pending", "verified", "suspended"],
      business_subscriptions_status: ["pending", "success", "failed"],
      business_verification_status: ["pending", "verified", "rejected"],
      coupon_applicable_users: ["customer", "vendor", "rider", "admin"],
      coupon_service: ["discovery", "dispatch"],
      coupon_status: ["active", "expired", "disabled"],
      coupon_type: ["fixed", "percentage", "flat"],
      delivery_status: [
        "assigned",
        "accepted",
        "picked_up",
        "completed",
        "cancelled",
        "on_pick_up_route",
        "at_pick_up",
        "delivering",
        "delivered",
        "on_hold",
        "confirmed",
      ],
      discovery_rules_type: ["pricing"],
      discovery_type: ["customer", "business"],
      inventory_status: ["pending", "verified"],
      order_category: ["on_demand", "scheduled", "recurring"],
      order_delivery_status_type: [
        "pending",
        "accepted",
        "assigned",
        "delivering",
        "on_hold",
        "completed",
        "cancelled",
        "at_pick_up",
        "picked_up",
        "on_pick_up_route",
        "delivered",
        "confirmed",
        "cancel-request",
      ],
      order_point_type: ["pickup", "dropoff", "mapped"],
      order_status: [
        "pending",
        "accepted",
        "preparing",
        "ready_for_pickup",
        "delivering",
        "completed",
        "cancelled",
      ],
      package_order_status: [
        "pending",
        "accepted",
        "assigned",
        "delivering",
        "on_hold",
        "completed",
        "cancelled",
        "at_pick_up",
        "picked_up",
        "on_pick_up_route",
        "delivered",
        "cancel-request",
      ],
      pending_vendor_status: ["pending", "rejected", "approved"],
      recurring_frequency: [
        "daily",
        "weekly",
        "bi-weekly",
        "monthly",
        "quarterly",
      ],
      role_type: ["admin", "customer", "vendor"],
      rules_type: ["fuel", "service", "document"],
      system_configuration_parameter: ["pricing", "email", "notifications"],
      transaction_type: [
        "fund",
        "withdraw",
        "debt",
        "dispatch",
        "dispatch-refund",
      ],
      vehicle_assignment_status: ["assigned", "unassigned", "suspended"],
      vehicle_document_type: ["insurance", "roadworthiness", "licence"],
      vehicle_fuel_payment_method: ["cash", "card", "transfer"],
      vehicle_service_type: [
        "oil",
        "tyre",
        "brake",
        "inspection",
        "general",
        "tubes",
        "chain_socket",
      ],
      vehicle_status: ["active", "repair", "inactive"],
      vendor_payment_status: ["pending", "approved", "declined"],
      vendor_status: [
        "verified",
        "unverified",
        "requested_verification",
        "pending_verification",
      ],
    },
  },
} as const
