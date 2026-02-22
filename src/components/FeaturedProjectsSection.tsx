'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import type { Project } from '@/types'

const featuredProjects: Project[] = [
  {
    title: 'Modern Data Warehouse with Azure',
    description:
      'Built a cloud-native data warehouse integrating SAP, Salesforce, and Dynamics into a unified analytics platform. Processed 100M+ records daily with optimized costs.',
    technologies: ['Azure', 'Data Factory', 'SQL Server', 'DWH'],
    company: 'TEMSA',
  },
  {
    title: 'Fabric-Based BI Architecture',
    description:
      'Designed end-to-end BI pipelines using Microsoft Fabric. Deployed 20+ dashboards with real-time data syncing across international operations.',
    technologies: ['Microsoft Fabric', 'Power BI', 'Dataflows', 'Lakehouse'],
    company: 'TEMSA',
  },
  {
    title: 'RAG Question Answering System',
    description:
      'Built AI-powered QA system using Retrieval-Augmented Generation with Gemini AI. Integrated semantic search for accurate, context-aware answers.',
    technologies: ['Python', 'FAISS', 'Gemini AI'],
    github: 'https://github.com/wizard17-star/TEG-Project',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1 pr-4">
          {project.title}
        </h3>
      </div>

      {project.company && (
        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
          @ {project.company}
        </p>
      )}

      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies?.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function FeaturedProjectsSection() {
  return (
    <section id="featured" className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Real-world solutions I've built for enterprise clients
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
            View All <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
          >
            View All Projects <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
