'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface TimelineItem {
  role: string
  company: string
  date: string
  description: string
  achievements?: string[]
  technologies?: string[]
  id: string
}

const experiences: TimelineItem[] = [
  {
    id: '1',
    role: 'Test Data Management Specialist',
    company: 'BMO',
    date: 'Feb 2025 – Present',
    description:
      'Contributing to secure and automated test data pipelines for enterprise systems.',
    achievements: [
      'Building automated test data management solutions',
      'Ensuring data security and compliance',
      'Optimizing data workflows for performance',
    ],
    technologies: ['Python', 'SQL', 'Azure', 'DevOps'],
  },
  {
    id: '2',
    role: 'Business Analyst',
    company: 'Köksan',
    date: 'Aug 2024 – Oct 2024',
    description:
      'Analyzed and optimized internal reporting systems and business data structures.',
    achievements: [
      'Improved reporting query performance by 40%',
      'Designed new data models for better analytics',
      'Created comprehensive documentation',
    ],
    technologies: ['Power BI', 'T-SQL', 'Excel', 'Data Modeling'],
  },
  {
    id: '3',
    role: 'Data Engineer',
    company: 'TEMSA',
    date: 'Jan 2023 – Jun 2024',
    description:
      'Led cloud migration, data warehousing, and BI reporting across international operations.',
    achievements: [
      'Migrated 50+ applications to Azure cloud',
      'Built modern data warehouse with 100M+ daily records',
      'Deployed 20+ Power BI dashboards',
      'Led team of 5 data engineers',
    ],
    technologies: [
      'Azure Data Factory',
      'Azure Synapse',
      'Power BI',
      'SQL Server',
      'Python',
    ],
  },
]

interface ExperienceItemProps {
  item: TimelineItem
  index: number
  isLast: boolean
}

function ExperienceItem({ item, index, isLast }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pb-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-blue-200 dark:to-blue-900" />
      )}

      {/* Content card */}
      <div className="ml-20 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {item.role}
          </h3>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
            {item.date}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
          @ {item.company}
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Achievements */}
        {item.achievements && item.achievements.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Key Achievements:
            </p>
            <ul className="space-y-1">
              {item.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <span className="text-blue-500 font-bold mt-0.5">✓</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + idx * 0.03 }}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💼 Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey in data engineering and analytics
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Left border line for desktop */}
          <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent opacity-20" />

          {/* Experience items */}
          <div className="space-y-2">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                item={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's work together
          </a>
        </motion.div>
      </div>
    </section>
  )
}
