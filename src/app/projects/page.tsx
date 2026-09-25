import type { Metadata } from 'next'
import ProjectFilter from '@/components/ProjectFilter'
import { projects, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Data engineering projects by Serhat Aslan: Azure data warehouse, Microsoft Fabric BI, CDC streaming with Kafka and Delta Lake, a multimodal Transformer MSc thesis, RAG and NLP projects.',
  alternates: { canonical: '/projects' },
}

// Featured projects first, keeping the original order otherwise
const sorted = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

export default function ProjectsPage() {
  return (
    <div className="wrap py-10 sm:py-14">
      <header className="rise max-w-2xl">
        <h1 className="page-title">Projects</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">
          Data platforms, streaming pipelines and ML research — each card shows how the data flows. Code is on{' '}
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          .
        </p>
      </header>
      <div className="mt-8">
        <ProjectFilter projects={sorted} />
      </div>
    </div>
  )
}
