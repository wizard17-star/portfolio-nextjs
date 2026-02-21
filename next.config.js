/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: '**.medium.com',
      },
    ],
  },

  // Optimization
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,

  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig