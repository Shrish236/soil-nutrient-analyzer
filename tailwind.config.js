/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/src/assets/TN-logo-3.png')",
        'proflogo': "url('/src/assets/profile-background.jpg')",
        'wheatbg':"url('/src/assets/wheat-bg.jpg')",
        'soilformbg':"url('/src/assets/green-farm-sky-5k.jpg')",
        'enquiryformbg':"url('/src/assets/enquiryForm.jpg')",
        'signupformbg':"url('/src/assets/signupForm.jpg')",
        'loginformbg':"url('/src/assets/loginForm.jpg')",
        'adminloginformbg':"url('/src/assets/adminlogin.jpg')",
        'soilnolinkformbg':"url('/src/assets/soilnolinkform.jpg')",
        'homepagebg':"url('/src/assets/TN-logo-3.png')"
      },
    },
  },
  plugins: [],
})

