const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new ImageminPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

module.exports = config;
