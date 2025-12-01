import { JwtPayload } from 'jwt-decode';

export type UserRole = 'customer' | 'admin' | 'rider' | 'vendor' | 'superadmin';

export interface SupabaseJWTPayload extends JwtPayload {
  email: string;
  is_anonymous: boolean;
  phone: string;
  role: string;
  session_id: string;
  user_metadata: {
    email: string;
    email_verified: boolean;
    first_name: string;
    last_name: string;
    phone: string;
    phone_verified: boolean;
    sub: string;
  };
  user_role: UserRole;
}

export interface SignupPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;

  id_type?: string;
  id_document?: File;
  vehicle_make?: string;
  license_plate_number?: string;

  business_name?: string;
  cac_certificate?: File;
}
