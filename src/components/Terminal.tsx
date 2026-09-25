import { certifications, highlights } from '@/lib/site'

const query = 'SELECT metric, value FROM serhat.career;'

const rows: [string, string][] = [
  ['years_experience', highlights[0].value],
  ['apps_integrated', highlights[1].value],
  ['dashboards_built', highlights[2].value],
  ['queries_optimized', highlights[3].value],
  ['certifications', `${certifications.length}× Microsoft`],
  ['degree', 'M.Sc. Data Science'],
]

/**
 * Hero visual: a SQL query types itself out and the "result" rows appear one by one.
 * Pure CSS animation; the full content is in the HTML for screen readers and crawlers.
 */
export default function Terminal() {
  return (
    <figure
      className="overflow-hidden rounded-2xl bg-slate-900 font-mono text-[13px] text-slate-300 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.45)] sm:text-sm"
      aria-label="Career summary as a SQL query result"
    >
      <div className="flex items-center gap-2 bg-slate-800 px-4 py-3" aria-hidden>
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-slate-500">serhat@warsaw: ~</span>
      </div>

      <div className="px-5 py-5 leading-7 sm:px-6">
        <p className="text-slate-500">-- quick facts</p>
        <p>
          <span className="typing" style={{ '--chars': query.length } as React.CSSProperties}>
            <span className="text-blue-300">SELECT</span> metric, value <span className="text-blue-300">FROM</span>{' '}
            serhat.career;
          </span>
        </p>

        <table className="mt-3 w-full border-collapse text-left">
          <thead>
            <tr className="text-slate-500">
              <th className="border-b border-slate-800 px-2 py-1.5 font-normal">metric</th>
              <th className="border-b border-slate-800 px-2 py-1.5 font-normal">value</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([metric, value], i) => (
              <tr key={metric} className="row-in" style={{ '--i': i } as React.CSSProperties}>
                <td className="border-b border-slate-800 px-2 py-1.5">{metric}</td>
                <td className="border-b border-slate-800 px-2 py-1.5 text-emerald-300">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="row-in mt-3 text-slate-500" style={{ '--i': rows.length } as React.CSSProperties}>
          {rows.length} rows · 0.02s <span className="cursor inline-block h-4 w-2 translate-y-0.5 bg-blue-300" aria-hidden />
        </p>
      </div>
    </figure>
  )
}
