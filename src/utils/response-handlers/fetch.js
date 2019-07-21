import { fetchResponseError } from 'constants/errors';
// eslint-disable-next-line import/prefer-default-export
export const fetchResponseHandler = response => {
  if (!response.ok) {
    throw fetchResponseError(response);
  }
  return response;
};
