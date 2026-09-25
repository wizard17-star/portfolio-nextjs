export default function Section({
  id,
  title,
  children,
  action,
}: {
  id?: string
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <section id={id} className="wrap mt-16">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}
