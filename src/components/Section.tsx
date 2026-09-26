import type { LucideIcon } from 'lucide-react'

/**
 * A clearly separated page section: its own card with an icon, title and one-line subtitle,
 * so visitors can tell at a glance where each part starts.
 */
export default function Section({
  id,
  icon: Icon,
  title,
  subtitle,
  action,
  index,
  children,
}: {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  action?: React.ReactNode
  index: number
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="rise mt-8 scroll-mt-6 rounded-3xl border border-line bg-card p-5 sm:p-7"
      style={{ '--i': index } as React.CSSProperties}
    >
      <header className="mb-5 flex items-start justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent" aria-hidden>
            <Icon size={19} strokeWidth={1.8} />
          </span>
          <div>
            <h2 id={`${id}-title`} className="text-[19px] font-bold leading-tight tracking-tight">
              {title}
            </h2>
            <p className="mt-0.5 text-[13.5px] text-mute">{subtitle}</p>
          </div>
        </div>
        {action}
      </header>
      {children}
    </section>
  )
}
