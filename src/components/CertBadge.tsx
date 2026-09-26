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
    'group flex items-center gap-2.5 rounded-2xl border border-line bg-card py-2 pl-2 pr-3.5 transition-colors hover:border-accent/50'

  return cert.url ? (
    <a href={cert.url} target="_blank" rel="noopener noreferrer" className={cls} title={`${cert.name} — verify on Microsoft Learn`}>
      {inner}
    </a>
  ) : (
    <div className={cls} title={cert.name}>
      {inner}
    </div>
  )
}
