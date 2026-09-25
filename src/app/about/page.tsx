import type { Metadata } from 'next'
import Section from '@/components/Section'
import { certifications, education, experience, site, skills } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Experience, education, Microsoft certifications and skills of Serhat Aslan, Data Engineer in Warsaw: Azure Data Factory, data warehousing, Power BI and Microsoft Fabric.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="wrap max-w-4xl py-10 sm:py-14">
      <header className="rise">
        <h1 className="page-title">About</h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
          I&apos;m a Data Engineer with 3+ years of experience in data engineering and business analysis. I designed
          the Azure data warehouse and ETL for 25+ applications at TEMSA, led their cloud migration and built 50+ Power
          BI dashboards. I hold an M.Sc. in Data Science from PJATK, plus Microsoft Fabric, Azure AI and ITIL certifications.
        </p>
        <a href={site.resume} target="_blank" rel="noopener" className="btn-primary mt-6">
          Download CV
        </a>
      </header>

      <Section id="experience" title="Experience" delay={0.08}>
        <ol className="relative space-y-4 border-l-2 border-slate-200 pl-6">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative">
              <span
                className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-canvas bg-blue-600"
                aria-hidden
              />
              <details className="card group transition hover:shadow-md" open={job === experience[0]}>
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-bold">
                      {job.role} <span className="font-medium text-blue-600">@ {job.company}</span>
                    </h3>
                    <span className="text-sm text-slate-500">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    {job.summary}{' '}
                    <span className="text-blue-600 group-open:hidden">Show more</span>
                  </p>
                </summary>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 marker:text-blue-600">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {job.tech && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </details>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="education" title="Education & certifications" delay={0.14}>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <div key={e.degree} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Education</p>
              <h3 className="mt-2 font-bold">{e.degree}</h3>
              <p className="mt-1 text-sm text-slate-600">{e.school}</p>
              {e.period && <p className="mt-1 text-sm text-slate-500">{e.period}</p>}
            </div>
          ))}
          {certifications.map((c) => (
            <div key={c.name} className="card flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Certification · {c.issuer}
              </p>
              <h3 className="mt-2 font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-slate-500">
                Issued {c.issued}
              </p>
              {c.credentialId && <p className="mt-1 font-mono text-xs text-slate-500">ID {c.credentialId}</p>}
              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="link mt-3 text-sm">
                  Verify credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" delay={0.2}>
        <div className="card space-y-4">
          {skills.map((s) => (
            <div key={s.group} className="sm:flex sm:gap-6">
              <h3 className="mb-2 text-sm font-semibold sm:mb-0 sm:w-44 sm:shrink-0 sm:pt-1">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="tag">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="sm:flex sm:gap-6">
            <h3 className="mb-2 text-sm font-semibold sm:mb-0 sm:w-44 sm:shrink-0 sm:pt-1">Languages</h3>
            <ul className="flex flex-wrap gap-2">
              {site.languages.map((l) => (
                <li key={l} className="tag">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
