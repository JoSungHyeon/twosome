/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      wordBreak: {
        keep: 'keep-all',
      },
      screens: {
        lg: '1200px',
      },
    },
  },
  plugins: [],
};
