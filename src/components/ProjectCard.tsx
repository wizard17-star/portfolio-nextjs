import { Github } from 'lucide-react'
import type { Project } from '@/lib/site'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex h-full flex-col transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:hover:border-blue-500/50">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {project.company && (
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            @ {project.company}
          </span>
        )}
        {project.highlight && (
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            {project.highlight}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          <Github size={16} aria-hidden /> View source on GitHub
        </a>
      )}
    </article>
  )
}
