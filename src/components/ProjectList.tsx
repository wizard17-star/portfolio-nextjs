import Flow from './Flow'
import type { Project } from '@/lib/site'

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-line border-t border-line">
      {projects.map((p) => (
        <li key={p.title}>
          <details className="group">
            <summary className="block cursor-pointer list-none py-4 [&::-webkit-details-marker]:hidden">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{p.title}</h3>
                <span className="text-muted transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </div>
              <p className="meta mt-1 leading-relaxed">{p.description}</p>
            </summary>
            <div className="space-y-2 pb-5">
              {p.flow && <Flow steps={p.flow} />}
              <p className="meta">{p.tech.join(', ')}</p>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="link inline-block text-sm">
                  Source code on GitHub
                </a>
              )}
            </div>
          </details>
        </li>
      ))}
    </ul>
  )
}
