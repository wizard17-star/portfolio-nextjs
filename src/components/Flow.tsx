/** How data moves through a project, left to right. */
export default function Flow({ steps }: { steps: string[] }) {
  return (
    <ol
      className="flex flex-wrap items-center gap-y-2 rounded-xl bg-slate-900 px-4 py-3 font-mono text-xs text-slate-300"
      aria-label={`Data flow: ${steps.join(' to ')}`}
    >
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          {i > 0 && (
            <span className="mx-2 text-blue-400" aria-hidden>
              →
            </span>
          )}
          {step}
        </li>
      ))}
    </ol>
  )
}
