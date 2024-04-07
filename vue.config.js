// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/food_delivery/'  // Just the path, not the full URL
    : '/'
};
