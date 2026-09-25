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
      <a href={`mailto:${site.email}`} className="break-all text-lg font-semibold text-blue-600 hover:underline">
        {site.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
          copied ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
        aria-live="polite"
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
    </div>
  )
}
