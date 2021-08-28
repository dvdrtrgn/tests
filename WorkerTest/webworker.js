/*global Pulse, importScripts, startMsg, postLater, postNow, */

importScripts('./pulse.js');

const TIME = Date.now().toString().slice(9);
const NAME = 'simple' + TIME;
const FULLNAME = NAME + ' (webworker.js)';

const MULT = (a, b) => a * b;

function process(args) {
  const { delay, factors, msg } = args;
  if (delay !== undefined) Pulse.delay = Number(delay) || 0;

  if (factors) {
    let response = startMsg('product');
    response.product = MULT(...factors);
    return postLater(response);
  }
  if (msg) {
    return postLater(startMsg(msg));
  }
  return postNow(startMsg('???', args));
}

console.log('init', FULLNAME);
onmessage = (e) => process(e.data);
