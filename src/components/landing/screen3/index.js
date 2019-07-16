import React from 'react';
import UiAccordion from 'components/ui/accordion';
import LayoutScreen from 'components/layout/screen';
import s from './style.scss';

import panelData from './data.json';

const LandingScreen3 = () => (
  <LayoutScreen centred>
    <div className={s.container}>
      <div className="cnr-main">
        <div className={s.title}>
          <span>Q & A</span>
        </div>
        <div className={s.content}>
          <UiAccordion panelData={panelData}/>
        </div>
      </div>
    </div>
  </LayoutScreen>
);

export default LandingScreen3;
