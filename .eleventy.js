const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const md = require("markdown-it")({});
const iconsprite = require("./src/utils/iconsprite.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");
  eleventyConfig.addPlugin(pluginTailwindCSS);

  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addWatchTarget("src/style.css");

  eleventyConfig.addFilter("md", (string) => md.render(string));

  eleventyConfig.addFilter("date", (string) => {
    if (!string || !string.length) {
      return "";
    }
    const [year, month] = string.split("-");
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(year, month - 1));
  });

  eleventyConfig.addShortcode(
    "icon",
    (
      name
    ) => `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
  <use xlink:href="#icon-${name}"></use>
</svg>`
  );
  eleventyConfig.addLiquidShortcode("iconsprite", iconsprite);

  return {
    dir: {
      input: "./src",
      output: "build",
    },
  };
};
