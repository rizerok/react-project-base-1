import React from 'react';
import c from 'classnames';
import { Element } from 'react-scroll';
import s from './style.scss';
// TODO need test cases
const LandingScreen = ({
  children,
  fullscreen = true,
  centred = false,
  anchor,
  topOffset = '0px',
  className
}) => (
  <Element
    id={anchor}
    className={c(s.container, {
      [s.fullscreen]: fullscreen
    }, className)}
    style={{
      paddingTop: topOffset
    }}
  >
    <div className={c(s.content, {
      [s.centred]: centred
    })}>
      {children}
    </div>
  </Element>
);
export default LandingScreen;
