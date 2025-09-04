'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// Create a Supabase client for the browser
const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        // If user is logged in, redirect to the dashboard
        router.push('/dashboard')
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  // If user is not logged in, show the login form
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