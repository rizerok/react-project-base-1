import { fetchResponseError } from 'constants/errors';

export default (response) => { throw fetchResponseError(response); };
