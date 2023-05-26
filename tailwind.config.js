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
        'secondary-light': '#09F4BD',
        'secondary-dark': '#08AA84',
        'background-main': '#F5F7F9',
        'grey': '#DDDDDD',
        'grey-dark': '#6F6F6F',
        'grey-light': '#F2F2F2'
      },
      fontSize: {
        sm: '10px',
        medium: '15px',
        xl: '25px',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}
