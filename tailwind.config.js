/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        acid: '#c8ff00',
        charcoal: '#0a0a0a',
        offwhite: '#f0ece3',
        muted: '#6b6b6b',
      },
    },
  },
  plugins: [],
}
