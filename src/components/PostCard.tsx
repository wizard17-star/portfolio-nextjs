import Image from 'next/image'
import { formatDate, type MediumPost } from '@/lib/getMediumPosts'

export default function PostCard({ post, priority = false }: { post: MediumPost; priority?: boolean }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500/50"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
        {post.image && (
          <Image
            src={post.image}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {post.pubDate && (
          <time dateTime={post.pubDate} className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(post.pubDate)}
          </time>
        )}
        <h3 className="mt-1 line-clamp-2 font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-600 dark:text-gray-300">{post.description}</p>
        <span className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Read on Medium <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  )
}
