const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { style: styleRegExp } = require('./regexp-exts');
const { styles: assetsPath } = require('../alias');
// css-loader conventions
const localIdentName = process.env.NODE_ENV === 'development'
  ? '[path][name]-[local]'
  : '[hash:base64:8]';
const localsConvention = 'camelCase';

// Loaders
const MiniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    hmr: process.env.NODE_ENV === 'development'
  }
};
const cssLoaderOptionsBase = {
  sourceMap: true,
  importLoaders: 2
};
const sassLoader = {
  loader: 'sass-loader'
};
const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true
  }
};

// Rules
const styleRulesAssetsClient = {
  test: styleRegExp,
  include: assetsPath,
  use: [
    MiniCssExtractPluginLoader,
    {
      loader: 'css-loader',
      options: { ...cssLoaderOptionsBase }
    },
    postCssLoader,
    sassLoader
  ]
};

const styleRulesModulesClient = {
  test: styleRegExp,
  exclude: assetsPath,
  use: [
    MiniCssExtractPluginLoader,
    {
      loader: 'css-loader',
      options: {
        ...cssLoaderOptionsBase,
        modules: { localIdentName },
        localsConvention
      }
    },
    postCssLoader,
    sassLoader
  ]
};

const styleRulesModulesServer = {
  test: styleRegExp,
  exclude: assetsPath,
  use: [
    {
      loader: 'css-loader',
      options: {
        ...cssLoaderOptionsBase,
        modules: { localIdentName },
        localsConvention,
        onlyLocals: true
      }
    },
    postCssLoader,
    sassLoader
  ]
};

module.exports = {
  styleRulesAssetsClient,
  styleRulesModulesClient,
  styleRulesModulesServer
};
