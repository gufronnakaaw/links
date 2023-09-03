/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: 'Outfit',
        recursive: 'Recursive',
      },
      colors: {
        gray: '#e8e9e9',
      },
    },
  },
  plugins: [],
};
