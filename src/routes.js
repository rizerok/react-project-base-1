import RootLayout from 'components/root/layout';
import Counter from 'components/counter';
import NotFound from 'components/notfound';

const routes = [
  {
    component: RootLayout,
    routes: [
      { path: '/counter', component: Counter },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
