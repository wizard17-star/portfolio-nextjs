import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.headline}`
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
          padding: '80px',
          background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#93c5fd', letterSpacing: 2 }}>serhataslan.com</div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 24 }}>{site.name}</div>
        <div style={{ fontSize: 44, fontWeight: 600, marginTop: 12, color: '#bfdbfe' }}>{site.role}</div>
        <div style={{ fontSize: 30, marginTop: 36, color: '#e2e8f0' }}>
          Azure · Data Warehousing · Power BI · Microsoft Fabric
        </div>
        <div style={{ fontSize: 26, marginTop: 16, color: '#94a3b8' }}>{site.location}</div>
      </div>
    ),
    size
  )
}
