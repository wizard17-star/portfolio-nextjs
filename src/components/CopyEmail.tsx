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
    <div className="flex flex-wrap items-center gap-3">
      <a href={`mailto:${site.email}`} className="link break-all font-medium">
        {site.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded border border-line px-2 py-0.5 text-xs text-muted transition-colors hover:border-black hover:text-black"
        aria-live="polite"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}
