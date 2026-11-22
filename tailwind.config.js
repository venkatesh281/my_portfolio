/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        watermark: ['Syne', 'sans-serif'],
      },
      colors: {
        paper: {
          base: '#f6f4ee',
          subtle: '#ede9de',
          card: '#ffffff',
        },
        ink: {
          primary: '#121316',
          secondary: '#525866',
          muted: '#5a606e',
        },
        cobalt: {
          DEFAULT: '#0038ff',
          dark: '#002ec7',
          light: '#e0e7ff',
        },
        graphite: {
          950: '#060910',
          900: '#080c14',
          800: '#0d1321',
          700: '#151d30',
          600: '#1e293b',
        },
      },
      transitionTimingFunction: {
        'spring-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'spring-in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
}
