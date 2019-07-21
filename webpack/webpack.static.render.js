const nodeExternals = require('webpack-node-externals');
const { resolve } = require('path');
// config parts
const alias = require('./alias');
const paths = require('../paths');
const {
  jsRulesServer,
  styleRulesModulesServer,
  imageRulesServer
} = require('./rules');

module.exports = {
  name: 'compiled-sources',
  target: 'node',
  mode: 'development',
  entry: {
    'compiled-sources': resolve('scripts', 'static-render', 'uncompiled-sources.js')
  },
  output: {
    library: 'lib',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: '[name].js',
    publicPath: paths.server.static,
    path: paths.absolute.temp
  },
  resolve: {
    alias
  },
  module: {
    rules: [
      jsRulesServer,
      styleRulesModulesServer,
      imageRulesServer
    ]
  },
  externals: [nodeExternals()]
};
