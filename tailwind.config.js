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
        bg: colors.gray[200],
        black: colors.gray[900],
        primary: "var(--color-primary)",
        profileBorder: "var(--color-profile-border)",
      },
      borderWidth: {
        16: "16px",
      },
    },
    fontFamily: {
      sans: ["Avenir Next", "Helvetica Neue", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  // darkMode: false, // or 'media' or 'class'
  // plugins: [],
};
