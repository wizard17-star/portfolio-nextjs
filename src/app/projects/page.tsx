import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { projects, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Data engineering projects by Serhat Aslan: Azure data warehouse, Microsoft Fabric BI, real-time Kafka/Spark streaming, data quality monitoring and a RAG question answering system.',
  alternates: { canonical: '/projects' },
}

// Projects with public source code first, keeping the original order otherwise
const sorted = [...projects].sort((a, b) => Number(Boolean(b.github)) - Number(Boolean(a.github)))

export default function ProjectsPage() {
  return (
    <div className="container-page py-16">
      <header className="max-w-2xl">
        <p className="section-eyebrow">Projects</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Things I&apos;ve built
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          From enterprise data platforms to streaming pipelines and AI experiments. Public code is on{' '}
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            GitHub
          </a>
          .
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
