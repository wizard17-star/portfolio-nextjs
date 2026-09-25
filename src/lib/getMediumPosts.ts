import { site } from './site'

export type MediumPost = {
  title: string
  description: string
  link: string
  image: string | null
  pubDate: string
  categories: string[]
}

type RSSItem = {
  title?: string
  description?: string
  content?: string
  link?: string
  pubDate?: string
  categories?: string[]
  thumbnail?: string
}

const FEED_URL = `https://medium.com/feed/@${site.mediumUsername}`
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`

function decodeEntities(text: string) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function excerpt(html: string, length = 180) {
  const text = decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
  return text.length > length ? `${text.slice(0, length).replace(/\s+\S*$/, '')}…` : text
}

/** Server-only: fetched at build time and revalidated hourly (ISR). */
export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error(`Medium feed responded with ${res.status}`)

    const data: { items?: RSSItem[] } = await res.json()
    if (!Array.isArray(data.items)) return []

    return data.items.map((item) => {
      const content = item.content ?? ''
      const image = content.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? item.thumbnail ?? null

      return {
        title: decodeEntities(item.title ?? 'Untitled'),
        description: excerpt(item.description ?? content),
        // Strip Medium's ?source=rss tracking parameters
        link: (item.link ?? site.links.medium).split('?')[0],
        image: image || null,
        pubDate: item.pubDate ?? '',
        categories: item.categories ?? [],
      }
    })
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return []
  }
}

export function formatDate(date: string) {
  const d = new Date(date.replace(' ', 'T') + (date.includes('Z') || date.includes('+') ? '' : 'Z'))
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}
