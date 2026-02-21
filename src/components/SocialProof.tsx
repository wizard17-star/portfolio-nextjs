'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, Quote } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  text: string
  avatar?: string
  link?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Professional Network',
    role: 'Data & Analytics Community',
    company: 'LinkedIn',
    text: 'Serhat has proven expertise in building scalable data pipelines and delivering actionable BI solutions. His technical depth and communication skills make him a valuable asset to any team.',
    link: 'https://www.linkedin.com/in/serhat-aslan/',
  },
  {
    id: '2',
    name: 'Open Source Community',
    role: 'GitHub Contributor',
    company: 'Tech Community',
    text: 'Contributing to the data engineering space with well-documented projects and helping others learn through code examples and detailed READMEs.',
    link: 'https://github.com/wizard17-star',
  },
  {
    id: '3',
    name: 'Technical Writing',
    role: 'Data Engineering Insights',
    company: 'Medium',
    text: 'Publishing thoughtful articles about data engineering practices, cloud migrations, and best practices in the data space.',
    link: 'https://medium.com/@serhat-aslan',
  },
]

interface SocialLink {
  name: string
  icon: React.ReactNode
  url: string
  color: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    url: 'https://www.linkedin.com/in/serhat-aslan/',
    color: 'hover:text-blue-700 dark:hover:text-blue-400',
  },
  {
    name: 'GitHub',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    url: 'https://github.com/wizard17-star',
    color: 'hover:text-gray-800 dark:hover:text-gray-300',
  },
  {
    name: 'Email',
    icon: <Mail className="w-6 h-6" />,
    url: 'mailto:serhataslan0009@gmail.com',
    color: 'hover:text-red-600 dark:hover:text-red-400',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
            🌍 Social Presence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Connect with me across platforms
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-20"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 transition-all hover:bg-blue-100 dark:hover:bg-blue-900 ${link.color}`}
              title={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Testimonials / Social Proof */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            💬 What Others Say
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.a
                key={testimonial.id}
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-200 dark:border-gray-600 cursor-pointer group"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-400 dark:text-blue-500 mb-4 group-hover:scale-110 transition-transform" />

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-blue-200 dark:border-gray-600 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50+
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dashboards Deployed
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              25+
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              App Migrations
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              100M+
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Records Daily
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              5+
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
