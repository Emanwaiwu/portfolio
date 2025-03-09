/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      main: ['Uncut Sans'],
      sub:['VT323'],
      logo:['Monoska']
    },
    screens: {
      sm: { max: "767px" },
      smm: { min: "426px", max: "765px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1439px" },
      xl: { min: "1440px" },
    },
    extend: {
      colors: {
        grey:'#E2E2E4',
        blue:'#2001FF',
        text: '#181818',
        dark_grey: '#302C26',
        text_grey: '#8C8C8E',
        light_grey:'#D9D9D9'
      }
    },
  },
  plugins: [],
}