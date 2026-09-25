'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

const inputClass =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus-visible:outline-none'

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
    <form onSubmit={handleSubmit} className="card space-y-4 sm:!p-8" aria-describedby="form-note">
      <h2 className="text-lg font-bold">Send a message</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input name="name" required autoComplete="name" value={form.name} onChange={handleChange} className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
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

      <label className="block text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </label>

      <button type="submit" className="btn-primary w-full">
        Open in my email app
      </button>
      <p id="form-note" className="text-center text-xs text-slate-500" aria-live="polite">
        {opened
          ? 'Your email app should open with the message pre-filled — just hit send.'
          : 'Nothing is stored on this site.'}
      </p>
    </form>
  )
}
