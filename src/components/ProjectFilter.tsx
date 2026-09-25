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
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active === c
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.08)] hover:text-slate-900'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      {/* key forces a remount so the entrance animation replays on filter change */}
      <ProjectList key={active} projects={shown} />
    </>
  )
}
