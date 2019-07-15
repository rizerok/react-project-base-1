/* eslint no-console: "off" */
// React
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
// material
import { ServerStyleSheets } from '@material-ui/styles';
import MuiProvider from 'components/mui/provider';
// src
import reducer from 'src/reducers';
import routes from 'src/routes';
import handleStaticRouterContext from 'middleware/ssr/handle-static-router-context';
import Html from 'components/html';
// node
import fs from 'fs';
import path from 'path';

const manifest = JSON.parse(fs.readFileSync(path.resolve('public/static/manifest.json'), 'utf8'));

const handleRender = preloadedState => async ctx => {
  console.log(ctx.url);

  // eslint-disable-next-line no-param-reassign
  preloadedState = preloadedState || ctx.state.preloadedState || {};

  const store = createStore(reducer, preloadedState, applyMiddleware(thunk));

  const branch = matchRoutes(routes, ctx.url);

  const promises = branch.map(({ route }) => {
    const { fetchData } = route.component;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
  });

  await Promise.all(promises);

  const staticRouterContext = {};

  const sheets = new ServerStyleSheets();

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={staticRouterContext}>
        {sheets.collect(
          <MuiProvider>
            {renderRoutes(routes)}
          </MuiProvider>
        )}
      </StaticRouter>
    </Provider>
  );

  const finalState = store.getState();

  const html = `<!doctype html>${renderToString(<Html
    css={[manifest['bundle.css'], manifest['vendor.css']]}
    scripts={[manifest['bundle.js'], manifest['vendor.js']]}
    state={JSON.stringify(finalState)}
    jss={sheets.toString()}
  >
    {content}
  </Html>)}`;

  await handleStaticRouterContext(staticRouterContext, ctx);

  ctx.body = html;
};

export default handleRender;
