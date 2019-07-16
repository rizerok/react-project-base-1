import React from 'react';
import c from 'classnames';
import NukaCarousel from 'nuka-carousel';
import s from './style.scss';

const UiSlider = ({ children, ...props }) => (
  <NukaCarousel
    renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => (
      <div className={s.indicatorList}>
        {(new Array(slideCount)).fill(null).map((v, key) => (
          <div
            className={c(s.indicator, {
              [s.isCurrent]: key === currentSlide
            })}
            onClick={() => goToSlide(key)}
            key={key}
          ></div>
        ))}
      </div>
    )}
    renderCenterLeftControls={null}
    renderCenterRightControls={null}
    {...props}
  >
    {children}
  </NukaCarousel>
);

export default UiSlider;
