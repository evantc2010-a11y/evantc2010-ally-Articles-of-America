const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL dd, yyyy");
  });

  eleventyConfig.addFilter("byCategory", (articles, category) => {
    return articles.filter(a => a.data.category === category);
  });

  eleventyConfig.addFilter("limit", (array, n) => array.slice(0, n));

  return {
    pathPrefix: "/evantc2010-ally-Articles-of-America/",
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
