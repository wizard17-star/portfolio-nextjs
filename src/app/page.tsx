import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section'
import ProjectList from '@/components/ProjectList'
import PostList from '@/components/PostList'
import CopyEmail from '@/components/CopyEmail'
import { getMediumPosts } from '@/lib/getMediumPosts'
import { certifications, education, experience, projects, site, skills } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default async function Home() {
  const posts = (await getMediumPosts()).slice(0, 4)
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* Intro */}
      <section className="wrap pt-16 sm:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{site.name}</h1>
        <p className="mt-2 text-lg">Data Engineer · {site.location}</p>

        <p className="mt-6 leading-relaxed text-muted">
          I design Azure data warehouses, build the pipelines that feed them and the Power BI reports on top. 3+ years
          of experience: 25+ applications integrated, 50+ dashboards built, 100+ SQL queries optimized. M.Sc. in Data
          Science, Microsoft certified in Fabric and Azure AI.
        </p>
        <p className="mt-4 leading-relaxed text-muted">Currently open to Data Engineering roles.</p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a href={site.resume} target="_blank" rel="noopener" className="link font-medium">
              Resume (PDF)
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="link">
              Email
            </a>
          </li>
          <li>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ul className="divide-y divide-line border-t border-line">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <details className="group">
                <summary className="block cursor-pointer list-none py-4 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium">
                      {job.role}, {job.company}
                    </h3>
                    <span className="meta shrink-0">{job.period}</span>
                  </div>
                  <p className="meta mt-1">{job.summary}</p>
                </summary>
                <ul className="meta list-disc space-y-1 pb-5 pl-5 leading-relaxed">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
        <p className="meta mt-3">Click a role to see details.</p>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title="Projects"
        action={
          <Link href="/projects" className="link text-sm">
            All projects
          </Link>
        }
      >
        <ProjectList projects={featured} />
      </Section>

      {/* Education & certifications */}
      <Section id="education" title="Education & certifications">
        <ul className="divide-y divide-line border-t border-line">
          {education.map((e) => (
            <li key={e.degree} className="flex items-baseline justify-between gap-4 py-3">
              <span>
                <span className="font-medium">{e.degree}</span>
                <span className="meta block">{e.school}</span>
              </span>
              {e.period && <span className="meta shrink-0">{e.period}</span>}
            </li>
          ))}
          {certifications.map((c) => (
            <li key={c.name} className="flex items-baseline justify-between gap-4 py-3">
              <span>
                <span className="font-medium">
                  {c.issuer} Certified: {c.name}
                </span>
                {c.credentialId && <span className="meta block">Credential ID {c.credentialId}</span>}
              </span>
              <span className="meta shrink-0">{c.issued}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <dl className="space-y-3 text-sm">
          {skills.map((s) => (
            <div key={s.group} className="sm:flex sm:gap-6">
              <dt className="font-medium sm:w-44 sm:shrink-0">{s.group}</dt>
              <dd className="text-muted">{s.items.join(', ')}</dd>
            </div>
          ))}
          <div className="sm:flex sm:gap-6">
            <dt className="font-medium sm:w-44 sm:shrink-0">Languages</dt>
            <dd className="text-muted">{site.languages.join(', ')}</dd>
          </div>
        </dl>
      </Section>

      {/* Writing */}
      {posts.length > 0 && (
        <Section
          id="writing"
          title="Writing"
          action={
            <Link href="/blog" className="link text-sm">
              All posts
            </Link>
          }
        >
          <PostList posts={posts} />
        </Section>
      )}

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="mb-3 leading-relaxed text-muted">The fastest way to reach me is email.</p>
        <CopyEmail />
      </Section>
    </>
  )
}
