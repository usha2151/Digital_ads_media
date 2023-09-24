/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'sky': '#0676df',
      'blue':'#0084ff',
      'black': '#000000',
      'dimblue':'#2f4c68',
      'white': '#FFFFFF',
      'gray': '#7f7f7f',
      'red':'#fa2b56',
      'gray-100':'#8B8B8B',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'h1': '60px',
      'h2': '48px',
      'h3': '40px',
      'h4': '30px',
      'h5': '24px',
      'h6': '14px',
    },
    extend: {},
  },
  plugins: [],
}