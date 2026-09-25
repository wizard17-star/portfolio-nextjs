import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap flex flex-1 flex-col items-center justify-center py-20 text-center">
      <p className="rise font-mono text-sm text-blue-600">404 · 0 rows returned</p>
      <h1 className="rise page-title mt-3" style={{ '--d': '0.08s' } as React.CSSProperties}>
        Page not found
      </h1>
      <p className="rise mt-3 text-slate-600" style={{ '--d': '0.16s' } as React.CSSProperties}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn-primary rise mt-8" style={{ '--d': '0.24s' } as React.CSSProperties}>
        Back to home
      </Link>
    </div>
  )
}
