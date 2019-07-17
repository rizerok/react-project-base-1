import React from 'react';
import { Link } from 'react-scroll';
import s from './style.scss';

const ScrollLink = ({ children, anchor }) => (
  <Link
    smooth={true}
    to={anchor}
    duratoin={500}
    isDynamic={true}
    hashSpy={true}
  >{children}</Link>
);

const UiAnimatedNavigation = () => (
  <nav className={s.container}>
    <ul className={s.list}>
      <li className={s.item}><ScrollLink anchor="screen1">Screen1</ScrollLink></li>
      <li className={s.item}><ScrollLink anchor="screen2">Screen2</ScrollLink></li>
      <li className={s.item}><ScrollLink anchor="screen3">Screen3</ScrollLink></li>
    </ul>
  </nav>
);

export default UiAnimatedNavigation;
