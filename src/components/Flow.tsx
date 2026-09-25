/** A left-to-right data-flow diagram; steps fade in one after another when their row opens. */
export default function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-2 font-mono text-[11px] sm:text-xs" aria-label={`Data flow: ${steps.join(' to ')}`}>
      {steps.map((step, i) => (
        <li key={step} className="flow-step flex items-center" style={{ '--i': i } as React.CSSProperties}>
          {i > 0 && (
            <span className="mx-2 text-accent" aria-hidden>
              →
            </span>
          )}
          <span className="rounded border border-line bg-bg px-2 py-1">{step}</span>
        </li>
      ))}
    </ol>
  )
}
