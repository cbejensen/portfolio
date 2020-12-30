// const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./**/*.html", "./**/*.11ty.js"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          DEFAULT: "var(--color-primary)",
        },
        accent: "var(--color-accent)",
        bg: colors.gray[100],
        black: colors.gray[900],
      },
      minWidth: {
        half: "50%",
      },
      borderWidth: {
        16: "16px",
      },
      flex: {
        2: "2 2 0%",
      },
    },
    fontFamily: {
      sans: ["Avenir Next", "Helvetica Neue", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      margin: ["first", "last"],
    },
  },
  // darkMode: false, // or 'media' or 'class'
  // plugins: [],
};
