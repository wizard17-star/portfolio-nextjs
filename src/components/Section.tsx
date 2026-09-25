export default function Section({
  id,
  title,
  children,
  delay = 0,
}: {
  id?: string
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <section id={id} className="rise mt-12" style={{ '--d': `${delay}s` } as React.CSSProperties}>
      <h2 className="mb-4 text-xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}
