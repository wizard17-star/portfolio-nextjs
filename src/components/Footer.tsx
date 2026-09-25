import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '@/lib/site'

const socials = [
  { href: site.links.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: site.links.github, label: 'GitHub', icon: Github },
  { href: `mailto:${site.email}`, label: 'Email', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role} · {site.location}
        </p>

        <div className="flex items-center gap-1">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={label}
              title={label}
              className="rounded-lg p-2 transition hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              <Icon size={18} aria-hidden />
            </a>
          ))}
          <Link href="/contact" className="ml-2 font-medium text-blue-600 hover:underline dark:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
