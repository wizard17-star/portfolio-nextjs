'use client'

import { useState } from 'react'
import ProjectList from './ProjectList'
import type { Project, ProjectCategory } from '@/lib/site'

const order: ProjectCategory[] = ['Data Engineering', 'BI', 'ML & AI', 'Web']

export default function ProjectFilter({ projects }: { projects: Project[] }) {
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
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              active === c
                ? 'border-black bg-black text-white'
                : 'border-line text-muted hover:border-black hover:text-black'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <ProjectList projects={shown} />
    </>
  )
}
