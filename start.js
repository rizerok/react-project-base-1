/* eslint no-console: "off" */
const rimraf = require('rimraf');
const webpack = require('webpack');
const nodemon = require('nodemon');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const chalk = require('chalk');

rimraf.sync('./public');
rimraf.sync('./server');
rimraf.sync('./temp');

const webpackConfig = require('./webpack.config.js')(process.env.NODE_ENV || 'development');

const app = express();

const WEBPACK_PORT = 8502;

const DEVSERVER_HOST = process.env.DEVSERVER_HOST || 'http://localhost';

const logMessage = (message, level = 'info') => {
  // eslint-disable-next-line no-nested-ternary
  const color = level === 'error'
    ? 'red'
    // eslint-disable-next-line no-nested-ternary
    : level === 'warning'
      ? 'yellow'
      : level === 'info'
        ? 'blue'
        : 'white';
  console.log(`[${new Date().toISOString()}]`, chalk[color](message));
};

const compilerPromise = (name, compiler) => new Promise((resolve, reject) => {
  compiler.hooks.compile.tap(name, () => {
    logMessage(`[${name}] Compiling `);
  });
  compiler.hooks.done.tap(name, (stats) => {
    if (!stats.hasErrors()) {
      return resolve();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return reject(`Failed to compile ${name}`);
  });
});

const start = async () => {
  // get configs
  const [clientConfig, serverConfig] = webpackConfig;

  // add HMR script
  clientConfig.entry.bundle = [
    `webpack-hot-middleware/client?path=${DEVSERVER_HOST}:${WEBPACK_PORT}/__webpack_hmr`,
    ...clientConfig.entry.bundle
  ];

  // add hmr files in output
  clientConfig.output.hotUpdateMainFilename = 'updates/[hash].hot-update.json';
  clientConfig.output.hotUpdateChunkFilename = 'updates/[id].[hash].hot-update.js';

  clientConfig.output.publicPath = [`${DEVSERVER_HOST}:${WEBPACK_PORT}`, '/static/']
    .join('/')
    .replace(/([^:+])\/+/g, '$1/');

  serverConfig.output.publicPath = [`${DEVSERVER_HOST}:${WEBPACK_PORT}`, '/static/']
    .join('/')
    .replace(/([^:+])\/+/g, '$1/');

  // create compilers
  const multiCompiler = webpack([clientConfig, serverConfig]);
  // split compilers
  const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'client');
  const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'server');
  // wrap compilers in promise
  const clientPromise = compilerPromise('client', clientCompiler);
  const serverPromise = compilerPromise('server', serverCompiler);

  const watchOptions = {
    ignored: /node_modules/
  };

  // rule for express
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    return next();
  });

  // use webpack dev middleware and start compiling client
  app.use(
    webpackDevMiddleware(clientCompiler, {
      publicPath: '/public/',
      watchOptions,
      writeToDisk: true
    })
  );

  // use hmr with client compiler
  app.use(webpackHotMiddleware(clientCompiler));

  // set static path for express
  app.use(express.static('public'));

  app.listen(WEBPACK_PORT);

  // start server compiling
  serverCompiler.watch(watchOptions, (error, stats) => {
    if (!error && !stats.hasErrors()) {
      console.log(stats.toString(serverConfig.stats));
      return;
    }

    if (error) {
      logMessage(error, 'error');
    }

    if (stats.hasErrors()) {
      const info = stats.toJson();
      const errors = info.errors[0].split('\n');
      logMessage(errors[0], 'error');
      logMessage(errors[1], 'error');
      logMessage(errors[2], 'error');
    }
  });

  // wait until client and server is compiled
  try {
    await serverPromise;
    await clientPromise;
  } catch (error) {
    logMessage(error, 'error');
  }
  // NODEMON
  const script = nodemon({
    script: 'server/server.js',
    watch: 'server/server.js',
    delay: 200
  });

  script.on('restart', () => {
    logMessage('Server side app has been restarted.', 'warning');
  });

  script.on('quit', () => {
    console.log('Process ended');
    process.exit();
  });

  script.on('error', () => {
    logMessage('An error occured. Exiting', 'error');
    process.exit(1);
  });
};

start();
