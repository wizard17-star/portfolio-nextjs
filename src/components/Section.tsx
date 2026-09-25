export default function Section({
  id,
  index,
  title,
  children,
  action,
}: {
  id?: string
  index: string
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <section id={id} className="wrap reveal mt-24">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="label">
          <span className="text-accent">{index}</span> / {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  )
}
