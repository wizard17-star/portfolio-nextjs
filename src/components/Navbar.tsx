'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
            <span className="text-xl">↩</span>
            <span className="hidden sm:inline">Home</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <NavLink href="/projects" label="Projects" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/contact" label="Contact" />
          </nav>
          <div className="text-xl">loading...</div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Home Return Button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm"
          aria-label="Go back home"
          title="Back to Home"
        >
          <span className="text-xl">↩</span>
          <span className="hidden sm:inline">Home</span>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/blog" label="Blog" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl text-gray-500 dark:text-gray-300 hover:scale-110 transition"
          aria-label="Toggle Theme"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </Link>
  )
}
