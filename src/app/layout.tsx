import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { IBM_Plex_Mono, Newsreader, Schibsted_Grotesk } from 'next/font/google'
import { site, experience } from '@/lib/site'

const sans = Schibsted_Grotesk({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-sans' })
const serif = Newsreader({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-serif', style: ['normal', 'italic'] })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.headline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'Data Engineer',
    'Azure Data Factory',
    'Data Warehouse',
    'Power BI',
    'Microsoft Fabric',
    'ETL',
    'SQL Server',
    'Warsaw',
    'Poland',
    site.name,
  ],
  openGraph: {
    type: 'profile',
    siteName: site.name,
    title: `${site.name} | ${site.headline}`,
    description: site.description,
    locale: 'en_US',
    firstName: 'Serhat',
    lastName: 'Aslan',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.headline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbfa' },
    { media: '(prefers-color-scheme: dark)', color: '#10100f' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  worksFor: { '@type': 'Organization', name: experience[0].company },
  address: { '@type': 'PostalAddress', addressLocality: 'Warsaw', addressCountry: 'PL' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Polish-Japanese Academy of Information Technology' },
    { '@type': 'CollegeOrUniversity', name: 'Çukurova University' },
  ],
  knowsAbout: ['Data Engineering', 'Azure Data Factory', 'Data Warehousing', 'Power BI', 'Microsoft Fabric', 'SQL'],
  sameAs: [site.links.linkedin, site.links.github, site.links.medium],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <main id="content">{children}</main>

        {/* Cookie-free analytics: no consent banner needed under GDPR */}
        <Analytics />
      </body>
    </html>
  )
}
