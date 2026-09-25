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
          background: '#eef2f7',
          color: '#0f172a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 26, color: '#64748b' }}>serhataslan.com</div>
        <div style={{ fontSize: 92, fontWeight: 800, marginTop: 20 }}>{site.name}</div>
        <div style={{ fontSize: 46, fontWeight: 700, marginTop: 8, color: '#2563eb' }}>{site.role}</div>
        <div style={{ fontSize: 30, marginTop: 36, color: '#475569' }}>
          Azure · Data Warehousing · Power BI · Microsoft Fabric
        </div>
        <div style={{ fontSize: 26, marginTop: 14, color: '#64748b' }}>{site.location}</div>
      </div>
    ),
    size
  )
}
