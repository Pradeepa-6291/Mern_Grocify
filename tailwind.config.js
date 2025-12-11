/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grocify': {
          'green': '#00D084',
          'teal': '#00cec9',
          'orange': '#FF6B35',
          'pink': '#EC4899',
          'purple': '#8B5CF6',
          'yellow': '#FCD34D',
          'blue': '#3B82F6',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}