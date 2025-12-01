import { createBrowserClient } from '@supabase/ssr';
// import { useMemo } from 'react';

import { Database } from './supabase';
import { TypedSupabaseClient } from './types';

let client: TypedSupabaseClient | undefined;

export const createClient = () => {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return client;
};

// export const useSupabaseBrowser = () => {
//   return useMemo(createClient, []);
// };
