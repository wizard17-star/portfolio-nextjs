/**
 * Hero visual: a tiny animated data pipeline that mirrors the work I do —
 * enterprise sources flowing through Data Factory into the warehouse and out to Power BI.
 */
const stages = ['Data Factory', 'Warehouse', 'Power BI']

function Track({ delay = 0 }: { delay?: number }) {
  return (
    <span className="relative mx-2 block h-px min-w-6 flex-1 overflow-hidden bg-line sm:mx-3" aria-hidden>
      <span className="packet" style={{ animationDelay: `${delay}s` }} />
      <span className="packet" style={{ animationDelay: `${delay + 1.2}s` }} />
    </span>
  )
}

export default function Pipeline() {
  return (
    <figure
      className="flex items-center font-mono text-[11px] text-muted sm:text-xs"
      aria-label="Data pipeline: SAP, Salesforce and Dynamics flow through Azure Data Factory into the data warehouse and on to Power BI"
    >
      <span className="flex shrink-0 flex-col gap-1 leading-none">
        <span>SAP</span>
        <span>Salesforce</span>
        <span>Dynamics</span>
      </span>
      {stages.map((stage, i) => (
        <span key={stage} className="flex flex-1 items-center">
          <Track delay={i * 0.4} />
          <span className="shrink-0 rounded border border-line px-2 py-1 text-fg">{stage}</span>
        </span>
      ))}
    </figure>
  )
}
