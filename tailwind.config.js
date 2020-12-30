// const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: ["./**/*.html", "./**/*.11ty.js"],
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "header-box-start": "var(--color-header-box-start)",
        "header-box-end": "var(--color-header-box-end)",
        "profile-border": "var(--color-profile-border)",
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
      margin: ["first", "last", "first-type"],
    },
  },
  plugins: [
    // `first-of-type` variant
    // <div class="first-type:mt-0">
    // https://github.com/tailwindlabs/tailwindcss/discussions/2483
    plugin(function ({ addVariant, e }) {
      addVariant("first-type", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-type${separator}${className}`)}:first-of-type`;
        });
      });
    }),
  ],
};
