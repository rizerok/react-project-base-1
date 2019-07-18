import React from 'react';
import c from 'classnames';
import s from './style.scss';

const LandingHeaderFixed = ({
  children, height, className, ...props
}) => (
  <header
    className={c(s.container, className)}
    style={{
      height
    }}
    {...props}
  >
    {children}
  </header>
);

export default LandingHeaderFixed;
