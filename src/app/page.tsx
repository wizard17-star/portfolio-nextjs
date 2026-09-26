import type { Metadata } from 'next'
import { Briefcase, Cpu, FolderGit2, GraduationCap, History, PenLine } from 'lucide-react'
import ProjectRows from '@/components/ProjectRows'
import CertBadge from '@/components/CertBadge'
import CopyEmail from '@/components/CopyEmail'
import ThemeToggle from '@/components/ThemeToggle'
import Section from '@/components/Section'
import { formatDate, getMediumPosts } from '@/lib/getMediumPosts'
import { certifications, education, experience, projects, site, stack } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = { alternates: { canonical: '/' } }

const stagger = (i: number) => ({ '--i': i }) as React.CSSProperties

export default async function Home() {
  const posts = (await getMediumPosts()).slice(0, 3)
  const [current, ...previous] = experience
  const msc = education[0]

  return (
    <div className="mx-auto max-w-[920px] px-4 pb-16 pt-8 sm:px-8 sm:pt-12">
      {/* Intro */}
      <header className="rise" style={stagger(0)}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="mask-up text-[34px] font-bold leading-none tracking-tight sm:text-[44px]">{site.name}</h1>
            <p className="stagger mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] font-medium text-accent sm:text-[17px]">
              <span style={{ '--j': 1 } as React.CSSProperties}>Data Engineer</span>
              <span className="text-line" style={{ '--j': 2 } as React.CSSProperties} aria-hidden>|</span>
              <span style={{ '--j': 3 } as React.CSSProperties}>Researcher</span>
              <span className="text-line" style={{ '--j': 4 } as React.CSSProperties} aria-hidden>|</span>
              <span style={{ '--j': 5 } as React.CSSProperties}>M.Sc. in Data Science</span>
            </p>
            <p className="mt-1.5 text-[14px] text-mute">
              Currently at <span className="font-semibold text-ink">BMO</span> · Warsaw, Poland
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="mt-6 max-w-[760px] space-y-2 text-[17px] leading-[1.65] text-mute sm:text-[18px]">
          <p>
            Hi, I&apos;m Serhat. I&apos;m a data engineer with{' '}
            <span className="font-semibold text-ink">5 years of experience</span> and an{' '}
            <span className="font-semibold text-ink">M.Sc. in Data Science</span>. I build data pipelines, data
            warehouses and reports that help teams make better decisions.
          </p>
          <p>
            Right now I work at <span className="font-semibold text-ink">BMO</span>, closely with the{' '}
            <span className="font-semibold text-ink">QA and UAT teams</span>: I prepare the test data they need for
            their test case creation, and I support them end to end while they test.
          </p>
        </div>

        <nav className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] text-mute" aria-label="Links">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener"
            className="shine rounded-full bg-ink px-4 py-2 font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5"
          >
            Download CV
          </a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="underline-grow transition-colors hover:text-ink">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="underline-grow transition-colors hover:text-ink">
            LinkedIn
          </a>
          <CopyEmail />
          <span className="ml-auto flex items-center gap-2 text-[13px]">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to roles
          </span>
        </nav>

        <div className="mt-6">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-mute">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <CertBadge key={c.name} cert={c} />
            ))}
          </div>
        </div>
      </header>

      <div className="mt-10">
        {/* Current role */}
        <Section id="now" icon={Briefcase} title="Current role" subtitle="What I do today" index={1}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-[18px] font-bold">
              {current.role} <span className="font-normal text-mute">at</span> {current.company}
            </h3>
            <span className="font-mono text-xs text-mute">{current.period}</span>
          </div>
          <p className="mt-1 text-[14px] text-mute">Bank of Montreal · enterprise banking systems</p>
          <ul className="stagger mt-4 space-y-2 text-[15.5px] leading-relaxed">
            {current.points.map((p, j) => (
              <li key={p} className="flex gap-3" style={{ '--j': j } as React.CSSProperties}>
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          {current.tech && (
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {current.tech.map((t) => (
                <li key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[12px] font-medium text-accent">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </Section>

        {/* Latest projects */}
        <Section
          id="projects"
          icon={FolderGit2}
          title="Latest projects"
          subtitle="Newest first — click a project to see how the data flows"
          index={2}
          action={
            <span className="hidden whitespace-nowrap pt-1 font-mono text-[11px] text-mute [@media(hover:hover)]:sm:inline">
              hover to peek
            </span>
          }
        >
          <ProjectRows projects={projects} />
        </Section>

        {/* Previous experience */}
        <Section id="experience" icon={History} title="Experience" subtitle="Earlier roles — click to see details" index={3}>
          <ul className="focus-list border-t border-line">
            {previous.map((job) => (
              <li key={`${job.company}-${job.role}`} className="border-b border-line">
                <details className="group">
                  <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-baseline gap-4 py-3 text-[16px] [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="font-semibold">{job.role}</span> <span className="text-mute">{job.company}</span>
                    </span>
                    <span className="flex items-baseline gap-3 whitespace-nowrap font-mono text-xs text-mute">
                      {job.period}
                      <span className="transition-transform duration-300 group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <ul className="space-y-1 pb-3 text-[14.5px] leading-relaxed text-mute">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </Section>

        {/* Technologies */}
        <Section id="stack" icon={Cpu} title="Technologies" subtitle="Tools I use in my daily work" index={4}>
          <ul className="stagger flex flex-wrap gap-2">
            {stack.map((t, j) => (
              <li
                key={t}
                style={{ '--j': j } as React.CSSProperties}
                className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13.5px] transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                {t}
              </li>
            ))}
          </ul>
        </Section>

        {/* Education & certifications */}
        <Section
          id="credentials"
          icon={GraduationCap}
          title="Education"
          subtitle="University degrees"
          index={5}
        >
          <div className="flex items-baseline justify-between gap-4 rounded-2xl bg-paper px-4 py-3.5">
            <p>
              <span className="text-[17px] font-semibold">{msc.degree}</span>
              <span className="block text-[13.5px] text-mute">{msc.school}, Warsaw · thesis on multimodal Transformers</span>
            </p>
            <span className="whitespace-nowrap font-mono text-xs text-mute">{msc.period}</span>
          </div>
          <div className="mt-3 px-4">
            <p className="text-[16px] font-semibold">{education[1].degree}</p>
            <p className="text-[13.5px] text-mute">
              {education[1].school}, {education[1].location}
            </p>
          </div>
        </Section>

        {/* Writing */}
        {posts.length > 0 && (
          <Section
            id="writing"
            icon={PenLine}
            title="Writing"
            subtitle="Latest articles on Medium"
            index={6}
            action={
              <a
                href={site.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-grow whitespace-nowrap pt-1 text-[13px] text-mute hover:text-ink"
              >
                All posts ↗︎
              </a>
            }
          >
            <ul className="focus-list border-t border-line">
              {posts.map((post) => (
                <li key={post.link} className="border-b border-line">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-3 text-[16px]"
                  >
                    <span className="truncate">{post.title}</span>
                    <time dateTime={post.pubDate} className="font-mono text-xs text-mute">
                      {formatDate(post.pubDate)}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      <footer className="rise mt-10 flex flex-wrap justify-between gap-2 px-1 text-[12.5px] text-mute" style={stagger(7)}>
        <span>
          © {new Date().getFullYear()} {site.name} · Data Engineer · {site.location}
        </span>
        <span>{site.languages.join(' · ')}</span>
      </footer>
    </div>
  )
}
