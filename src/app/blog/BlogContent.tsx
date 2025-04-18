'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Post = {
  title: string
  description: string
  link: string
  image?: string
  pubDate: string
  categories: string[]
}

export default function BlogContent() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/medium')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <section className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Blog Posts
        </h1>

        {/* Featured Post - Now Compact */}
        {!loading && featuredPost && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md flex flex-col sm:flex-row gap-4 bg-white dark:bg-gray-800"
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full sm:w-1/2 h-56 object-cover sm:rounded-l-xl"
            />
            <div className="p-5 flex flex-col justify-between sm:w-1/2">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                  {featuredPost.description}
                </p>
              </div>
              <Link
                href={featuredPost.link}
                target="_blank"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2"
              >
                Read on Medium →
              </Link>
            </div>
          </motion.div>
        )}

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800 h-60"
              ></div>
            ))}
          </div>
        )}

        {/* Other Posts */}
        {!loading && (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherPosts.map((post, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-[160px]">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 mb-2">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>
                      {new Date(post.pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={post.link}
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
