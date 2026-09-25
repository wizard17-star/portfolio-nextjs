'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

const inputClass =
  'mt-2 w-full border-b border-line bg-transparent py-2 outline-none transition-colors focus:border-accent focus-visible:outline-none'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [opened, setOpened] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" aria-describedby="form-note">
      <h2 className="label">or write a quick note</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="chip">name</span>
          <input name="name" required autoComplete="name" value={form.name} onChange={handleChange} className={inputClass} />
        </label>
        <label className="block">
          <span className="chip">email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="chip">message</span>
        <textarea
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="rounded bg-fg px-5 py-2.5 font-mono text-sm text-bg transition-opacity hover:opacity-80">
          open in email app →
        </button>
        <p id="form-note" className="chip" aria-live="polite">
          {opened
            ? 'your email app should open with the message pre-filled — just hit send'
            : 'nothing is stored on this site'}
        </p>
      </div>
    </form>
  )
}
