const pluginTailwindCSS = require('eleventy-plugin-tailwindcss')
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPlugin(pluginTailwindCSS)
}
