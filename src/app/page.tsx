import type { Metadata } from 'next'
import Link from 'next/link'
import Pipeline from '@/components/Pipeline'
import Section from '@/components/Section'
import ProjectList from '@/components/ProjectList'
import PostList from '@/components/PostList'
import CopyEmail from '@/components/CopyEmail'
import LocalTime from '@/components/LocalTime'
import { getMediumPosts } from '@/lib/getMediumPosts'
import { certifications, education, experience, highlights, projects, site, skills } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default async function Home() {
  const posts = (await getMediumPosts()).slice(0, 4)
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="wrap pt-16 sm:pt-24">
        <p className="label flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          open to data engineering roles
          <span className="text-line">/</span>
          <LocalTime />
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{site.name}</h1>
        <p className="mt-4 max-w-xl text-xl leading-snug text-muted sm:text-2xl">
          I move data from where it&apos;s created to where it&apos;s{' '}
          <span className="text-fg">
            useful<span className="caret text-accent">_</span>
          </span>
        </p>

        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          Data Engineer in Warsaw. I design Azure data warehouses, build the pipelines that feed them and the Power BI
          reports on top — {highlights[0].value} years, {highlights[1].value} applications integrated,{' '}
          {highlights[2].value} dashboards shipped.
        </p>

        <div className="mt-12">
          <Pipeline />
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <li>
            <a href={site.resume} target="_blank" rel="noopener" className="link">
              resume.pdf ↗︎
            </a>
          </li>
          <li>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              linkedin ↗︎
            </a>
          </li>
          <li>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link">
              github ↗︎
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="link">
              email ↗︎
            </a>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <Section id="work" index="01" title="Experience">
        <ul className="divide-y divide-line border-y border-line">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.role}`}>
              <details className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none gap-4 py-5 sm:gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="chip w-20 shrink-0 pt-1 sm:w-24">{job.period}</span>
                  <span className="flex-1">
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-medium">
                        {job.role} <span className="text-muted">· {job.company}</span>
                      </span>
                      <span className="font-mono text-muted transition-transform group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                    <span className="mt-1 block text-sm text-muted">{job.summary}</span>
                  </span>
                </summary>
                <div className="pb-6 sm:pl-[7.5rem]">
                  <ul className="space-y-1.5 text-sm leading-relaxed text-muted">
                    {job.points.map((p) => (
                      <li key={p} className="before:mr-2 before:text-accent before:content-['→']">
                        {p}
                      </li>
                    ))}
                  </ul>
                  {job.tech && <p className="chip mt-3">{job.tech.join(' · ')}</p>}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        index="02"
        title="Selected projects"
        action={
          <Link href="/projects" className="chip link">
            all projects →
          </Link>
        }
      >
        <ProjectList projects={featured} />
      </Section>

      {/* Credentials */}
      <Section id="credentials" index="03" title="Education & certifications">
        <ul className="divide-y divide-line border-y border-line">
          {education.map((e) => (
            <li key={e.degree} className="flex gap-4 py-4 sm:gap-6">
              <span className="chip w-20 shrink-0 pt-0.5 sm:w-24">{e.period || '—'}</span>
              <span>
                <span className="font-medium">{e.degree}</span>
                <span className="block text-sm text-muted">{e.school}</span>
              </span>
            </li>
          ))}
          {certifications.map((c) => (
            <li key={c.name} className="flex gap-4 py-4 sm:gap-6">
              <span className="chip w-20 shrink-0 pt-0.5 sm:w-24">{c.issued}</span>
              <span>
                <span className="font-medium">
                  {c.issuer} Certified: {c.name}
                </span>
                {c.credentialId && <span className="chip block">credential {c.credentialId}</span>}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Skills */}
      <Section id="skills" index="04" title="Toolbox">
        <dl className="space-y-4">
          {skills.map((s) => (
            <div key={s.group} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <dt className="chip w-40 shrink-0 pt-0.5">{s.group}</dt>
              <dd className="text-sm">{s.items.join(', ')}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <dt className="chip w-40 shrink-0 pt-0.5">Languages</dt>
            <dd className="text-sm">{site.languages.join(', ')}</dd>
          </div>
        </dl>
      </Section>

      {/* Writing */}
      {posts.length > 0 && (
        <Section
          id="writing"
          index="05"
          title="Writing"
          action={
            <Link href="/blog" className="chip link">
              all posts →
            </Link>
          }
        >
          <PostList posts={posts} />
        </Section>
      )}

      {/* Contact */}
      <Section id="contact" index={posts.length > 0 ? '06' : '05'} title="Contact">
        <p className="mb-6 max-w-xl leading-relaxed text-muted">
          Hiring for a data role, or have messy data that needs a home? I&apos;d like to hear about it.
        </p>
        <CopyEmail />
      </Section>
    </>
  )
}
