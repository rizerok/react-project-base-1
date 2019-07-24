import RootLayout from 'components/root/layout';
import Counter from 'components/counter';
import NotFound from 'components/notfound';
import Home from 'components/home';
import Order from 'components/order';

const routes = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      { path: '/counter', component: Counter },
      {
        path: '/order',
        component: Order
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
