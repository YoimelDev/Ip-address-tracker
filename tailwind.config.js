const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'pattern-bg': "url('src/img/pattern-bg.png')",
        'icon-arrow': "url('src/img/icon-arrow.svg')",
        'icon-location': "url('src/img/icon-location.svg')"
      }
    }
  },
  plugins: [],
}