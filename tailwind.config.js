/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      ink: '#101c35',
      navy: '#142746',
      blue: '#377dff',
      ice: '#eef4ff',
      muted: '#64748b'
    },
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
    boxShadow: { soft: '0 20px 70px rgba(16,28,53,.10)' }
  }},
  plugins: []
}
