import { formatDate, type MediumPost } from '@/lib/getMediumPosts'

export default function PostList({ posts }: { posts: MediumPost[] }) {
  return (
    <ul className="divide-y divide-line border-t border-line">
      {posts.map((post) => (
        <li key={post.link}>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 py-3 sm:flex-row sm:gap-6"
          >
            <time dateTime={post.pubDate} className="meta shrink-0 sm:w-28">
              {formatDate(post.pubDate)}
            </time>
            <span className="group-hover:underline group-hover:underline-offset-4">{post.title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
