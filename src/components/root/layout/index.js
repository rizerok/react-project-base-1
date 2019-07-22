import React from 'react';
import Helmet from 'react-helmet';
import { renderRoutes } from 'react-router-config';

import favicon from 'img/favicon.png';
import UiNotice from 'components/ui/notice';

import style from './style.scss';

const RootLayout = ({ route }) => (
  <div className={style.container}>
    <Helmet
      defaultTitle="React Project Base 1"
      titleTemplate="%s – React Project Base 1"
      link={[{ rel: 'icon', type: 'image/icon', href: favicon }]}
    />
    {renderRoutes(route.routes)}
    <UiNotice/>
  </div>
);

export default RootLayout;
