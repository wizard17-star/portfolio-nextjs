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
          padding: '90px',
          background: '#f6f5f1',
          color: '#34363a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 18, color: '#4a8a8f', fontFamily: 'sans-serif' }}>
          Data Engineer · M.Sc. in Data Science
        </div>
        <div style={{ fontSize: 28, marginTop: 30, color: '#73736f', fontFamily: 'sans-serif' }}>
          Azure · Data Warehousing · Power BI · Microsoft Fabric — Warsaw
        </div>
      </div>
    ),
    size
  )
}
