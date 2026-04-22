/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#1F4E6D',
        'charcoal': '#143851', // Adjusted charcoal to fit the blue theme
        'gold': '#D4AF37',
        'ivory': '#F5F1E8',
        'smoke': '#2A2A2E',
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
