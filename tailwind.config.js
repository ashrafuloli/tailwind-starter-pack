/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      colors: {
        primary: '#066DE6',
      },
      fontFamily: {
        'sans': ["'DM Sans', sans-serif", "'Caveat', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
