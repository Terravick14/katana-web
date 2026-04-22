/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': 'rgba(0, 0, 0, 0.9)',
        'charcoal': '#111111', 
        'gold': '#D4AF37',
        'ivory': '#F5F1E8',
        'smoke': '#9ca3af',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '14px',
      }
    },
  },
  plugins: [],
}
