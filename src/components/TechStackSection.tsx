'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const techStack = [
  { category: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'JavaScript'] },
  { category: 'Data', items: ['SQL Server', 'PostgreSQL', 'Data Factory', 'Synapse'] },
  { category: 'Cloud', items: ['Azure', 'Data Factory', 'DevOps', 'Kubernetes'] },
  { category: 'BI & Analytics', items: ['Power BI', 'Tableau', 'DAX', 'Fabric'] },
  { category: 'Big Data', items: ['PySpark', 'Kafka', 'Delta Lake', 'Hadoop'] },
  { category: 'AI & ML', items: ['Gemini AI', 'RAG', 'FAISS', 'LLMs'] },
]

function TechGroup({ category, items, index }: { category: string; items: string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function TechStackSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tools and technologies I work with
            </p>
          </div>
          <Link
            href="/about"
            className="hidden md:inline-flex text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
          >
            View detailed skills →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((group, idx) => (
            <TechGroup key={group.category} {...group} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
