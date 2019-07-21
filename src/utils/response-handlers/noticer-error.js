// client noticer
import { openNotice } from 'components/ui/notice/actions';
import { errorResponse } from 'constants/responses/error';

const { noticeType, msg } = errorResponse().data;

export default () => openNotice(noticeType, msg);
