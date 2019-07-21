const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// config parts
const alias = require('./alias');
const paths = require('../paths');
const {
  jsRulesClient,
  styleRulesAssetsClient,
  styleRulesModulesClient,
  imageRulesClient
} = require('./rules');

const config = {
  name: 'client',
  target: 'web',
  entry: {
    bundle: ['./src/client.js']
  },
  output: {
    filename: 'bundle.js',
    path: paths.absolute.static,
    publicPath: paths.server.static,
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  resolve: {
    alias
  },
  module: {
    rules: [
      jsRulesClient,
      styleRulesAssetsClient,
      styleRulesModulesClient,
      imageRulesClient
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ManifestPlugin({
      fileName: 'manifest.json'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = config;
