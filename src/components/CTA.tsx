'use client'

import { motion } from 'framer-motion'
import { Download, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Whether you need a data engineer for a project, want to collaborate, or just want to say hello — I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Get in Touch Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-2xl"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="/Resume_Serhat.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-100 font-bold rounded-lg hover:bg-blue-200 dark:hover:bg-blue-700 transition-all shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://www.linkedin.com/in/serhat-aslan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
