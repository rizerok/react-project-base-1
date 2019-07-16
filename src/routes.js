import RootLayout from 'components/root/layout';
import Counter from 'components/counter';
import NotFound from 'components/notfound';
import Landing from 'components/landing';

const routes = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Landing
      },
      { path: '/counter', component: Counter },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
