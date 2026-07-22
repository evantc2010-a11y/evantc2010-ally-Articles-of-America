const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Date filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL dd, yyyy");
  });

  // Get articles by category
  eleventyConfig.addFilter("byCategory", (articles, category) => {
    return articles.filter(a => a.data.category === category);
  });

  // Limit filter
  eleventyConfig.addFilter("limit", (array, n) => array.slice(0, n));

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
