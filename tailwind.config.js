/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode variant
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#EEF5FF',
          DEFAULT: '#0D6EFD',
          dark: '#0D6EFD',
        },
        // Add dark mode colors
        darkMode: {
          light: '#1F2937',
          DEFAULT: '#000000',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
}
