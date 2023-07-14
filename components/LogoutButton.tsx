'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/");
    router.refresh()
  }

  return (
    <button
      className="py-2 px-4 rounded-md no-underline text-white bg-red-700 hover:bg-btn-background-hover"
      onClick={signOut}
    >
      Logout
    </button>
  )
}
