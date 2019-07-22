import React from 'react';
import Helmet from 'react-helmet';
import {
  LandingLayout,
  Screen,
  Navigation,
  Footer,
  HeaderFixed
} from 'components/landing';

import DemoLandingScreen1 from './screen1';
import DemoLandingScreen2 from './screen2';
import DemoLandingScreen3 from './screen3';

import s from './style.scss';

const DemoLanding = () => (
  <LandingLayout>
    <Helmet>
      <title>Landing example</title>
    </Helmet>
    <HeaderFixed className={s.header} height="100px">
      <Navigation navigation={{
        smooth: true,
        duration: 1000,
        hashSpy: true
      }}/>
    </HeaderFixed>
    <Screen
      anchor="screen1"
      navTitle="--Screen1--"
    >
      <DemoLandingScreen1/>
    </Screen>
    <Screen
      anchor="screen2"
      navTitle="--Screen2--"
      centred
    >
      <DemoLandingScreen2/>
    </Screen>
    <Screen
      anchor="screen3"
      navTitle="--Screen3--"
      centred
    >
      <DemoLandingScreen3/>
    </Screen>
    <Footer>
      <div>footer</div>
      <div>
        <Navigation navigation={{
          smooth: true,
          duration: 1000,
          hashSpy: true
        }}/>
      </div>
    </Footer>
  </LandingLayout>
);

export default DemoLanding;
