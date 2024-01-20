/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/src/assets/TN-logo-3.png')",
        'proflogo': "url('/src/assets/profile-background.jpg')",
      },
    },
  },
  plugins: [],
})

