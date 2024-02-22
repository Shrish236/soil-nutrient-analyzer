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
        'homepagebg':"url('/src/assets/TN-logo-3.png')",
        'aboutusbg':"url('/src/assets/aboutus-background.jpg')",
        'mvbg':"url('/src/assets/mission-vision-bg.jpg')",
        'soiltestingbg':"url('/src/assets/soiltestingbg.jpg')",
        'contactusbg':"url('/src/assets/contactusbg.jpg')",
        'farmerregbg':"url('/src/assets/farmerregbg.png')",
        'farmerloginbg':"url('/src/assets/farmerloginbg.jpg')"
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
})

