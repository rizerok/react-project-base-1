import React from 'react';
import c from 'classnames';
import Button from '@material-ui/core/Button';
import s from './style.scss';

const LandingProduct = ({
  title,
  price,
  details,
  contactOnClick
}) => (
  <div className={s.product}>
    <div className={c(s.header, s.block)}>
      <div className={s.title}>
        <span>{title}</span>
      </div>
      <div className={s.price}>
        <span className={s.number}>{price}</span>
        <span className={s.currency}>$</span>
      </div>
    </div>
    <div className={c(s.body, s.block)}>
      <ul>
        {details.map((d, key) => (
          <li key={key}>{d}</li>
        ))}
      </ul>
    </div>
    <div className={c(s.footer, s.block)}>
      <Button onClick={contactOnClick}>Contact Us</Button>
    </div>
  </div>
);

export default LandingProduct;
