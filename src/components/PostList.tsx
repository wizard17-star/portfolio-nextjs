import { formatDate, type MediumPost } from '@/lib/getMediumPosts'

export default function PostList({ posts }: { posts: MediumPost[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {posts.map((post) => (
        <li key={post.link}>
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="group flex gap-6 py-4">
            <time dateTime={post.pubDate} className="chip w-24 shrink-0 pt-0.5">
              {formatDate(post.pubDate)}
            </time>
            <span className="transition-colors group-hover:text-accent">
              {post.title}
              <span className="ml-1 font-mono text-sm text-muted group-hover:text-accent">↗︎</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
