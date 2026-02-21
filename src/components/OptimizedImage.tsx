import Image from 'next/image'
import React from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

/**
 * Optimized Image component using Next.js Image
 * Automatically handles responsive images, lazy loading, and format optimization
 */
export function OptimizedImage({
  src,
  alt,
  width = 600,
  height = 400,
  className = '',
  priority = false,
  sizes,
}: OptimizedImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        className="w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        quality={80}
      />
    </div>
  )
}

interface ProjectImageProps {
  src: string
  alt: string
  title: string
}

/**
 * Project thumbnail image component with fallback
 */
export function ProjectImage({ src, alt, title }: ProjectImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt || title}
      width={400}
      height={300}
      className="mb-4 aspect-video"
    />
  )
}
