'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'
import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  company?: string
  technologies?: string[]
  github?: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'Question Answering System using RAG with Gemini AI',
    description:
      'A QA system built using Retrieval-Augmented Generation and Gemini AI. Integrates text generation with semantic search for relevant and precise answers.',
    technologies: ['Python', 'FAISS', 'Gemini AI'],
    github: 'https://github.com/wizard17-star/TEG-Project',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Built a responsive portfolio and blog using Next.js, Tailwind CSS and MDX.',
    technologies: ['Next.js', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com/wizard17-star/portfolio-nextjs',
  },
  {
    title: 'Modern Data Warehouse with Azure',
    description:
      'Built a cloud-native data warehouse integrating SAP, Salesforce, Dynamics, and MS SQL sources using Azure Data Factory and SQL Server.',
    company: 'TEMSA',
    technologies: ['Azure', 'Data Factory', 'SQL Server', 'DWH'],
  },
  {
    title: 'Fabric-Based BI Architecture',
    description:
      'Designed end-to-end BI pipelines using Microsoft Fabric, combining lakehouse, dataflows, and semantic models.',
    company: 'TEMSA',
    technologies: ['Microsoft Fabric', 'Dataflows', 'Power BI', 'Lakehouse'],
  },
  {
    title: 'Real-Time Data Streaming Pipeline',
    description:
      'Developed a Kafka-based pipeline to process and store real-time vehicle telemetry data. Integrated Spark for stream transformations and MinIO for Delta storage.',
    technologies: ['Apache Kafka', 'Spark', 'MinIO', 'Delta Lake'],
  },
  {
    title: 'Automated Data Quality Monitoring System',
    description:
      'Implemented an automated system that scans daily ingested data for anomalies, missing values, and schema drift using Great Expectations and Python.',
    technologies: ['Python', 'Great Expectations', 'Data Quality'],
  },
]

const sortedProjects = [...projects].sort((a, b) =>
  b.github && !a.github ? 1 : a.github && !b.github ? -1 : 0
)

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 bg-[url('/grid.svg')] bg-cover bg-fixed transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Real-world applications I’ve built — from scalable data platforms to machine learning pipelines.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {sortedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-6 flex flex-col justify-between backdrop-blur-md bg-opacity-90"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h2>
                  {project.github && (
                    <Link href={project.github} target="_blank" className="hover:opacity-80" title="GitHub Repo">
                      <Github size={18} className="text-gray-500 dark:text-gray-300" />
                    </Link>
                  )}
                </div>

                {project.company && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <em>{project.company}</em>
                  </p>
                )}

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
