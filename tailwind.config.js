/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightGreen': '#e2fcd6',
        'darkGreen': '#14967f',
        'blue': '#095d7e',
        'midBlue': '#ccecee',
        'lightBlue': '#f1f9ff'
      }
    },
  },
  plugins: [],
}
