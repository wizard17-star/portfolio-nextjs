import type { Metadata } from 'next'
import Link from 'next/link'
import Terminal from '@/components/Terminal'
import { site } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

export default function Home() {
  return (
    <section className="wrap grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <div>
        <p
          className="rise inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
          style={delay(0)}
        >
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to Data Engineering roles · Warsaw
        </p>

        <h1 className="rise mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl" style={delay(0.08)}>
          {site.name}
        </h1>
        <p className="rise mt-2 text-2xl font-semibold text-blue-600" style={delay(0.16)}>
          Data Engineer
        </p>
        <p className="rise mt-5 max-w-lg text-lg leading-relaxed text-slate-600" style={delay(0.24)}>
          Azure data warehouses, ETL pipelines and Power BI — 3+ years turning enterprise data into decisions. M.Sc.
          in Data Science, 2× Microsoft certified.
        </p>

        <div className="rise mt-8 flex flex-wrap gap-3" style={delay(0.32)}>
          <Link href="/projects" className="btn-primary">
            View projects <span aria-hidden>→</span>
          </Link>
          <a href={site.resume} target="_blank" rel="noopener" className="btn-secondary">
            Download CV
          </a>
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
        </div>
      </div>

      <div className="rise" style={delay(0.2)}>
        <Terminal />
      </div>
    </section>
  )
}
