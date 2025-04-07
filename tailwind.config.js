/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EB5017',
          light: '#FFECE5',
        },
        gray: {
          100: '#F9FAFB',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667185',
          600: '#475367',
          700: '#344054',
          800: '#1D2939',
          900: '#101928',
        },
      },
    },
  },
  plugins: [],
} 