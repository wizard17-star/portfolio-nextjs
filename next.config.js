/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn-images-1.medium.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Handy short link to share: serhataslan.com/cv
      { source: '/cv', destination: '/Resume_Serhat.pdf', permanent: false },
      { source: '/resume', destination: '/Resume_Serhat.pdf', permanent: false },
      // Everything now lives on the home page
      { source: '/about', destination: '/', permanent: false },
      { source: '/projects', destination: '/#projects', permanent: false },
      { source: '/blog', destination: '/#writing', permanent: false },
      { source: '/contact', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
