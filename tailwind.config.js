/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'famil':[ 'Hind Madurai'],
      'famil2':['Open Sans'],
    },
    extend: {
      colors: {
        'red': '#e31e52',
        'satu':'#fd656a',
        'dua': '#fec780',
        'abu': '#8d8d8d',
      },
      gridTemplateColumns: {
        // Simple 2 column grid
        'new': '3fr 1fr',
        'new2':'1fr 1fr',
        'new3':'1.5fr 1fr 1fr 1fr 1fr',
      },
    },
  },
  plugins: [],
}
