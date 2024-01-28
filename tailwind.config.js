/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
  "./*.html",
  "./*.js"
],
  theme: {
    extend: {
      colors: {
        'button': '#D29439',
        'border-color': '#D29439',
        'nav': '#031724',
        'off-white': '#FCF4EC',
        'inner-container': '#FEF7E6'
      }
    },
  },
  plugins: [],
}

