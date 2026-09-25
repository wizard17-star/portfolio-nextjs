'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="wrap flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Serhat Aslan
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={active ? 'font-medium text-black' : 'text-muted transition-colors hover:text-black'}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
