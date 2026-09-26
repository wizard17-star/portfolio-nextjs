'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <>
      <button type="button" onClick={copy} className="underline-grow transition-colors hover:text-ink">
        Copy email
      </button>
      <span
        role="status"
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-[13px] text-paper shadow-lg transition duration-300 ease-out ${
          copied ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        {copied ? `Copied ${site.email}` : ''}
      </span>
    </>
  )
}
