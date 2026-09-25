import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap pt-20 sm:pt-28">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="link mt-6 inline-block text-sm">
        Back to home
      </Link>
    </div>
  )
}
