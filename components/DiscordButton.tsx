import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DiscordButton() {
  return <Link
    href="https://aordiscord.rxserver.net/"
    className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
  >
    AoR Discord
  </Link>
}
