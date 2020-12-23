// const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  // purge: [],
  // darkMode: false, // or 'media' or 'class'
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
      sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  // plugins: [],
};
