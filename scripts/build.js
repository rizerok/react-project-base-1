const webpack = require('webpack');
const { start } = require('webpack-bundle-analyzer');
const { cleanDirs, applyProgressPlugin } = require('./utils');

const [ANALYZE] = process.argv.slice(2);

const webpackConfig = require('../webpack.config.js')(process.env.NODE_ENV || 'development');

const build = async () => {
  cleanDirs();
  const compiler = webpack(webpackConfig);
  applyProgressPlugin(compiler);

  compiler.run((err, stats) => {
    if (ANALYZE) {
      start(stats.toJson());
    }
  });
};

build();
