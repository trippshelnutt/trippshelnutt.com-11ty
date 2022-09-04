module.exports = function (eleventyConfig) {
  // eleventy will not watch files in .gitignore if this is true
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget(".tmp/css/custom.css");
  eleventyConfig.addWatchTarget(".tmp/css/resume.css");

  eleventyConfig.addPassthroughCopy({
    ".tmp/css/custom.css": "css/custom.css",
  });
  eleventyConfig.addPassthroughCopy({
    ".tmp/css/resume.css": "css/resume.css",
  });

  eleventyConfig.addPassthroughCopy("css/fontawesome.min.css");
  eleventyConfig.addPassthroughCopy("css/brands.min.css");
  eleventyConfig.addPassthroughCopy("css/solid.min.css");
  eleventyConfig.addPassthroughCopy("webfonts/*");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("images/*");
  eleventyConfig.addPassthroughCopy("resume/resume-trippshelnutt.pdf");
};
