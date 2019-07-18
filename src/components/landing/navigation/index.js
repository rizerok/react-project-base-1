import React from 'react';
import { Link } from 'react-scroll';
import s from './style.scss';

const LandingNavigation = ({ items, navigation: { smooth, duration, hashSpy } }) => (
  <nav>
    <ul className={s.list}>
      {items && items.map(({ anchor, navTitle }, key) => (
        <li className={s.item} key={key}>
          <Link
            isDynamic={true}
            to={anchor}
            smooth={smooth}
            duration={duration}
            hashSpy={hashSpy}
          >{navTitle}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default LandingNavigation;
