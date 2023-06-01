/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'web-purple': '#3A3E97',
        'btn-purple': '#686DE0',
        'light-black': '#252525'
      }
    },
  },
  plugins: [],
}