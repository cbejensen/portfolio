const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(pluginTailwindCSS);

  eleventyConfig.addShortcode("paragraphs", (paragraphs) =>
    paragraphs
      .split("\n")
      .filter(Boolean)
      .map((paragraph) => /*html*/ `<p class="mb-4 last:mb-0">${paragraph}</p>`)
      .join("")
  );
  // eleventyConfig.addShortcode('sections' , ())
  return {
    dir: {
      input: "./src",
      output: "build",
    },
  };
};
