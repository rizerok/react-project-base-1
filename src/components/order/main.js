import React from 'react';
import Helmet from 'react-helmet';
import Button from '@material-ui/core/Button';
import api from 'api';

const total = 10;

const pay = (total, orderId) => () => {
  api.fetch('/payment', {
    amount: total.toString(),
    message: `Payment for order #${orderId}`
  });
};

const Order = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <div>Order #{id}</div>
      <div>total: {total} rub</div>
      <Button
        onClick={pay(total, id)}
      >PAY</Button>
    </div>
  );
};

export default Order;
