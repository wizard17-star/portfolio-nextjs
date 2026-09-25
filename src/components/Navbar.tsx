'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-canvas/80 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-bold tracking-tight">
          <span className="hidden sm:inline">Serhat Aslan</span>
          <span className="sm:hidden">SA</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-4 text-sm sm:gap-8 sm:text-[15px]">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded after:bg-blue-600 after:transition-transform after:duration-300 ${
                  active
                    ? 'font-medium text-slate-900 after:scale-x-100'
                    : 'text-slate-600 after:scale-x-0 hover:text-slate-900 hover:after:scale-x-100'
                }`}
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
