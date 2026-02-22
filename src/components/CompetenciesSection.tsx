'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CompetencyProps {
  icon: string
  title: string
  description: string
  skills: string[]
}

const competencies: CompetencyProps[] = [
  {
    icon: '🧱',
    title: 'Data Engineering',
    description: 'Building robust, scalable data pipelines and ETL processes that handle millions of records daily.',
    skills: ['Python', 'SQL', 'Spark', 'Kafka', 'Data Factory'],
  },
  {
    icon: '📊',
    title: 'Business Intelligence',
    description: 'Designing end-to-end analytics solutions with actionable dashboards and KPIs.',
    skills: ['Power BI', 'Tableau', 'DAX', 'Fabric', 'Reporting'],
  },
  {
    icon: '☁️',
    title: 'Cloud Architecture',
    description: 'Architecting and migrating enterprise applications to cloud platforms with optimization.',
    skills: ['Azure', 'Synapse', 'DevOps', 'Kubernetes', 'CI/CD'],
  },
]

function CompetencyCard({ icon, title, description, skills }: CompetencyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">{description}</p>

      {/* Skills tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Learn more link */}
      <Link
        href="/about"
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm"
      >
        Learn more <ArrowRight size={16} />
      </Link>
    </motion.div>
  )
}

export default function CompetenciesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Competencies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized expertise across data infrastructure, analytics, and cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((comp, idx) => (
            <CompetencyCard key={idx} {...comp} />
          ))}
        </div>
      </div>
    </section>
  )
}
