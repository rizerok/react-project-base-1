import 'styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// material
import MuiProvider from 'components/mui/provider';
import apiConfigure from 'api/api-configuration';

import store from './store';

apiConfigure();

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
