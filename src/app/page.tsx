'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getMediumPosts } from '../lib/getMediumPosts'
import type { MediumPost } from '../types'

export default function Home() {
  const [activeSection, setActiveSection] = useState<'cv' | 'projects' | 'blog' | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [blogPosts, setBlogPosts] = useState<MediumPost[]>([])
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveSection(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getMediumPosts()
      setBlogPosts(allPosts.slice(0, 3))
    }
    if (activeSection === 'blog') {
      fetchPosts()
    }
  }, [activeSection])

  return (
    <main className="min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 text-center bg-white dark:bg-gray-900 transition-colors">
      <div className="animate-fade-in-down">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">Serhat Aslan</h1>
        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
          Data Engineer • AI Specialist • Cloud & BI Architect
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10 animate-fade-in-up overflow-x-auto sm:flex-wrap">
        <TabButton label="CV" active={activeSection === 'cv'} onClick={() => setActiveSection('cv')} />
        <TabButton label="Projects" active={activeSection === 'projects'} onClick={() => setActiveSection('projects')} />
        <TabButton label="Blog" active={activeSection === 'blog'} onClick={() => setActiveSection('blog')} />
      </div>

      <div ref={containerRef} className="w-full max-w-5xl mx-auto transition-all duration-300 animate-fade-in-up min-h-[50vh]">
        {activeSection === 'cv' && <CVSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'blog' && <BlogSection posts={blogPosts} />}
        <CallToAction />
        <ContactSection />
      </div>
    </main>
  )
}

function TabButton({ label, onClick, active }: { label: string; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 whitespace-nowrap rounded-full text-sm font-medium transition border shadow-sm backdrop-blur-sm ${
        active
          ? 'bg-blue-600 text-white border-blue-600'
          : 'text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-800'
      }`}
    >
      {label}
    </button>
  )
}
function CVSection() {
  const router = useRouter()

  return (
    <div className="bg-white dark:bg-gray-800 px-6 py-5 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-left max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-10 text-sm sm:text-[0.95rem] text-gray-700 dark:text-gray-300">
        {/* Left - Personal Info */}
        <div className="flex-1 space-y-1">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">👤 Personal Info</h3>
          <p><strong>Name:</strong> Serhat Aslan</p>
          <p><strong>Title:</strong> Data Engineer </p>
          <p><strong>Location:</strong> Warsaw, Poland</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:serhataslan0009@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              serhataslan0009@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/serhat-aslan/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              /serhat-aslan
            </a>
          </p>
          <p><strong>Languages:</strong> Turkish (Native), English (C1), Greek (C2), Polish (A2)</p>
        </div>

        {/* Right - Education */}
        <div className="flex-1 space-y-1">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">🎓 Education</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Master’s in Data Science – PJATK, Warsaw (2024–ongoing)</li>
            <li>B.Sc. – Çukurova University </li>
          </ul>
        </div>
      </div>

      <div className="text-right mt-6">
        <button
          onClick={() => router.push('/contact')}
          className="inline-block px-6 py-2 text-sm border border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300"
        >
          CV →
        </button>
      </div>
    </div>
  )
}

function ProjectsSection() {
  const projects = [
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
      technologies: ['Azure', 'Data Factory', 'SQL Server', 'DWH'],
    },
  ]

  return (
    <section className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md transition-transform transform hover:scale-[1.03] hover:shadow-xl hover:border-blue-500 duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 transition-colors"
              >
                View on GitHub →
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/projects"
          className="inline-block px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  )
}

function BlogSection({ posts }: { posts: MediumPost[] }) {
  if (posts.length === 0) {
    return <div className="text-center py-10 text-gray-500 dark:text-gray-400">Loading blog posts...</div>
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-left">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Link href={post.link} target="_blank">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          View All Posts →
        </Link>
      </div>
    </div>
  )
}

function CallToAction() {
  const router = useRouter()

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-6 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-md text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Let’s build something great together.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Open to freelance, consulting, or full-time opportunities.
        </p>
        <button
          onClick={() => router.push('/contact')}
          className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700 transition"
        >
          Contact Me →
        </button>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="mt-6 pb-10 bg-white dark:bg-gray-900 text-center py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Feel free to reach out via email or connect with me on LinkedIn.</p>
      <div className="space-y-4 text-sm">
        <p className="text-blue-600 dark:text-blue-400">
          📧 <a href="mailto:serhataslan0009@gmail.com" className="hover:underline">serhataslan0009@gmail.com</a>
        </p>
        <p className="text-blue-600 dark:text-blue-400">
          🔗 <a href="https://www.linkedin.com/in/serhat-aslan/" target="_blank" className="hover:underline">/serhat-aslan</a>
        </p>
      </div>
    </section>
  )
}
