import Link from 'next/link'

export default async function DiscordButton() {
  return <Link
    href="https://discord.gg/kjfaPkWSUE"
    className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
  >
    AoR Discord
  </Link>
}
