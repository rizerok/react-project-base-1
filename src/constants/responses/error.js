// eslint-disable-next-line import/prefer-default-export
export const errorResponse = () => ({
  status: 'error',
  action: 'notice',
  data: {
    noticeType: 'error',
    msg: 'Something went wrong...'
  }
});
