'use client'

import {
  Mail,
  Github,
  User,
  MessageSquare,
  FileText
} from 'lucide-react'

import { FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:serhataslan0009@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
      form.message + '\n\nSender email: ' + form.email
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setShowSuccessModal(true)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white dark:bg-gray-900 py-16 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">📬 Let's Talk!</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Feel free to reach out via email, social media, or send a quick message below.
        </p>

        {/* Quick Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <ContactItem
            icon={<Mail size={20} />}
            label="serhataslan0009@gmail.com"
            link="mailto:serhataslan0009@gmail.com"
          />
          <ContactItem
            icon={<FaLinkedin size={20} />}
            label="https://www.linkedin.com/in/serhat-aslan"
            link="https://www.linkedin.com/in/serhat-aslan"
          />
          <ContactItem
            icon={<Github size={20} />}
            label="https://github.com/wizard17-star"
            link="https://github.com/wizard17-star"
          />
          <ContactItem
            icon={<FileText size={20} />}
            label="Download My CV (PDF)"
            link="/Resume_Serhat.pdf"
          />
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
            <div className="flex items-center gap-2">
              <User size={16} className="text-gray-400" />
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-400" />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <div className="flex items-start gap-2">
              <MessageSquare size={16} className="text-gray-400 mt-2" />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="flex-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-5 right-5 bg-green-100 dark:bg-green-800 text-green-800 dark:text-white px-4 py-3 rounded shadow-lg"
          >
            ✅ Message sent! Opening your mail app...
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

function ContactItem({
  icon,
  label,
  link
}: {
  icon: React.ReactNode
  label: string
  link: string
}) {
  return (
    <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200 transform hover:-translate-y-1 hover:scale-105 transition justify-start break-all">
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm sm:text-base">
        {label}
      </a>
    </div>
  )
}