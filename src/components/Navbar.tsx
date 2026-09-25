'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { CommandTrigger } from './CommandMenu'

const links = [
  { href: '/#work', label: 'work' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'writing' },
  { href: '/contact', label: 'contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (href: string) => !href.startsWith('/#') && pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium" aria-label="Serhat Aslan — home">
          serhat<span className="text-accent">.</span>aslan
        </Link>

        <nav aria-label="Main" className="flex items-center gap-4 sm:gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={`font-mono text-xs transition-colors hover:text-fg sm:text-sm ${
                isActive(href) ? 'text-fg' : 'text-muted'
              } ${href === '/#work' ? 'hidden sm:inline' : ''}`}
            >
              {label}
            </Link>
          ))}
          <span className="hidden sm:inline">
            <CommandTrigger />
          </span>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="text-muted transition-colors hover:text-fg"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {/* Fixed-size placeholder until mounted avoids hydration mismatch and layout shift */}
      {mounted ? isDark ? <Sun size={16} /> : <Moon size={16} /> : <span className="block h-4 w-4" />}
    </button>
  )
}
