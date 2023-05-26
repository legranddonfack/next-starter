/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)']
      },
      colors: {
        'primary': '#001E72',
        'secondary': '#09D4A5',
        'background-main': '#F5F7F9',
        'grey': '#F2F2F2',
        'grey-dark': '#6F6F6F',
        'grey-light': '#DDDDDD'
      }
    },
  },
  plugins: [],
}
