import 'styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// material
import MuiProvider from 'components/mui/provider';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import store from './store';

const clientApp = (routes) => {
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
};

export default clientApp;
