/* eslint no-console: "off" */
const fs = require('fs');
const { resolve } = require('path');
const { handleRender, routes } = require('../../temp/compiled-sources.js');

// TODO realise recursive file creator
// const routes = [
//   {
//     routes: [
//       {
//         exact: true,
//         path: '/'
//       },
//       {
//         path: '/login'
//       },
//       {
//         path: '/user',
//         routes: [
//           {
//             exact: true,
//             path: '/user'
//           },
//           {
//             path: '/user/patients',
//             routes: [
//               { exact: true, path: '/user/patients' },
//               { path: '/user/patients/create/:infoName' },
//               { path: '/user/patients/view/:id/info/:infoName' },
//               { path: '/user/patients/view/results' },
//               { exact: true, path: '/user/patients/view/:id/results/tests' }
//             ]
//           },
//           {
//             path: '/test/:id/:testName',
//             routes: [
//               { exact: true, path: '/test/:id/test3/:question' },
//               { exact: true, path: '/test/:id/:testName' }
//             ]
//           }
//         ]
//       },
//       {
//         path: '*'
//       }
//     ]
//   }
// ];

const createPageRender = (handleRender, rootDir) => async (name, url, state = {}) => {
  const ctx = { url, state };

  await handleRender()(ctx);

  const filePath = `${rootDir}/${name}.html`;
  console.log('file path', filePath);

  fs.writeFileSync(filePath, ctx.body);
};

const rootDir = resolve('public');
const render = createPageRender(handleRender, rootDir);

const pathCreator = async (route) => {
  if (route.path.indexOf(':') === -1) {
    if (route.routes) {
      // path for routes
      fs.mkdirSync(`${rootDir}${route.path}`);
      await Promise.all(route.routes.map(pathCreator));
    } else if (!route.exact) {
      // no routes, render named file
      if (route.path === '*') {
        await render('404', route.path);
      } else {
        const pathParts = route.path.split('/');
        console.log('pathParts', pathParts);
        const filePath = pathParts[pathParts.length - 1] === ''
          // path = all without last dir
          ? `${pathParts.splice(0, pathParts.length - 1).join('/')}/index`
          // path = without first slash
          : route.path.slice(1);
        await render(filePath, route.path);
      }
    }

    if (route.exact) {
      // index
      if (route.path === '/') {
        await render('index', route.path);
      } else {
        await render(`${route.path.slice(1)}/index`, route.path);
      }
    }
  }
};

module.exports = () => routes[0].routes.forEach(pathCreator);
