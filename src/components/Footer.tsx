import { site } from '@/lib/site'

const socials = [
  { href: site.links.linkedin, label: 'linkedin' },
  { href: site.links.github, label: 'github' },
  { href: site.links.medium, label: 'medium' },
  { href: site.resume, label: 'cv' },
]

export default function Footer() {
  return (
    <footer className="wrap mt-24 flex flex-col gap-3 border-t border-line py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.name} · {site.location}
      </p>
      <ul className="flex gap-5">
        {socials.map(({ href, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
              {label} ↗︎
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
