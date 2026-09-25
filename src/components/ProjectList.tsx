import Flow from './Flow'
import type { Project } from '@/lib/site'

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {projects.map((p) => (
        <li key={p.title} className="reveal">
          <details className="group">
            <summary className="block cursor-pointer list-none py-5 [&::-webkit-details-marker]:hidden">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium transition-colors group-hover:text-accent">{p.title}</h3>
                <span className="flex shrink-0 items-baseline gap-3">
                  <span className="chip hidden sm:inline">{p.highlight ?? (p.company ? `@ ${p.company}` : p.category)}</span>
                  <span className="font-mono text-muted transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
            </summary>

            <div className="space-y-4 pb-6">
              {p.flow && <Flow steps={p.flow} />}
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="chip">{p.tech.join(' · ')}</p>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="link font-mono text-xs">
                    view source ↗︎
                  </a>
                )}
              </div>
            </div>
          </details>
        </li>
      ))}
    </ul>
  )
}
