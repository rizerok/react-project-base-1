// eslint-disable-next-line import/prefer-default-export
export const redirectToPayment = (yaUrl) => ({
  status: 'success',
  action: 'redirect',
  data: {
    type: 'absolute',
    to: yaUrl
  }
});
