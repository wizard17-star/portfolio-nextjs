'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { site } from '@/lib/site'

type Command = { group: string; label: string; hint?: string; run: () => void }

export default function CommandMenu() {
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const [toast, setToast] = useState<string | null>(null)

  const open = useCallback(() => {
    setQuery('')
    setIndex(0)
    dialogRef.current?.showModal()
    inputRef.current?.focus()
  }, [])
  const close = () => dialogRef.current?.close()

  const commands = useMemo<Command[]>(() => {
    const go = (href: string) => () => router.push(href)
    const external = (href: string) => () => window.open(href, '_blank', 'noopener')
    return [
      { group: 'Navigate', label: 'Home', run: go('/') },
      { group: 'Navigate', label: 'Experience', run: go('/#work') },
      { group: 'Navigate', label: 'Projects', run: go('/projects') },
      { group: 'Navigate', label: 'Writing', run: go('/blog') },
      { group: 'Navigate', label: 'Contact', run: go('/contact') },
      {
        group: 'Actions',
        label: 'Copy email address',
        hint: site.email,
        run: () => {
          navigator.clipboard?.writeText(site.email).then(() => {
            setToast('Email copied')
            setTimeout(() => setToast(null), 2000)
          })
        },
      },
      { group: 'Actions', label: 'Open resume (PDF)', run: external(site.resume) },
      {
        group: 'Actions',
        label: `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`,
        run: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
      },
      { group: 'Links', label: 'LinkedIn', run: external(site.links.linkedin) },
      { group: 'Links', label: 'GitHub', run: external(site.links.github) },
      { group: 'Links', label: 'Medium', run: external(site.links.medium) },
    ]
  }, [router, resolvedTheme, setTheme])

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        dialogRef.current?.open ? close() : open()
      }
    }
    const onOpenEvent = () => open()
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-menu', onOpenEvent)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-menu', onOpenEvent)
    }
  }, [open])

  const runAt = (i: number) => {
    const cmd = results[i]
    if (!cmd) return
    close()
    cmd.run()
  }

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIndex((i) => (i + 1) % Math.max(results.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runAt(index)
    }
  }

  let lastGroup = ''

  return (
    <>
      <dialog
        ref={dialogRef}
        aria-label="Command menu"
        onClick={(e) => e.target === dialogRef.current && close()}
        className="command-menu mt-[15vh] w-[min(32rem,calc(100vw-2rem))] rounded-lg border border-line bg-bg p-0 text-fg shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIndex(0)
          }}
          onKeyDown={onInputKey}
          placeholder="Type a command or search…"
          aria-label="Search commands"
          aria-controls="command-results"
          aria-activedescendant={results[index] ? `cmd-${index}` : undefined}
          className="w-full border-b border-line bg-transparent px-4 py-3 text-sm outline-none focus-visible:outline-none"
        />
        <ul id="command-results" role="listbox" className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && <li className="chip px-3 py-6 text-center">No results</li>}
          {results.map((cmd, i) => {
            const header = cmd.group !== lastGroup ? cmd.group : null
            lastGroup = cmd.group
            return (
              <li key={cmd.label} role="presentation">
                {header && <p className="chip px-3 pb-1 pt-3">{header}</p>}
                <div
                  id={`cmd-${i}`}
                  role="option"
                  aria-selected={i === index}
                  onMouseMove={() => setIndex(i)}
                  onClick={() => runAt(i)}
                  className={`flex cursor-pointer items-center justify-between rounded px-3 py-2 text-sm ${
                    i === index ? 'bg-fg/5 text-fg' : 'text-muted'
                  }`}
                >
                  <span>{cmd.label}</span>
                  {cmd.hint && <span className="chip">{cmd.hint}</span>}
                </div>
              </li>
            )
          })}
        </ul>
        <p className="chip flex gap-4 border-t border-line px-4 py-2">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </p>
      </dialog>

      {toast && (
        <div role="status" className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded bg-fg px-3 py-1.5 font-mono text-xs text-bg">
          {toast}
        </div>
      )}
    </>
  )
}

/** Small trigger that shows the shortcut and opens the menu on click (useful on touch devices). */
export function CommandTrigger() {
  const [mac, setMac] = useState(true)
  useEffect(() => setMac(/Mac|iPhone|iPad/.test(navigator.platform)), [])

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-command-menu'))}
      className="rounded border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted transition-colors hover:text-fg"
      aria-label="Open command menu"
    >
      {mac ? '⌘' : 'Ctrl'} K
    </button>
  )
}
