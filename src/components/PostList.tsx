import { formatDate, type MediumPost } from '@/lib/getMediumPosts'

export default function PostList({ posts }: { posts: MediumPost[] }) {
  return (
    <ul className="card divide-y divide-slate-100 !p-2">
      {posts.map((post) => (
        <li key={post.link}>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 rounded-xl px-4 py-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <time dateTime={post.pubDate} className="shrink-0 text-sm text-slate-500 sm:w-28">
              {formatDate(post.pubDate)}
            </time>
            <span className="flex-1 font-medium transition-colors group-hover:text-blue-600">{post.title}</span>
            <span className="hidden text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 sm:inline" aria-hidden>
              →
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
