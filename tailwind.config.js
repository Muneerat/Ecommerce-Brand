/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
          primary: {
            light: '#EEF5FF',
            DEFAULT: '#0D6EFD',
            dark: '#0D6EFD',
          }
      }
    },
  },
  plugins: [],
}

