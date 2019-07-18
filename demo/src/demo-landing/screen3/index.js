import React from 'react';
import UiAccordion from 'components/ui/accordion';
import s from './style.scss';

import panelData from './data.json';

const DemoLandingScreen3 = () => (
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
);

export default DemoLandingScreen3;
