import type { Experience } from '@/lib/site'

/**
 * Career path as a vertical timeline, newest first. The accent line fills as the
 * section scrolls into view (CSS scroll-driven; fully drawn where unsupported).
 */
export default function ExperienceTimeline({ jobs }: { jobs: Experience[] }) {
  return (
    <ol className="relative ml-2">
      {/* Track + animated fill */}
      <span className="absolute bottom-3 left-[5px] top-3 w-0.5 rounded bg-line" aria-hidden />
      <span className="timeline-fill absolute bottom-3 left-[5px] top-3 w-0.5 origin-top rounded bg-accent" aria-hidden />

      {jobs.map((job, i) => {
        const current = i === 0
        return (
          <li key={`${job.company}-${job.role}`} className="relative pb-6 pl-8 last:pb-0">
            <span
              className={`absolute left-0 top-[7px] flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-card ${
                current ? 'bg-accent' : 'border-2 border-accent bg-card'
              }`}
              aria-hidden
            >
              {current && <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-40" />}
            </span>

            <details className="group">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <p className="flex flex-wrap items-center gap-2 font-mono text-xs text-mute">
                  {job.period}
                  {current && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 font-sans text-[11px] font-semibold text-accent">
                      Now
                    </span>
                  )}
                </p>
                <div className="mt-1 flex items-baseline justify-between gap-4">
                  <h3 className="text-[16.5px] font-semibold">
                    {job.role} <span className="font-normal text-mute">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-mute transition-transform duration-300 group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </div>
                <p className="mt-0.5 text-[14px] text-mute">{job.summary}</p>
              </summary>
              <ul className="mt-2.5 space-y-1.5 border-l-2 border-line pl-4 text-[14.5px] leading-relaxed">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </details>
          </li>
        )
      })}
    </ol>
  )
}
