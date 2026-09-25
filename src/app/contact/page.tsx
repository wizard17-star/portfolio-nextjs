import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import CopyEmail from '@/components/CopyEmail'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Serhat Aslan, Data Engineer based in Warsaw, Poland — email, LinkedIn, GitHub or resume.',
  alternates: { canonical: '/contact' },
}

const channels = [
  { label: 'LinkedIn', value: 'in/serhat-aslan', href: site.links.linkedin },
  { label: 'GitHub', value: 'wizard17-star', href: site.links.github },
  { label: 'Resume', value: 'Download PDF', href: site.resume },
]

export default function ContactPage() {
  return (
    <div className="wrap max-w-4xl py-10 sm:py-14">
      <header className="rise">
        <h1 className="page-title">Contact</h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
          Recruiting for a data role, or have a data problem to solve? Email or LinkedIn is the fastest way to reach me.
          Based in {site.location}.
        </p>
      </header>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <div className="rise space-y-5" style={{ '--d': '0.08s' } as React.CSSProperties}>
          <div className="card">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</p>
            <div className="mt-2">
              <CopyEmail />
            </div>
          </div>
          <ul className="card divide-y divide-slate-100 !py-2">
            {channels.map(({ label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-slate-500">{label}</span>
                  <span className="font-medium transition-colors group-hover:text-blue-600">
                    {value} <span aria-hidden>→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rise" style={{ '--d': '0.16s' } as React.CSSProperties}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
