'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type Proficiency = 'Senior' | 'Intermediate' | 'Beginner'

interface SkillCategory {
  name: string
  icon: string
  skills: {
    name: string
    proficiency: Proficiency
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Data Engineering',
    icon: '🧱',
    skills: [
      { name: 'Python', proficiency: 'Senior' },
      { name: 'SQL', proficiency: 'Senior' },
      { name: 'PySpark', proficiency: 'Intermediate' },
      { name: 'Apache Kafka', proficiency: 'Intermediate' },
      { name: 'Delta Lake', proficiency: 'Intermediate' },
      { name: 'Great Expectations', proficiency: 'Intermediate' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: [
      { name: 'Azure Data Factory', proficiency: 'Senior' },
      { name: 'Azure Synapse', proficiency: 'Senior' },
      { name: 'Microsoft Fabric', proficiency: 'Intermediate' },
      { name: 'Azure DevOps', proficiency: 'Intermediate' },
      { name: 'Docker', proficiency: 'Intermediate' },
      { name: 'Kubernetes', proficiency: 'Beginner' },
    ],
  },
  {
    name: 'Business Intelligence',
    icon: '📊',
    skills: [
      { name: 'Power BI', proficiency: 'Senior' },
      { name: 'DAX', proficiency: 'Senior' },
      { name: 'Tableau', proficiency: 'Intermediate' },
      { name: 'Data Modeling', proficiency: 'Senior' },
      { name: 'Dashboard Design', proficiency: 'Senior' },
    ],
  },
  {
    name: 'Programming',
    icon: '💻',
    skills: [
      { name: 'TypeScript', proficiency: 'Intermediate' },
      { name: 'JavaScript', proficiency: 'Intermediate' },
      { name: 'Next.js', proficiency: 'Intermediate' },
      { name: 'React', proficiency: 'Intermediate' },
      { name: 'Node.js', proficiency: 'Beginner' },
    ],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', proficiency: 'Senior' },
      { name: 'PostgreSQL', proficiency: 'Intermediate' },
      { name: 'MongoDB', proficiency: 'Beginner' },
      { name: 'Data Warehousing', proficiency: 'Senior' },
      { name: 'Schema Design', proficiency: 'Senior' },
    ],
  },
  {
    name: 'AI & ML',
    icon: '🤖',
    skills: [
      { name: 'Gemini AI', proficiency: 'Intermediate' },
      { name: 'RAG Systems', proficiency: 'Intermediate' },
      { name: 'LLMs', proficiency: 'Intermediate' },
      { name: 'FAISS', proficiency: 'Beginner' },
      { name: 'Machine Learning Basics', proficiency: 'Beginner' },
    ],
  },
]

const proficiencyColors: Record<Proficiency, string> = {
  Senior: 'from-green-100 to-green-50 dark:from-green-900 dark:to-green-800 text-green-700 dark:text-green-300',
  Intermediate: 'from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300',
  Beginner: 'from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 text-purple-700 dark:text-purple-300',
}

const proficiencyBorder: Record<Proficiency, string> = {
  Senior: 'border-green-300 dark:border-green-700',
  Intermediate: 'border-blue-300 dark:border-blue-700',
  Beginner: 'border-purple-300 dark:border-purple-700',
}

export default function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🛠️ Technical Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        {/* Category Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {skillCategories.map((category, idx) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )
              }
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                {category.name}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories
            .filter(
              (cat) =>
                !selectedCategory || selectedCategory === cat.name
            )
            .map((category) => (
              <motion.div
                key={category.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`bg-gradient-to-r ${proficiencyColors[skill.proficiency]} border-l-4 ${proficiencyBorder[skill.proficiency]} p-3 rounded-lg flex justify-between items-center`}
                    >
                      <span className="font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold px-2 py-1 bg-white/40 dark:bg-black/30 rounded-full">
                        {skill.proficiency}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6 font-semibold">
            Proficiency Levels
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {(Object.keys(proficiencyColors) as Proficiency[]).map((level) => (
              <div key={level} className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded border-l-4 ${proficiencyBorder[level]} bg-gradient-to-r ${proficiencyColors[level]}`}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
