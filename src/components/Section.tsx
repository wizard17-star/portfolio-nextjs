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
  highlight = false,
  children,
}: {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  action?: React.ReactNode
  index: number
  highlight?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`rise reveal group/section mt-8 scroll-mt-20 rounded-3xl${highlight ? ' glow-border' : ''} border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)] sm:p-7`}
      style={{ '--i': index } as React.CSSProperties}
    >
      <header className="mb-5 flex items-start justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-500 ease-out group-hover/section:-rotate-6 group-hover/section:scale-110" aria-hidden>
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
