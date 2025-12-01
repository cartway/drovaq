import { SupabaseClient } from '@supabase/supabase-js';

import { Database } from './supabase';

export type TypedSupabaseClient = SupabaseClient<Database>;

export type Pageable = {
  page: number;
  size: number;
};

export interface FileExtension extends File {
  preview?: string;
}
