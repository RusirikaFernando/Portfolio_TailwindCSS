/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontFamily:{
      nuntio:['Nunito','sans-serif']
    }
  },
  plugins: [],
}

