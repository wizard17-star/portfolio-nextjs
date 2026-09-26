'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

/** Light/dark switch. The initial theme is applied by an inline script in the layout. */
export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null)

  useEffect(() => setDark(document.documentElement.classList.contains('dark')), [])

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative flex h-9 w-16 items-center rounded-full border border-line bg-card px-1"
    >
      <span
        className={`absolute top-1 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 ease-out ${
          dark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {dark === null ? null : dark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  )
}
