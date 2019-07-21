/* eslint no-console: "off" */
import { fetchResponseHandler } from 'src/utils/response-handlers/fetch';
import fdo from 'constants/fetch-default-options';

const urlApi = '/api';

class Api {
  config({
    path = urlApi,
    fetchDefaultOptions = fdo,
    assignedApi,
    apiResponseHandler,
    handleErrors = e => console.log('catch', e)
  }) {
    this.path = path;
    this.fetchDefaultOptions = fetchDefaultOptions;
    this.apiResponseHandler = apiResponseHandler;
    this.handleErrors = handleErrors;
    if (assignedApi) {
      Object.assign(this, assignedApi);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  dataToOptionsBodyModifier(options, data) {
    if (data === undefined || data === null) {
      if (options.body !== undefined) {
        // TODO add warning if body used in fetchCustomOptions
        // eslint-disable-next-line no-param-reassign
        delete options.body;
      }
    } else {
      // eslint-disable-next-line no-param-reassign
      options.body = JSON.stringify(data);
    }
  }

  fetch(url, data, fetchCustomOptions = {}, isHandleResponse = true) {
    const options = {
      ...this.fetchDefaultOptions,
      ...fetchCustomOptions
    };

    this.dataToOptionsBodyModifier(options, data);

    return fetch(this.path + url, options)
      .then(fetchResponseHandler)
      .then(res => res.json())
      .then(this.apiResponseHandler && isHandleResponse
        ? this.apiResponseHandler
        : res => res)
      .catch(this.handleErrors);
  }
}

const api = new Api();

export default api;
