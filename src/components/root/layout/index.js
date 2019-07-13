import React from 'react';
import { renderRoutes } from 'react-router-config';

import style from './style.scss';

class RootLayout extends React.Component {
  render() {
    return <div className={style.container}>{renderRoutes(this.props.route.routes)}</div>;
  }
}

export default RootLayout;
