/** @type {import('tailwindcss').Config} */


import tailwindScrollbar from 'tailwind-scrollbar';


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter','sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar],
}