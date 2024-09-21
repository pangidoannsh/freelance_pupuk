/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xl": "1300px"
      },
      colors: {
        'f9': '#f9f9f9',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'monts': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}