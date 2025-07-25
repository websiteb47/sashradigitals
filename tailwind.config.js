// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Poppins', 'sans-serif'], // for body
        heading: ['Montserrat', 'Poppins', 'sans-serif'], // for headings
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
}

