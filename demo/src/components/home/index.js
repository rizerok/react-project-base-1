import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.scss';

const Home = () => (
  <div className={s.container}>
    <ul className={s.list}>
      <li className={s.item}>
        <Link to="/landing">Landing</Link>
      </li>
    </ul>
  </div>
);

export default Home;
