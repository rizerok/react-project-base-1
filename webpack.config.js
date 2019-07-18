/* eslint global-require: "off", no-console: "off" */
const merge = require('webpack-merge');

require('dotenv').config();

const sameRule = (a, b) => {
  if (String(a.test) !== String(b.test)) { // check test
    return false;
  }

  let use1;
  let use2;
  // eslint-disable-next-line no-unused-expressions
  Array.isArray(a.use) ? use1 = a.use : use1 = [a.use];
  // eslint-disable-next-line no-unused-expressions
  Array.isArray(b.use) ? use2 = b.use : use2 = [b.use];
  if (use1.length !== use2.length) { // check loaders count
    return false;
  }

  for (let i = 0; i < use1.length; i++) { // check by loaders
    if (use1[i].loader !== use2[i].loader) {
      return false;
    }
  }

  return true;
};

const mergeConfig = {
  customizeArray(a, b, key) {
    if (key === 'module.rules') {
      const rules = b;
      a.forEach(elA => {
        if (rules.every(r => !sameRule(r, elA))) { // uniq
          rules.push(elA);
        }
      });
      return rules;
    }
    return undefined;
  },
  customizeObject(a, b, key) {
    if (key === 'entry') {
      return b;
    }
    return undefined;
  }
};

module.exports = env => {
  const ENV = env || process.env.NODE_ENV || 'development';
  const projectType = process.env.PROJECT_TYPE;

  let serverConfig = require('./webpack/webpack.server.base.js');
  let clientConfig = require('./webpack/webpack.client.base.js');

  console.log(`Run ${projectType ? `${projectType}:` : ''}${ENV} build.`);

  if (ENV === 'production') {
    const clientProd = require('./webpack/webpack.client.prod.js');
    clientConfig = merge(mergeConfig)(clientConfig, clientProd);
  } else {
    const clientDev = require('./webpack/webpack.client.dev.js');
    clientConfig = merge(mergeConfig)(clientConfig, clientDev);
  }

  if (projectType === 'demo') {
    serverConfig = merge(mergeConfig)(serverConfig, require('./webpack/webpack.server.demo.js'));
    clientConfig = merge(mergeConfig)(clientConfig, require('./webpack/webpack.client.demo.js'));
  }

  return [clientConfig, serverConfig];
};
