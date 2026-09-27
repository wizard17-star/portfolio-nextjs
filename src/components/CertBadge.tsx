import Image from 'next/image'
import type { Certification } from '@/lib/site'

/**
 * Compact certification chip for the top of the page. Microsoft certifications use the
 * official badge artwork Microsoft provides to credential holders; others show a text chip.
 */
export default function CertBadge({ cert }: { cert: Certification }) {
  const inner = (
    <>
      {cert.badge ? (
        <Image
          src={cert.badge}
          alt=""
          width={40}
          height={40}
          unoptimized
          // Badges sit at the top of the page (mobile LCP), so load them straight away
          loading="eager"
          fetchPriority="high"
          className="h-10 w-10 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105"
        />
      ) : (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">
          ITIL
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate text-[13px] font-semibold leading-tight">{cert.short}</span>
        <span className="block text-[11.5px] text-mute">
          {cert.issuer === 'Microsoft' ? `Microsoft ${cert.kind}` : cert.kind} · {cert.issued.slice(-4)}
        </span>
      </span>
    </>
  )

  const cls =
    'group relative flex items-center gap-2.5 rounded-2xl border border-line bg-card py-2 pl-2 pr-3.5 transition-colors hover:border-accent/50 focus-visible:border-accent/50'

  // Plain-language explanation shown on hover / keyboard focus
  const tip = (
    <span
      role="tooltip"
      className="pointer-events-none absolute bottom-[calc(100%+10px)] left-0 z-40 w-72 translate-y-1 rounded-xl bg-ink px-3.5 py-2.5 text-[12.5px] leading-snug text-paper opacity-0 shadow-lg transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
    >
      {cert.explain}
      {cert.url && <span className="mt-1 block opacity-70">Click to verify on Microsoft Learn.</span>}
      <span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-ink" aria-hidden />
    </span>
  )

  return cert.url ? (
    <a href={cert.url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
      {tip}
    </a>
  ) : (
    <div className={cls} tabIndex={0}>
      {inner}
      {tip}
    </div>
  )
}
