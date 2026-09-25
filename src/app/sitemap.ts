import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  ] as const

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
