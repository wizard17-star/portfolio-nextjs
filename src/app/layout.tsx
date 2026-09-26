import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { certifications, site } from '@/lib/site'

const sans = Plus_Jakarta_Sans({ subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-sans' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-mono' })

const title = `${site.name} – ${site.headline}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  keywords: [
    site.name,
    'Serhat Aslan Data Engineer',
    'Data Engineer Warsaw',
    'Data Engineer Poland',
    'Data Engineer',
    'Data Warehouse',
    'ETL',
    'Azure Data Factory',
    'Microsoft Fabric',
    'Power BI',
    'SQL',
    'Test Data Management',
    'M.Sc. Data Science',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: site.name,
    title,
    description: site.description,
    locale: 'en_US',
    firstName: 'Serhat',
    lastName: 'Aslan',
  },
  twitter: { card: 'summary_large_image', title, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f5f1' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2124' },
  ],
}

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`

// Structured data: lets Google show the right name, site name and profile details
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: ['Serhat Aslan Portfolio', 'serhataslan.com'],
      inLanguage: 'en',
      publisher: { '@id': `${site.url}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/#profile`,
      url: site.url,
      name: `${site.name} – ${site.headline}`,
      isPartOf: { '@id': `${site.url}/#website` },
      mainEntity: { '@id': `${site.url}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.name,
      alternateName: ['Serhat ASLAN', 'Serhat Aslan Data Engineer'],
      givenName: 'Serhat',
      familyName: 'Aslan',
      url: site.url,
      image: `${site.url}/icon-512.png`,
      email: `mailto:${site.email}`,
      jobTitle: 'Data Engineer',
      description: site.description,
      worksFor: { '@type': 'Organization', name: 'BMO (Bank of Montreal)' },
      address: { '@type': 'PostalAddress', addressLocality: 'Warsaw', addressCountry: 'PL' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Polish-Japanese Academy of Information Technology' },
        { '@type': 'CollegeOrUniversity', name: 'Çukurova University' },
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'M.Sc. in Data Science' },
        ...certifications.map((c) => ({
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: c.name,
          recognizedBy: { '@type': 'Organization', name: c.issuer },
          ...(c.url ? { url: c.url } : {}),
        })),
      ],
      knowsAbout: ['Data Engineering', 'Data Warehousing', 'ETL', 'SQL', 'Python', 'Power BI', 'Azure Data Factory', 'Microsoft Fabric', 'Test Data Management'],
      knowsLanguage: ['Turkish', 'English', 'Greek', 'Polish'],
      sameAs: [site.links.linkedin, site.links.github, site.links.medium],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* Apply the saved or system theme before paint to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
