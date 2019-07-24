// client handlers
import history from 'src/history';
import { openNotice } from 'components/ui/notice/actions';

export default response => {
  if (response.action === 'notice') {
    openNotice(response.data.noticeType, response.data.msg);
  }
  if (response.action === 'redirect') {
    if (response.data.type === 'local') {
      history.replace(response.data.to);
    } else {
      window.location.href = response.data.to;
    }
  }
  return response;
};
