import type { Metadata } from 'next'
import ProjectRows from '@/components/ProjectRows'
import CertBadge from '@/components/CertBadge'
import CopyEmail from '@/components/CopyEmail'
import ThemeToggle from '@/components/ThemeToggle'
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
    <div className="mx-auto max-w-[920px] px-5 pb-16 pt-8 sm:px-10 sm:pt-12">
      {/* Header */}
      <header className="rise flex items-start justify-between gap-4" style={stagger(0)}>
        <div>
          <h1 className="text-[40px] font-bold leading-none tracking-tight sm:text-[50px]">{site.name}</h1>
          <p className="mt-3 text-[17px] font-medium text-accent sm:text-[19px]">Data Engineer · Warsaw</p>
        </div>
        <ThemeToggle />
      </header>

      <p className="rise mt-6 max-w-[720px] text-[17px] leading-[1.75] text-mute sm:text-[18px]" style={stagger(1)}>
        I&apos;m a data engineer with <span className="font-semibold text-ink">5 years of experience</span> turning
        scattered business data into reliable pipelines, well-modelled warehouses and reports teams can trust. I hold an{' '}
        <span className="font-semibold text-ink">M.Sc. in Data Science</span> and currently support QA and UAT teams at
        BMO.
      </p>

      <div className="rise mt-5" style={stagger(2)}>
        <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-mute">Technologies I work with</p>
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {stack.map((t) => (
            <li key={t} className="rounded-full border border-line bg-card px-3 py-1 text-[13px]">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <nav className="rise mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-mute" style={stagger(2)} aria-label="Links">
        <a href={site.resume} target="_blank" rel="noopener" className="underline-grow font-medium text-ink">
          Resume
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

      {/* Current role */}
      <section className="rise mt-12" style={stagger(4)} aria-labelledby="now">
        <h2 id="now" className="label">
          Currently
        </h2>
        <article className="mt-2 rounded-2xl border border-line bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-[18px] font-bold">
              {current.role} <span className="font-normal text-mute">at</span> {current.company}
            </h3>
            <span className="font-mono text-xs text-mute">{current.period}</span>
          </div>
          <p className="mt-1 text-[14px] text-mute">Bank of Montreal · enterprise banking systems</p>
          <ul className="mt-3 space-y-1.5 text-[15.5px] leading-relaxed">
            {current.points.map((p) => (
              <li key={p} className="flex gap-2.5">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          {current.tech && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {current.tech.map((t) => (
                <li key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[12px] font-medium text-accent">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>

      {/* Latest projects */}
      <section className="rise mt-12" style={stagger(5)} aria-labelledby="projects">
        <div className="mb-1.5 flex items-baseline justify-between">
          <h2 id="projects" className="label">
            Latest projects
          </h2>
          <span className="hidden font-mono text-[11.5px] text-mute [@media(hover:hover)]:inline">hover to peek · click to open</span>
        </div>
        <ProjectRows projects={projects} />
      </section>

      {/* Previous experience */}
      <section className="rise mt-12" style={stagger(6)} aria-labelledby="experience">
        <h2 id="experience" className="label mb-1.5">
          Previously
        </h2>
        <ul className="focus-list border-t border-line">
          {previous.map((job) => (
            <li key={`${job.company}-${job.role}`} className="border-b border-line">
              <details className="group">
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-baseline gap-4 py-3 text-[16px] [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="font-medium">{job.role}</span> <span className="text-mute">{job.company}</span>
                  </span>
                  <span className="whitespace-nowrap font-mono text-xs text-mute">{job.period}</span>
                </summary>
                <ul className="space-y-1 pb-3 text-[14px] leading-relaxed text-mute">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </section>

      {/* Education & certifications */}
      <section className="rise mt-12" style={stagger(7)} aria-labelledby="credentials">
        <h2 id="credentials" className="label">
          Education & certifications
        </h2>
        <div className="mt-2 flex items-baseline justify-between gap-4 border-y border-line py-3">
          <p>
            <span className="text-[18px] font-semibold">{msc.degree}</span>
            <span className="block text-[13.5px] text-mute">{msc.school}, Warsaw · thesis on multimodal Transformers</span>
          </p>
          <span className="whitespace-nowrap font-mono text-xs text-mute">{msc.period}</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {certifications.map((c, i) => (
            <CertBadge key={c.name} cert={c} index={i} />
          ))}
        </div>
      </section>

      {/* Writing */}
      {posts.length > 0 && (
        <section className="rise mt-12" style={stagger(8)} aria-labelledby="writing">
          <div className="mb-1.5 flex items-baseline justify-between">
            <h2 id="writing" className="label">
              Writing
            </h2>
            <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className="underline-grow text-[13px] text-mute hover:text-ink">
              All on Medium ↗︎
            </a>
          </div>
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
        </section>
      )}

      <footer className="rise mt-12 flex flex-wrap justify-between gap-2 text-[12.5px] text-mute" style={stagger(9)}>
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </span>
        <span>{site.languages.join(' · ')}</span>
      </footer>
    </div>
  )
}
