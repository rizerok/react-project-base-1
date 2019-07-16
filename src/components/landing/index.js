import React from 'react';
// components
import LandingScreen1 from './screen1';
import LandingScreen2 from './screen2';
import LandingScreen3 from './screen3';
import LandingFooter from './footer';

const Landing = () => (
  <div>
    <div>
      <LandingScreen1/>
      <LandingScreen2/>
      <LandingScreen3/>
    </div>
    <LandingFooter/>
  </div>
);

export default Landing;
