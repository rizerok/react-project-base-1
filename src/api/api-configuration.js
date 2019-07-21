import api from 'api';

import responseHandlerApi from 'utils/response-handlers/api';
import responseHandlerNoticerError from 'utils/response-handlers/noticer-error';

export default () => api.config({
  handleErrors: responseHandlerNoticerError,
  apiResponseHandler: responseHandlerApi
});
