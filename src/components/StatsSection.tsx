'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

interface StatCardProps {
  value: number
  label: string
  subtitle: string
}

function AnimatedCounter({ value }: { value: number }) {
  const motionValue = useMotionValue(0)
  const roundedValue = useTransform(motionValue, latest => Math.round(latest))

  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  return <motion.span>{roundedValue}</motion.span>
}

function StatCard({ value, label, subtitle }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {typeof value === 'number' && value > 999999 ? (
          <>
            <AnimatedCounter value={Math.floor(value / 1000000)} />M+
          </>
        ) : (
          <>
            <AnimatedCounter value={value} />
            {value >= 20 && '+'}
          </>
        )}
      </div>
      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{label}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      value: 50,
      label: 'Dashboards',
      subtitle: 'Deployed & monitored',
    },
    {
      value: 25,
      label: 'Migrations',
      subtitle: 'Successfully completed',
    },
    {
      value: 100000000,
      label: 'Records',
      subtitle: 'Processed daily',
    },
    {
      value: 5,
      label: 'Years',
      subtitle: 'Industry experience',
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real metrics from data engineering projects and solutions I've delivered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
