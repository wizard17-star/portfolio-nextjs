import { site } from '@/lib/site'

const socials = [
  { href: site.links.linkedin, label: 'LinkedIn' },
  { href: site.links.github, label: 'GitHub' },
  { href: site.links.medium, label: 'Medium' },
]

export default function Footer() {
  return (
    <footer className="wrap flex flex-col gap-2 py-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.name} · {site.location}
      </p>
      <ul className="flex gap-5">
        {socials.map(({ href, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
