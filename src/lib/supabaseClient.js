import { createBrowserClient } from '@supabase/ssr'

// This creates a Supabase client that works in the browser
// using the new SSR method.
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)