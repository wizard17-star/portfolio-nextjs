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
  { label: 'Resume', value: 'Resume_Serhat.pdf', href: site.resume },
]

export default function ContactPage() {
  return (
    <div className="wrap pt-16 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight">Let&apos;s talk</h1>
      <p className="mt-3 leading-relaxed text-muted">
        Recruiting for a data role, or have a data problem to solve? Email or LinkedIn is the fastest way to reach me.
        Based in {site.location}.
      </p>

      <div className="mt-8">
        <CopyEmail />
      </div>

      <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
        {channels.map(({ label, value, href }) => (
          <div key={label} className="flex gap-6 py-3">
            <dt className="w-24 shrink-0 text-muted">{label}</dt>
            <dd>
              <a href={href} target="_blank" rel="noopener noreferrer" className="link">
                {value}
             </a>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-16">
        <ContactForm />
      </div>
    </div>
  )
}
