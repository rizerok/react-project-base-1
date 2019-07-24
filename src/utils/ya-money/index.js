/* eslint no-console: "off" */
import { ExternalPayment } from 'yandex-money-sdk';

require('dotenv').config();

const handleResponse = (res, rej) => (err, data) => (err ? rej(err) : res(data));

const clientId = process.env.YANDEX_MONEY_CLIENT_ID;
const walletNumber = process.env.YANDEX_MONEY_WALLET_NAUMBER;
const domainName = process.env.DOMAIN_NAME;
const protocol = process.env.PROTOCOL;

const getAppInstanceId = () => new Promise((res, rej) => ExternalPayment.getInstanceId(
  clientId,
  handleResponse(res, rej)
));

const requestPayment = (externalPayment, {
  amount, message
}) => new Promise((res, rej) => externalPayment.request({
  pattern_id: 'p2p',
  to: walletNumber,
  amount,
  message,
  label: 'payment'
  // test_payment: true,
  // test_result: 'success'
}, handleResponse(res, rej)));

const processPayment = (externalPayment, {
  instanceId,
  requestId,
  successUrl,
  failUrl
}) => new Promise((res, rej) => externalPayment.process(
  {
    instance_id: instanceId,
    request_id: requestId,
    ext_auth_success_uri: successUrl,
    ext_auth_fail_uri: failUrl
  },
  handleResponse(res, rej)
));
// console.log('clientId', clientId);
const createPayment = async (options) => {
  const instanseIdData = await getAppInstanceId();
  console.log('instanseIdData', instanseIdData);
  const instanceId = instanseIdData.instance_id;
  console.log('instanceId', instanceId);
  const ep = new ExternalPayment(instanceId);
  console.log('ep', ep);
  const rpData = await requestPayment(ep, options);
  console.log('rpData', rpData);
  return processPayment(ep, {
    instanceId,
    requestId: rpData.request_id,
    successUrl: `${protocol}://${domainName}/order/success`,
    failUrl: `${protocol}://${domainName}/order/fail`
  });
};

export default createPayment;

// params response
// "{
// "orderN": "L4Y5Dd0zRuZQI_5hXrtqzwuzuPYZ..000.201907",
//   "cps_card": "000011******3333",
//   "merchant_order_id": "1563972938975_C2WA",
//   "cps_context_id":"333639383033333837355f323...",
//   "skr_env": "api",
//   "reason": "success",
//   "status": "success",
//   "RC": "00",
//   "sum": "100.00"
// }"
