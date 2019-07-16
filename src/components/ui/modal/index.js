import React from 'react';
import Modal from '@material-ui/core/Modal';
import s from './style.scss';

const UiModal = ({ children, ...props }) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    className={s.container}
    {...props}
  >
    <div className={s.content}>
      { children }
    </div>
  </Modal>
);

export default UiModal;
