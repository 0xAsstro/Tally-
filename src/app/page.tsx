'use client'
import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../lib/supabaseClient.js'
import { useRouter } from 'next/navigation'
// --- FIX 1: We need to import the 'Session' type ---
import type { Session } from '@supabase/auth-helpers-nextjs'

export default function Home() {
  // --- FIX 2: We tell useState it can hold a Session OR null ---
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()

  useEffect(() => {
    // This function checks for a user session when the page loads
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    }
    getSession();

    // This listens for changes in the user's login state (e.g., SIGN_IN, SIGN_OUT)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  // If we have a user session, it means the user is logged in.
  // We then redirect them to the dashboard page.
  if (session) {
    router.push('/dashboard')
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  // If there is no session, we show the login form.
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign in to Tally
          </h2>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'github']}
          theme="light"
        />
      </div>
    </div>
  )
}