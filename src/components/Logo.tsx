/**
 * The site mark: three data nodes joined into a flowing "S" — a small nod to pipelines.
 * Uses the theme accent so it follows light/dark mode.
 */
export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Serhat Aslan logo">
      <rect width="64" height="64" rx="16" style={{ fill: 'rgb(var(--accent))' }} />
      <path
        d="M44 18 H26 a8 8 0 0 0 0 16 h12 a8 8 0 0 1 0 16 H20"
        fill="none"
        stroke="#fff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="18" r="5" fill="#fff" />
      <circle cx="32" cy="34" r="4" fill="#fff" />
      <circle cx="20" cy="50" r="5" fill="#fff" />
    </svg>
  )
}
