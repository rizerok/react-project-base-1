import React from 'react';
import c from 'classnames';
import { Element } from 'react-scroll';
import s from './style.scss';
// TODO need test cases
const LayoutScreen = ({
  children,
  fullscreen = true,
  centred = false,
  anchor,
  topOffset = '0px'
}) => (
  <Element
    id={anchor}
    id={anchor}
    className={c(s.container, {
      [s.fullscreen]: fullscreen
    })}
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
export default LayoutScreen;
