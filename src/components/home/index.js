import React from 'react';
import s from './style.scss';
import url, { ReactComponent as ReactLogo } from './react.svg';

const Home = () => <div className={s.container}>
  <div className={s.mainContent}>
    <span>HOME PAGE</span>
    <div className={s.svgContainer}>

      <div className={s.svgItem}>
        <div className={s.svgTitle}>Svg as React component</div>
        <div>
          <ReactLogo/>
        </div>
      </div>

      <div className={s.svgItem}>
        <div className={s.svgTitle}>Svg from style</div>
        <div className={s.svgFromStyle}></div>
      </div>

      <div className={s.svgItem}>
        <div className={s.svgTitle}>Svg image tag</div>
        <div>
          <img src={url} alt=""/>
        </div>
      </div>
    </div>
  </div>
</div>;


export default Home;
