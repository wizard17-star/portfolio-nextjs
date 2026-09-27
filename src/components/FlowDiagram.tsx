/**
 * A small architecture diagram: boxes joined by arrows, from source (left/top) to output.
 * Boxes and connectors draw in one after another when the parent row opens.
 */
export default function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol
      className="flow-diagram flex flex-col items-stretch gap-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-3"
      aria-label={`Architecture: ${steps.join(' to ')}`}
    >
      {steps.map((step, i) => {
        const first = i === 0
        const last = i === steps.length - 1
        return (
          <li key={step} className="flex flex-col items-center sm:flex-row" style={{ '--k': i } as React.CSSProperties}>
            {i > 0 && (
              <span className="flow-link flex h-6 w-6 items-center justify-center sm:h-6 sm:w-9" aria-hidden>
                <svg viewBox="0 0 36 12" className="h-3 w-9 rotate-90 text-accent sm:rotate-0" fill="none">
                  <path d="M1 6 H31" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 3" className="flow-dash" />
                  <path d="M29 2 L34 6 L29 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
            <span
              className={`flow-box rounded-lg px-3 py-2 text-center font-mono text-[11.5px] leading-snug ${
                last
                  ? 'bg-accent text-card'
                  : first
                    ? 'border border-dashed border-accent/60 bg-card'
                    : 'border border-line bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
              }`}
            >
              {first && <span className="mb-0.5 block font-sans text-[9.5px] font-semibold uppercase tracking-wider text-accent">Source</span>}
              {last && <span className="mb-0.5 block font-sans text-[9.5px] font-semibold uppercase tracking-wider opacity-80">Output</span>}
              {step}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
