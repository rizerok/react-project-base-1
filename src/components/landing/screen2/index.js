import React from 'react';
import LayoutScreen from 'components/layout/screen';
import LandingProduct from 'components/landing/product';
import UiModal from 'components/ui/modal';
import LandingContactUsForm from 'components/landing/contact-us/form';
import s from './style.scss';

import products from './data.json';


const LandingScreen2 = () => {
  const [isModalOpen, setOpenModal] = React.useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return <LayoutScreen centred>
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
              <LandingProduct
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
  </LayoutScreen>;
};

export default LandingScreen2;
