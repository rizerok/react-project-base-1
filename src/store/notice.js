export const NOTICE_OPEN = '@notice/open';
export const NOTICE_CLOSE = '@notice/close';

const initialState = {
  open: false,
  type: null,
  msg: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
  case NOTICE_OPEN: {
    return {
      open: true,
      type: payload.type,
      msg: payload.msg
    };
  }
  case NOTICE_CLOSE: {
    return {
      ...initialState
    };
  }
  default:
    return state;
  }
}

export const openNotice = data => dispatch => {
  dispatch({
    type: NOTICE_OPEN,
    payload: data
  });
};

export const closeNotice = () => dispatch => {
  dispatch({
    type: NOTICE_CLOSE,
    payload: {}
  });
};
