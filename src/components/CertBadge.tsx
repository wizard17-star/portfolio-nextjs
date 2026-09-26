import type { Certification } from '@/lib/site'

/** A certification rendered as a badge; links to the issuer's verification page when available. */
export default function CertBadge({ cert, index }: { cert: Certification; index: number }) {
  const body = (
    <>
      <svg viewBox="0 0 100 112" className="h-[108px] w-[98px] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-[-3deg]" aria-hidden>
        <defs>
          <linearGradient id={`g${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: 'rgb(var(--accent))', stopOpacity: 0.9 }} />
            <stop offset="1" style={{ stopColor: 'rgb(var(--accent))', stopOpacity: 0.45 }} />
          </linearGradient>
        </defs>
        {/* Rounded hexagon */}
        <path
          d="M50 4 L90 27 Q94 29 94 34 L94 78 Q94 83 90 85 L50 108 Q50 108 50 108 L10 85 Q6 83 6 78 L6 34 Q6 29 10 27 Z"
          fill={`url(#g${index})`}
        />
        <path
          d="M50 12 L84 31.5 L84 80.5 L50 100 L16 80.5 L16 31.5 Z"
          style={{ fill: 'rgb(var(--card))', stroke: 'rgb(var(--accent) / 0.35)' }}
        />
        <text x="50" y="44" textAnchor="middle" fontSize="7.5" letterSpacing="1" style={{ fill: 'rgb(var(--mute))' }} className="font-mono">
          {cert.issuer === 'Microsoft' ? 'MICROSOFT' : 'CERTIFIED'}
        </text>
        <text x="50" y="62" textAnchor="middle" fontSize="14" fontWeight="600" style={{ fill: 'rgb(var(--ink))' }} className="font-serif">
          {cert.issued.slice(-4)}
        </text>
        <rect x="19" y="71" width="62" height="12" rx="6" style={{ fill: 'rgb(var(--accent))' }} />
        <text x="50" y="79.5" textAnchor="middle" fontSize="6" fontWeight="600" letterSpacing="0.3" style={{ fill: 'rgb(var(--card))' }} className="font-sans">
          {cert.kind.toUpperCase()}
        </text>
      </svg>
      <span className="mt-2 block text-center text-[13px] font-medium leading-tight">{cert.short}</span>
      <span className="block text-center font-mono text-[11px] text-mute">
        {cert.url ? 'verify ↗︎' : cert.issued}
      </span>
    </>
  )

  return cert.url ? (
    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center" title={cert.name}>
      {body}
    </a>
  ) : (
    <div className="group flex flex-col items-center" title={cert.name}>
      {body}
    </div>
  )
}
