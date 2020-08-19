const withOptimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    return config;
  },
};

module.exports = withOptimizedImages({
  imageTrace: {
    color: "#013f5d",
  },

  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");
    return config;
  },
});
