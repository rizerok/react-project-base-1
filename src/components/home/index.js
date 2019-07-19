import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import c from 'classnames';
import s from './style.scss';
import { ReactComponent as ReactSvg } from './react.svg';
import completeImg from './complete.png';

const Home = () => {
  const [complete, setComplete] = useState(false);
  return (
    <div className={s.container}>
      <Link to="/counter"> counter </Link>
      <ReactSvg
        className={s.svg}
        onClick={() => setComplete(true)}
      />
      <img
        src={completeImg}
        alt="complete!"
        className={
          c(s.complete, {
            [s.isShow]: complete
          })
        }
      />
    </div>
  );
};

export default Home;
