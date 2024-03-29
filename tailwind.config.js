const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        } 
      },
      keyframes: {
        slideDown: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(0)' }},
        fadeIn: {  
          '0%': { transform:'translate-y-6', opacity: 0 },
          '100%': { transform:'translate-y-0', opacity: 1 }},
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      backgroundImage: {
        'slider-bg' : 'url("./img/slider/slider-top.png")',
      },
    },
  },
  plugins: [],
}

