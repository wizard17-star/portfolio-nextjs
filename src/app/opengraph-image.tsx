import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} – ${site.headline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Fetch a Plus Jakarta Sans weight as TTF so the card matches the site. Falls back to the default font. */
async function loadFont(weight: number, text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}&text=${encodeURIComponent(text)}`, {
        // An old user agent makes Google Fonts return TTF/WOFF (not WOFF2), which ImageResponse can read
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30' },
      })
    ).text()
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1]
    return url ? await (await fetch(url)).arrayBuffer() : null
  } catch {
    return null
  }
}

const LINE_2 = 'Data Engineer · M.Sc. in Data Science'
const LINE_3 = '5 years in data engineering · Microsoft certified · Warsaw'

export default async function OpengraphImage() {
  const [bold, regular] = await Promise.all([loadFont(800, `SA${site.name}`), loadFont(500, LINE_2 + LINE_3)])
  const fonts = [
    ...(bold ? [{ name: 'Jakarta', data: bold, weight: 800 as const, style: 'normal' as const }] : []),
    ...(regular ? [{ name: 'Jakarta', data: regular, weight: 500 as const, style: 'normal' as const }] : []),
  ]

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
          fontFamily: 'Jakarta, sans-serif',
          fontWeight: 500,
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
            fontSize: 42,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          SA
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -4, marginTop: 40 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 10, color: '#4a8a8f' }}>{LINE_2}</div>
        <div style={{ fontSize: 28, marginTop: 24, color: '#808184' }}>{LINE_3}</div>
      </div>
    ),
    // Passing an empty list would fail the build, so only pass fonts that loaded
    fonts.length ? { ...size, fonts } : size
  )
}
