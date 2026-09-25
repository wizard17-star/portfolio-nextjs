'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { site } from '@/lib/site'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) => !href.startsWith('/#') && pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/80">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Serhat<span className="text-blue-600 dark:text-blue-400">.</span>Aslan
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive(href) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.resume} target="_blank" rel="noopener" className="btn-primary hidden !px-4 !py-2 sm:inline-flex">
            <Download size={16} aria-hidden />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-gray-200 dark:border-gray-800 md:hidden">
          <ul className="container-page flex flex-col py-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400"
              >
                <Download size={16} aria-hidden /> Download resume (PDF)
              </a>
            </li>
          </ul>
        </nav>
      )}
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
      className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {/* Fixed-size placeholder until mounted avoids hydration mismatch and layout shift */}
      {mounted ? isDark ? <Sun size={20} /> : <Moon size={20} /> : <span className="block h-5 w-5" />}
    </button>
  )
}
