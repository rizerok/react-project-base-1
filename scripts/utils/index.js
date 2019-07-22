const rimraf = require('rimraf');
const chalk = require('chalk');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const paths = require('../../paths');

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

const cleanDirs = () => {
  rimraf.sync(paths.dirNames.public);
  rimraf.sync(paths.dirNames.server);
  rimraf.sync(paths.dirNames.temp);
};

const applyProgressPlugin = (compiler) => (new ProgressPlugin()).apply(compiler);

module.exports = {
  logMessage,
  compilerPromise,
  cleanDirs,
  applyProgressPlugin
};
