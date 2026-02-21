interface MediumPost {
  title: string
  description: string
  link: string
  image: string
  pubDate: string
  categories: string[]
}

interface RSSItem {
  title: string
  description: string
  content: string
  link: string
  pubDate: string
  categories: string[]
}

interface RSSResponse {
  items: RSSItem[]
}

const MEDIUM_USERNAME = process.env.NEXT_PUBLIC_MEDIUM_USERNAME || 'serhat-aslan'
const RSS_API_URL = 'https://api.rss2json.com/v1/api.json'

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const mediumFeedUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`
    const apiUrl = `${RSS_API_URL}?rss_url=${encodeURIComponent(mediumFeedUrl)}`

    const res = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch Medium posts: ${res.statusText}`)
    }

    const data: RSSResponse = await res.json()

    if (!data.items || !Array.isArray(data.items)) {
      console.warn('No items found in Medium feed')
      return []
    }

    return data.items.map((item: RSSItem) => {
      // Extract first image from content
      const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/)
      const image = imgMatch ? imgMatch[1] : 'https://via.placeholder.com/600x300?text=No+Image'

      return {
        title: item.title || 'Untitled',
        description: (item.description || '').replace(/<[^>]+>/g, '').slice(0, 200),
        link: item.link || '#',
        image,
        pubDate: item.pubDate || new Date().toISOString(),
        categories: item.categories || [],
      }
    })
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return []
  }
}
  