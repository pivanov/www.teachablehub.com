const path = require('path');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const nextConfig = {
  target: 'serverless',
  sassOptions: {
    includePaths: [path.join(__dirname, './src')],
  },
};

module.exports = withPlugins(
  [
    withFonts,
    withImages,
    withCSS,
    withSass,
    nextConfig,
  ]
);
