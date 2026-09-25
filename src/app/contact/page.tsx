import type { Metadata } from 'next'
import { FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import ContactForm from './ContactForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Serhat Aslan, Data Engineer based in Warsaw, Poland — email, LinkedIn, GitHub or resume.',
  alternates: { canonical: '/contact' },
}

const channels = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/serhat-aslan', href: site.links.linkedin },
  { icon: Github, label: 'GitHub', value: 'wizard17-star', href: site.links.github },
  { icon: FileText, label: 'Resume', value: 'Download PDF', href: site.resume },
]

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <header>
          <p className="section-eyebrow">Contact</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Let&apos;s talk</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Recruiting for a data role, or have a data problem to solve? Email or LinkedIn is the fastest way to reach
            me.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} aria-hidden /> {site.location}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="card flex items-center gap-3 !p-4 transition hover:border-blue-300 dark:hover:border-blue-500/50"
                >
                  <Icon size={20} className="shrink-0 text-blue-600 dark:text-blue-400" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{label}</span>
                    <span className="block truncate text-sm font-medium text-gray-900 dark:text-white">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </header>

        <ContactForm />
      </div>
    </div>
  )
}
