'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

const inputClass =
  'mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

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
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Send a message</h2>

      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className={inputClass} />
      </div>

      <button type="submit" className="btn-primary w-full">
        Open in my email app
      </button>

      <p id="form-note" className="text-xs text-gray-500 dark:text-gray-400" aria-live="polite">
        {opened ? (
          <>
            Your email app should now open with the message pre-filled — just hit send. Nothing happened? Email me
            directly at{' '}
            <a href={`mailto:${site.email}`} className="font-medium text-blue-600 hover:underline dark:text-blue-400">
              {site.email}
            </a>
            .
          </>
        ) : (
          'This opens your email app with the message pre-filled; nothing is stored on this site.'
        )}
      </p>
    </form>
  )
}
