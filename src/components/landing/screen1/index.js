import React from 'react';
import LayoutScreen from 'components/layout/screen';
import UiSlider from 'components/ui/slider';

import p1 from 'img/p1.jpeg';
import p2 from 'img/p2.jpeg';
import p3 from 'img/p3.jpeg';
import p4 from 'img/p4.jpeg';

import s from './style.scss';

const Slide = ({ text, img }) => (
  <div
    className={s.slide}
    style={{ backgroundImage: `url(${img})` }}>
    <div className={s.slideTitle}>
      <span>{text}</span>
    </div>
  </div>
);

const LandingScreen1 = () => (
  <LayoutScreen topOffset="100px" anchor="screen1">
    <div className={s.container}>
      <UiSlider
        autoplay
        wrapAround
        autoplayInterval={4000}
      >
        <Slide text="Slide1" img={p1}/>
        <Slide text="Slide2" img={p2}/>
        <Slide text="Slide3" img={p3}/>
        <Slide text="Slide4" img={p4}/>
      </UiSlider>
    </div>
  </LayoutScreen>
);

export default LandingScreen1;
