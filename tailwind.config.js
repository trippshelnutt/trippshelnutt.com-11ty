module.exports = {
  content: [
    "./index.md",
    "./uses/index.md",
    "./about/index.md",
    "./resume/index.html",
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
