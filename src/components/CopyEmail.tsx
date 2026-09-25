'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <a href={`mailto:${site.email}`} className="link break-all text-xl font-medium sm:text-2xl">
        {site.email}
      </a>
      <button type="button" onClick={copy} className="chip rounded border border-line px-2 py-1 transition-colors hover:text-fg" aria-live="polite">
        {copied ? 'copied ✓' : 'copy'}
      </button>
    </div>
  )
}
