import type { Metadata } from 'next'
import PostList from '@/components/PostList'
import { getMediumPosts } from '@/lib/getMediumPosts'
import { site } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Articles by Serhat Aslan on data engineering, Microsoft Fabric, Azure Synapse, cloud certifications and technology.',
  alternates: { canonical: '/blog' },
}

export default async function BlogPage() {
  const posts = await getMediumPosts()

  return (
    <div className="wrap pt-16 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-3 leading-relaxed text-muted">
        Notes on data engineering, Microsoft Fabric and cloud, in English and Turkish — published on{' '}
        <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className="link text-black">
          Medium
       </a>
        .
      </p>

      <div className="mt-10">
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="text-muted">
            Articles couldn&apos;t be loaded right now.{' '}
            <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className="link text-black">
              Read them on Medium
           </a>
          </p>
        )}
      </div>
    </div>
  )
}
