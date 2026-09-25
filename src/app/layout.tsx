import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import { site, experience } from '@/lib/site'

const inter = Inter({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-inter' })

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
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>

        {process.env.NODE_ENV === 'production' && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
