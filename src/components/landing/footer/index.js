import React from 'react';
import s from './style.scss';

const LandingFooter = ({ children }) => (
  <footer className={s.footer}>
    {children}
  </footer>
);

export default LandingFooter;
