'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
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
