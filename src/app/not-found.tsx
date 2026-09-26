import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[660px] px-6 pt-24">
      <p className="rise font-mono text-xs text-mute">404</p>
      <h1 className="rise mt-2 font-serif text-[34px] font-medium tracking-tight" style={{ '--i': 1 } as React.CSSProperties}>
        This page doesn&apos;t exist.
      </h1>
      <Link href="/" className="rise underline-grow mt-6 inline-block text-[14px] font-medium" style={{ '--i': 2 } as React.CSSProperties}>
        Back to the home page
      </Link>
    </div>
  )
}
