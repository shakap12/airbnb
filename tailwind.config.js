/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        // right bottom left format
        'formbox':'   6px 4px 6px -4px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1),-6px 4px 6px -4px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

