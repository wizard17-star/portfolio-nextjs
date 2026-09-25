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
    <div className="wrap pt-16 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight">Things I&apos;ve built</h1>
      <p className="mt-3 leading-relaxed text-muted">
        Data platforms, pipelines and ML research. Click a project to see how the data flows. Code is on{' '}
        <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link text-black">
          GitHub
       </a>
        .
      </p>
      <div className="mt-10">
        <ProjectFilter projects={sorted} />
      </div>
    </div>
  )
}
