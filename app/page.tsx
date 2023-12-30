
import AuthButton from '../components/DiscordButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import DiscordButton from '../components/DiscordButton'

export default async function Index() {
  const cookieStore = cookies()

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DiscordButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <p>test</p>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          We are the Ancients of Resonite
        </p>
      </footer>
    </div>
  )
}
