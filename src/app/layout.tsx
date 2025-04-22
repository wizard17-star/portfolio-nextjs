import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Serhat Aslan | Portfolio',
  description: 'Personal website and blog of Serhat Aslan, Data Engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Serhat Aslan | Portfolio</title>
        <meta name="description" content="Personal website and blog of Serhat Aslan, Data Engineer" />

        {/* Open Graph */}
        <meta property="og:title" content="Serhat Aslan | Portfolio" />
        <meta property="og:description" content="Personal website and blog of Serhat Aslan, Data Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.serhataslan.com" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serhat Aslan | Portfolio" />
        <meta name="twitter:description" content="Personal website and blog of Serhat Aslan, Data Engineer" />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
