/**
 * Types for the Portfolio Application
 */

export interface MediumPost {
  title: string
  description: string
  link: string
  image: string
  pubDate: string
  categories: string[]
}

export interface Project {
  title: string
  description: string
  company?: string
  technologies?: string[]
  github?: string
  link?: string
  image?: string
}

export interface Skill {
  category: string
  items: string[]
  proficiency?: 'beginner' | 'intermediate' | 'advanced'
}

export interface Experience {
  role: string
  company: string
  date: string
  description: string
  technologies?: string[]
}

export interface ContactForm {
  name: string
  email: string
  message: string
}
