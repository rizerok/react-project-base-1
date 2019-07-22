/* eslint no-console: "off" */
const { resolve } = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const webpackConfig = require('../../webpack.config.js')(process.env.NODE_ENV || 'development');
const webpackStaticRender = require('../../webpack/webpack.static.render.js');

const { compilerPromise, cleanDirs } = require('../utils');

const [clientConfig] = webpackConfig;

const runCompiler = (name, compiler) => {
  const cp = compilerPromise(name, compiler);
  compiler.run((err, stats) => {
    if (err || stats.hasErrors() || stats.hasWarnings()) {
      console.log('err', err);
    }
  });
  return cp;
};

const run = async () => {
  cleanDirs();
  const clientCompiler = webpack(clientConfig);
  const staticRenderCompiler = webpack(webpackStaticRender);

  await runCompiler('client', clientCompiler);
  await runCompiler('static-render', staticRenderCompiler);

  // eslint-disable-next-line global-require
  require('./pages-render')();

  rimraf.sync(resolve('temp'));
};

run();
