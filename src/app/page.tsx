import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, Github, GraduationCap, Languages, Linkedin, Mail, MapPin } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import PostCard from '@/components/PostCard'
import { getMediumPosts } from '@/lib/getMediumPosts'
import { education, experience, highlights, projects, site, skills } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default async function Home() {
  const posts = (await getMediumPosts()).slice(0, 3)
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-blue-50/60 to-white dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
        <div className="container-page py-20 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            Open to Data Engineering roles
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-blue-600 dark:text-blue-400 sm:text-2xl">{site.headline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I build reliable data platforms end to end — from ingesting SAP, Salesforce and Dynamics data with Azure
            Data Factory, to modeling the warehouse, to the Power BI reports people actually use.
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} aria-hidden /> {site.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.resume} target="_blank" rel="noopener" className="btn-primary">
              <Download size={16} aria-hidden /> Download resume
            </a>
            <Link href="/contact" className="btn-secondary">
              <Mail size={16} aria-hidden /> Get in touch
            </Link>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="LinkedIn profile">
              <Linkedin size={16} aria-hidden /> LinkedIn
            </a>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="GitHub profile">
              <Github size={16} aria-hidden /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section aria-label="Highlights" className="container-page -mt-px py-12">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="card flex flex-col-reverse text-center">
              <dt className="mt-1 text-sm text-gray-600 dark:text-gray-400">{h.label}</dt>
              <dd className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">{h.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section id="about" className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title mt-2">Turning scattered enterprise data into decisions</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m a Data Engineer with 3+ years of experience in data engineering and business analysis. At TEMSA I
                designed the Azure data warehouse and ETL for 25+ applications, led their cloud migration, and built
                50+ Power BI dashboards used across Europe, America and Türkiye.
              </p>
              <p>
                I care about the unglamorous parts that make data trustworthy: governance, master data, data
                cataloging, and masking sensitive data under GDPR. Today I work on test data management at BMO while
                completing a Master&apos;s in Data Science at PJATK in Warsaw.
              </p>
            </div>
          </div>

          <aside className="card space-y-5">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                <GraduationCap size={16} aria-hidden /> Education
              </h3>
              <ul className="mt-2 space-y-3 text-sm">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{e.degree}</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {e.school}
                      {e.period && ` · ${e.period}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                <Languages size={16} aria-hidden /> Languages
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{site.languages.join(' · ')}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container-page py-12">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title mt-2">Where I&apos;ve worked</h2>

        <ol className="relative mt-8 space-y-8 border-l-2 border-gray-200 pl-6 dark:border-gray-800">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative">
              <span
                className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-gray-950"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {job.role} <span className="text-blue-600 dark:text-blue-400">@ {job.company}</span>
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{job.period}</p>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-600 marker:text-gray-400 dark:text-gray-300">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {job.tech && (
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Projects */}
      <section id="projects" className="container-page py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">Projects</p>
            <h2 className="section-title mt-2">Selected work</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
            All projects <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container-page py-12">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title mt-2">Tools I use day to day</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white">{s.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      {posts.length > 0 && (
        <section id="writing" className="container-page py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-eyebrow">Writing</p>
              <h2 className="section-title mt-2">Latest articles</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
              All articles <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.link} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-page py-12">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-12 text-center text-white shadow-lg sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Hiring a data engineer?</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            I&apos;m open to full-time Data Engineering roles in Warsaw or remote. The fastest way to reach me is email
            or LinkedIn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              <Mail size={16} aria-hidden /> {site.email}
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Linkedin size={16} aria-hidden /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
