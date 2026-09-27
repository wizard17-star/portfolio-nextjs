'use client'

import { useEffect, useState } from 'react'

const items = [
  { id: 'now', label: 'Role' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Skills' },
  { id: 'credentials', label: 'Education' },
  { id: 'writing', label: 'Writing' },
]

/**
 * Sticky mini menu that slides in once the intro is scrolled past. Highlights the
 * section in view and shows a reading-progress line along its bottom edge.
 */
export default function SectionNav() {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[]

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      setShow(window.scrollY > 520)

      // Active = last section whose top has passed the upper third of the viewport
      const line = window.innerHeight * 0.35
      let current: string | null = null
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s.id
      if (max > 0 && window.scrollY >= max - 2) current = sections[sections.length - 1]?.id ?? current
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      {/* Reading progress, always visible at the very top */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]" aria-hidden>
        <div
          className="h-full origin-left bg-gradient-to-r from-accent/70 to-accent"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <nav
        aria-label="Sections"
        className={`fixed inset-x-0 top-[3px] z-40 flex justify-center px-3 transition duration-300 ease-out ${
          show ? 'translate-y-2 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        <ul className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-card/85 p-1 shadow-lg backdrop-blur [scrollbar-width:none]">
          {items.map((item) => {
            const on = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  tabIndex={show ? 0 : -1}
                  aria-current={on ? 'true' : undefined}
                  className={`block whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                    on ? 'bg-accent text-card' : 'text-mute hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
