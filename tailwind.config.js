/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      screens: {
        'md': '700px',
        'slider': '800px'
      },
      colors: {
        'emerald': {
          700: '#087f56',
          800: '#047857'
        }
      },
      boxShadow: {
        'accordion': '0 0 32px rgba(0,0,0,0.1)',
        'slider': '0 12px 24px rgba(0,0,0,0.2)'
      }

    }
  },
  plugins: [],
}

