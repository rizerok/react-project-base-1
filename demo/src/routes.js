import RootLayout from 'components/root/layout';
import NotFound from 'components/notfound';
import DemoLanding from './components/demo-landing';
import Home from './components/home';

const routes = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/landing',
        component: DemoLanding
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
