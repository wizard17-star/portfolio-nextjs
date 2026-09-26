import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: token('paper'),
        ink: token('ink'),
        mute: token('mute'),
        line: token('line'),
        accent: token('accent'),
        card: token('card'),
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}

export default config
