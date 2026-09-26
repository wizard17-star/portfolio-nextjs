'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '@/lib/site'

/**
 * Latest projects as quiet rows. On pointer devices a small card follows the cursor
 * and shows the project's data flow; clicking a row expands its details in place.
 */
export default function ProjectRows({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const [peek, setPeek] = useState<number | null>(null)
  const card = useRef<HTMLDivElement>(null)
  // The preview is portalled to <body> so section animations can't trap it below later content
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const move = (e: React.MouseEvent) => {
    if (card.current) card.current.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 14}px)`
  }

  return (
    <>
      <ul className="focus-list border-t border-line" onMouseMove={move}>
        {projects.map((p, i) => {
          const isOpen = open === i
          return (
            <li key={p.title} className={`border-b border-line ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                onMouseEnter={() => setPeek(isOpen ? null : i)}
                onMouseLeave={() => setPeek(null)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[1fr_auto] items-baseline gap-4 py-3 text-left text-[16px]"
              >
                <span>
                  <span className="font-semibold">{p.title}</span> <span className="text-mute">{p.tag}</span>
                </span>
                <span className="flex items-baseline gap-3 whitespace-nowrap font-mono text-xs text-mute">
                  {p.date}
                  <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden>
                    +
                  </span>
                </span>
              </button>

              <div className="expand">
                <div>
                  <div className="space-y-3 pb-4 pt-1">
                    <ol className="flex flex-wrap items-center gap-y-1.5 font-mono text-[11.5px]" aria-label="Data flow">
                      {p.flow.map((step, j) => (
                        <li key={step} className="flex items-center">
                          {j > 0 && (
                            <span className="mx-1.5 text-accent" aria-hidden>
                              →
                            </span>
                          )}
                          <span className="rounded-md border border-line bg-card px-2 py-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="text-[15px] leading-relaxed text-mute">{p.description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[13px]">
                      <span className="text-mute">{p.tech.join(' · ')}</span>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline-grow font-medium">
                          View code ↗︎
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Cursor-following preview (pointer devices only) */}
      {mounted &&
        createPortal(
          <div
            ref={card}
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-50 hidden w-72 [@media(hover:hover)]:block"
          >
            <div
              className={`rounded-xl bg-[#2b2d31] px-4 py-3 ring-1 ring-white/10 font-mono text-[11.5px] leading-6 text-[#dcdcd7] shadow-2xl transition duration-200 ease-out ${
                peek !== null ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              style={{ transformOrigin: 'top left' }}
            >
              {peek !== null && (
                <>
                  <p className="mb-1 font-sans text-[13.5px] font-semibold text-white">{projects[peek].title}</p>
                  {projects[peek].flow.map((step, j) => (
                    <p key={step} className="relative flex items-center gap-2">
                      {j > 0 && <span className="absolute -top-2.5 left-[2.5px] h-2.5 w-px bg-[#4a4d52]" />}
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#86babe]" />
                      {step}
                    </p>
                  ))}
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
