module.exports = {
  content: [
    "./index.html",
    "./uses/index.html",
    "./about/index.html",
    "./resume/index.html",
    "./resume/printer-friendly.html",
    "./_includes/layout.njk",
  ],
  theme: {
    opacity: {
      mask: ".03",
    },
    zIndex: {
      "-1": -1,
    },
    extend: {
      colors: {
        linkedin: "#0077B5",
        twitter: "#1da1f2",
        github: "#6e5494",
      },
    },
  },
  variants: {},
  plugins: [],
};
