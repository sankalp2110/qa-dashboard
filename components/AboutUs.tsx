'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function AboutUsButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const aboutUs = async () => {
    router.push("/aboutus")
    router.refresh()
  }

  return (
    <button
      className="py-2 px-4 rounded-md no-underline bg-red-700 text-white hover:bg-btn-background-hover"
      onClick={aboutUs}
    >
      About Us
    </button>
  )
}