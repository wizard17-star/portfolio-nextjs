import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-32 text-center">
      <p className="section-eyebrow">404</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  )
}
