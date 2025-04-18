import { Suspense } from 'react'
import BlogContent from './BlogContent'

export default function BlogPageWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading blog posts...</div>}>
      <BlogContent />
    </Suspense>
  )
}
