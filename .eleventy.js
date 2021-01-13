const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const MarkdownIt = require("markdown-it");
const iconsprite = require("./src/utils/iconsprite.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");
  eleventyConfig.addPlugin(pluginTailwindCSS);

  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addWatchTarget("src/style.css");

  const md = new MarkdownIt();

  // Remember old renderer, if overridden, or proxy to default renderer
  var defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    var aIndex = tokens[idx].attrIndex("target");

    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"]); // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = "_blank"; // replace value of existing attr
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };

  eleventyConfig.setLibrary("md", md);

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
