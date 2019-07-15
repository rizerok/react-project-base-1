import 'styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// material
import MuiProvider from 'components/mui/provider';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

import store from './store';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <MuiProvider>
        {renderRoutes(routes)}
      </MuiProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
