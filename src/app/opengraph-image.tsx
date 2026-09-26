import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} – ${site.headline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background: '#f6f5f1',
          color: '#34363a',
          fontFamily: 'sans-serif',
        }}
      >
        <svg width="96" height="96" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="16" fill="#4a8a8f" />
          <path d="M44 18 H26 a8 8 0 0 0 0 16 h12 a8 8 0 0 1 0 16 H20" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="44" cy="18" r="5" fill="#fff" />
          <circle cx="32" cy="34" r="4" fill="#fff" />
          <circle cx="20" cy="50" r="5" fill="#fff" />
        </svg>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, marginTop: 36 }}>{site.name}</div>
        <div style={{ fontSize: 42, marginTop: 14, color: '#4a8a8f' }}>Data Engineer · Warsaw, Poland</div>
        <div style={{ fontSize: 28, marginTop: 26, color: '#808184' }}>
          5 years in data engineering · M.Sc. in Data Science · Microsoft certified
        </div>
      </div>
    ),
    size
  )
}
