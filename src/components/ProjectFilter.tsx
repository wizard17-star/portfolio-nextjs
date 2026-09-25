'use client'

import { useState } from 'react'
import ProjectList from './ProjectList'
import type { Project, ProjectCategory } from '@/lib/site'

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const order: ProjectCategory[] = ['Data Engineering', 'BI', 'ML & AI', 'Web']
  const categories = ['All', ...order.filter((c) => projects.some((p) => p.category === c))] as const
  const [active, setActive] = useState<'All' | ProjectCategory>('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
              active === c ? 'border-fg bg-fg text-bg' : 'border-line text-muted hover:text-fg'
            }`}
          >
            {c}
            <span className="ml-1.5 opacity-60">
              {c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>
      <ProjectList projects={shown} />
    </>
  )
}
