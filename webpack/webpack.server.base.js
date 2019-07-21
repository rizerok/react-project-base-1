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
  name: 'server',
  target: 'node',
  mode: process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production',
  entry: {
    server: resolve('src', 'server.js')
  },
  output: {
    filename: '[name].js',
    publicPath: paths.server.static,
    path: paths.absolute.server
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
