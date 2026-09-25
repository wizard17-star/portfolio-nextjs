import type { Project } from '@/lib/site'

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {projects.map((p) => {
        const Row = p.github ? 'a' : 'div'
        return (
          <li key={p.title}>
            <Row
              {...(p.github ? { href: p.github, target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group block py-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium transition-colors group-hover:text-accent">
                  {p.title}
                  {p.github && (
                    <span className="ml-1 inline-block font-mono text-sm text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                      ↗︎
                    </span>
                  )}
                </h3>
                <span className="chip shrink-0">{p.highlight ?? (p.company ? `@ ${p.company}` : '')}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <p className="chip mt-3">{p.tech.join(' · ')}</p>
            </Row>
          </li>
        )
      })}
    </ul>
  )
}
