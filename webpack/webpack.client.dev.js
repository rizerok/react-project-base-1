const webpack = require('webpack');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
