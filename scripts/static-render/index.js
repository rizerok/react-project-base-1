/* eslint no-console: "off" */
const { resolve } = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const webpackConfig = require('../../webpack.config.js')(process.env.NODE_ENV || 'development');
const webpackStaticRender = require('../../webpack/webpack.static.render.js');

const paths = require('../../paths');

rimraf.sync(paths.dirNames.public);
rimraf.sync(paths.dirNames.server);
rimraf.sync(paths.dirNames.temp);

const [clientConfig] = webpackConfig;

const compilerPromise = (name, compiler) => new Promise((resolve, reject) => {
  compiler.hooks.compile.tap(name, () => {
    console.log(`[${name}] Compiling `);
  });
  compiler.hooks.done.tap(name, (stats) => {
    if (!stats.hasErrors()) {
      return resolve();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return reject(`Failed to compile ${name}`);
  });
});

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
  const clientCompiler = webpack(clientConfig);
  const staticRenderCompiler = webpack(webpackStaticRender);

  await runCompiler('client', clientCompiler);
  await runCompiler('static-render', staticRenderCompiler);

  // eslint-disable-next-line global-require
  require('./pages-render')();

  rimraf.sync(resolve('temp'));
};

run();
