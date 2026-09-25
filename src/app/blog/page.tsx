import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import { getMediumPosts } from '@/lib/getMediumPosts'
import { site } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles by Serhat Aslan on data engineering, Microsoft Fabric, Azure Synapse, cloud certifications and technology.',
  alternates: { canonical: '/blog' },
}

export default async function BlogPage() {
  const posts = await getMediumPosts()

  return (
    <div className="container-page py-16">
      <header className="max-w-2xl">
        <p className="section-eyebrow">Blog</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Writing</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Notes on data engineering, Microsoft Fabric and cloud — published on{' '}
          <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Medium
          </a>
          .
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.link} post={post} priority={i < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-gray-600 dark:text-gray-300">
          Articles couldn&apos;t be loaded right now.{' '}
          <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            Read them on Medium →
          </a>
        </p>
      )}
    </div>
  )
}
