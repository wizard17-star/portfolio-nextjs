import { site } from '@/lib/site'

const socials = [
  { href: site.links.linkedin, label: 'LinkedIn' },
  { href: site.links.github, label: 'GitHub' },
  { href: site.links.medium, label: 'Medium' },
]

export default function Footer() {
  return (
    <footer className="wrap mt-20 flex flex-col gap-3 border-t border-line py-8 text-sm text-muted sm:flex-row sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <ul className="flex gap-5">
        {socials.map(({ href, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
