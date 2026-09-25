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
    <div className="wrap max-w-4xl py-10 sm:py-14">
      <header className="rise">
        <h1 className="page-title">Writing</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">
          Notes on data engineering, Microsoft Fabric and cloud, in English and Turkish — published on{' '}
          <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className="link">
            Medium
          </a>
          .
        </p>
      </header>

      <div className="rise mt-8" style={{ '--d': '0.1s' } as React.CSSProperties}>
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="card text-slate-600">
            Articles couldn&apos;t be loaded right now.{' '}
            <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className="link">
              Read them on Medium →
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
