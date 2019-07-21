import store from 'store';
import { closeNotice, openNotice } from 'store/notice';

const storeBindedOpenNotice = (type, msg) => store.dispatch(
  openNotice({
    type,
    msg
  })
);

const storeBindedCloseNotice = (type, msg) => store.dispatch(
  closeNotice({
    type,
    msg
  })
);

export {
  storeBindedOpenNotice as openNotice,
  storeBindedCloseNotice as closeNotice
};
