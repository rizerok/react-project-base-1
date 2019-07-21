// eslint-disable-next-line import/prefer-default-export
export const fetchResponseError = ({ status, statusText }) => new Error(
  `fetch Response return status ${status} ${statusText}`
);
