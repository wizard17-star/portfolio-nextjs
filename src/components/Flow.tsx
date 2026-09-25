/** How data moves through a project, left to right. */
export default function Flow({ steps }: { steps: string[] }) {
  return (
    <p className="text-sm text-muted" aria-label={`Data flow: ${steps.join(' to ')}`}>
      {steps.map((step, i) => (
        <span key={step}>
          {i > 0 && <span aria-hidden> → </span>}
          <span className="text-black">{step}</span>
        </span>
      ))}
    </p>
  )
}
