const { DEFAULT_STATS } = require('webpack-dev-server');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors:{
        primary:"#6153CD",
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}

