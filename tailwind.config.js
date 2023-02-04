/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        netflixSansBold:["NetflixSans-Bold","sans-serif"],
        netflixSansMedium:["NetflixSans-Medium","sans-serif"],
        netflixSansLight:["NetflixSans-Light","sans-serif"],
        netflixSansRegular:["NetflixSans-Regular","sans-serif"]
      },
      colors:{
        lightBlack:"rgba(0,0,0)"
      }
    },
  },
  plugins: [],
}
