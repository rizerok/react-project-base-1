import React from 'react';
// components
import UiAnimatedNavigation from 'components/ui/animated-navigatoin';
import LandingScreen1 from './screen1';
import LandingScreen2 from './screen2';
import LandingScreen3 from './screen3';
import LandingFooter from './footer';

import s from './style.scss';

const Landing = () => (
  <div>
    <div className={s.navigation}>
      <UiAnimatedNavigation></UiAnimatedNavigation>
    </div>
    <div className={s.screenList}>
      <LandingScreen1/>
      <LandingScreen2/>
      <LandingScreen3/>
    </div>
    <LandingFooter/>
  </div>
);

export default Landing;
