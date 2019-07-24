import OrderMain from './main';

const routes = (prefix) => [
  {
    path: `${prefix}/:id`,
    component: OrderMain,
    exact: true
  },
  {
    path: `${prefix}/:id/success`,
    component: () => 'success',
    exact: true
  },
  {
    path: `${prefix}/:id/fail`,
    component: () => 'fail',
    exact: true
  }
];

export default routes;
