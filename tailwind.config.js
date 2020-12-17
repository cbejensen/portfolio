// const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: colors.blueGray[200],
        black: colors.blueGray[900],
        primary: colors.blue[500],
        orange: colors.orange,
      },
      borderWidth: {
        16: '16px',
      },
    },
    fontFamily: {
      sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
    },
  },
  // variants: {
  //   extend: {},
  // },
  // plugins: [],
}
