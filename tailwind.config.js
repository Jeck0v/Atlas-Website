/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'mondrian-blue': '#1E40AF',
        'mondrian-yellow': '#FACC15',
        'mondrian-red': '#EF4444',
        'atlas-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
