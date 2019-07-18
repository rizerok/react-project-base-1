import RootLayout from 'components/root/layout';
import NotFound from 'components/notfound';
import DemoLanding from './demo-landing';

const routes = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/landing',
        exact: true,
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
