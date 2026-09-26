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
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 22,
            background: '#34363a',
            color: '#f6f5f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          SA
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, marginTop: 36 }}>{site.name}</div>
        <div style={{ fontSize: 42, marginTop: 14, color: '#4a8a8f' }}>Data Engineer · M.Sc. in Data Science · Warsaw</div>
        <div style={{ fontSize: 28, marginTop: 26, color: '#808184' }}>
          5 years in data engineering · Microsoft certified · Test Data Management at BMO
        </div>
      </div>
    ),
    size
  )
}
