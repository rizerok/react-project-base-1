import clientApp from 'src/client-app';
import routes from './routes';

clientApp(routes);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
