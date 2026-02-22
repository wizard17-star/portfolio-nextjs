'use client'

import SkillsShowcase from '@/components/SkillsShowcase'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a <span className="font-semibold text-blue-600">Data Engineer</span> and{' '}
              <span className="font-semibold text-blue-600">Analytics architect</span> passionate about building scalable 
              data systems that drive business impact. With over 5 years in the field, I've helped 
              organizations modernize their data infrastructure, optimize costs, and unlock insights.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years exp.</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Dashboards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Migrations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Showcase */}
      <SkillsShowcase />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to work together?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let's discuss how I can help with your data engineering and analytics challenges.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Get in touch →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
