import React from 'react';
import { renderRoutes } from 'react-router-config';

import UiNotice from 'components/ui/notice';

import style from './style.scss';

const RootLayout = ({ route }) => (
  <div className={style.container}>
    {renderRoutes(route.routes)}
    <UiNotice/>
  </div>
);

export default RootLayout;
