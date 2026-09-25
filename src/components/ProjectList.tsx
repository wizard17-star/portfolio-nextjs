import Flow from './Flow'
import type { Project } from '@/lib/site'

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {projects.map((p, i) => (
        <li
          key={p.title}
          className="rise card flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{ '--d': `${i * 0.06}s` } as React.CSSProperties}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag">{p.category}</span>
            {p.company && <span className="tag">@ {p.company}</span>}
            {p.highlight && <span className="tag bg-blue-50 text-blue-700">{p.highlight}</span>}
          </div>
          <h3 className="mt-3 text-lg font-bold tracking-tight">{p.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
          {p.flow && (
            <div className="mt-4">
              <Flow steps={p.flow} />
            </div>
          )}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">{p.tech.join(' · ')}</p>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="link text-sm">
                View code →
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
