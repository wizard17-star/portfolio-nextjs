// src/app/api/medium/route.ts

import { NextResponse } from 'next/server'
import { getMediumPosts } from '@/lib/getMediumPosts'

export async function GET() {
  try {
    const posts = await getMediumPosts()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Medium posts.' }, { status: 500 })
  }
}
