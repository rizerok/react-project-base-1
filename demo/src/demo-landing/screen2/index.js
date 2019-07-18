import React from 'react';
import UiModal from 'components/ui/modal';

import LandingContactUsForm from '../contact-us/form';
import DemoLandingProduct from '../product';
import s from './style.scss';

import products from './data.json';


const DemoLandingScreen2 = () => {
  const [isModalOpen, setOpenModal] = React.useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return <div>
    <UiModal open={isModalOpen} onClose={closeModal}>
      <LandingContactUsForm/>
    </UiModal>
    <div className={s.container}>
      <div className={s.title}>
        <div className="cnr-main">
          <span>Products</span>
        </div>
      </div>
      <div className={s.content}>
        <div className="cnr-main">
          <div className={s.contentArea}>
            {products.map((p, key) => (
              <DemoLandingProduct
                key={key}
                title={p.title}
                price={p.price}
                details={p.details}
                contactOnClick={() => setOpenModal(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default DemoLandingScreen2;
