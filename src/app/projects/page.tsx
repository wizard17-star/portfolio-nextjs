import type { Metadata } from 'next'
import ProjectFilter from '@/components/ProjectFilter'
import { projects, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Data engineering projects by Serhat Aslan: Azure data warehouse, Microsoft Fabric BI, CDC streaming with Kafka and Delta Lake, a multimodal Transformer MSc thesis, RAG and NLP projects.',
  alternates: { canonical: '/projects' },
}

// Projects with public source code first, keeping the original order otherwise
const sorted = [...projects].sort((a, b) => Number(Boolean(b.github)) - Number(Boolean(a.github)))

export default function ProjectsPage() {
  return (
    <div className="wrap pt-16 sm:pt-24">
      <p className="label">
        <span className="text-accent">~/</span>projects
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Things I&apos;ve built</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Enterprise data platforms, streaming pipelines and ML research. Open any row to see how the data flows. Source code is on{' '}
        <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link text-fg">
          GitHub
        </a>
        .
      </p>
      <div className="mt-12">
        <ProjectFilter projects={sorted} />
      </div>
    </div>
  )
}
