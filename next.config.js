const { withPlugins } = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

// next.js configuration
const nextConfig = {
  env: {
    STRIPE_PUBLIC_KEY: "pk_test_jUF17liArLILT9A6DPgT3ssN00bgVqYJSu",
    API_URL: "https://pickbazar-api-mh8uionih.vercel.app/shop/graphql",
  },
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = withPlugins(
  [withCSS, withOptimizedImages, withFonts],
  nextConfig
);
