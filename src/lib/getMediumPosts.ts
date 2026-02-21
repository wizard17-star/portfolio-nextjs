export async function getMediumPosts() {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@serhat-aslan')
    const data = await res.json()
  
    return data.items.map((item: any) => {
      // content içinden ilk görseli bul
      const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/)
      const image = imgMatch ? imgMatch[1] : 'https://via.placeholder.com/600x300?text=No+Image'
  
      return {
        title: item.title,
        description: item.description.replace(/<[^>]+>/g, '').slice(0, 200),
        link: item.link,
        image: image, // artık gerçek görsel
        pubDate: item.pubDate,
        categories: item.categories,
      }
    })
  }
  