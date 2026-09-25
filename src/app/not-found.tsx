import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap pt-24 sm:pt-32">
      <p className="label">
        <span className="text-accent">404</span> / not found
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">This row didn&apos;t make it through the pipeline.</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="link mt-8 inline-block font-mono text-sm">
        ← back home
      </Link>
    </div>
  )
}
