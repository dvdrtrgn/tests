/*global postMessage, onmessage, startMsg,  */

importScripts('./pulse.js');

const TIME = Date.now().toString().slice(9);
const NAME = 'simple' + TIME;
const FULLNAME = NAME + ' (webworker.js)';

let DELAY = 1;

const MULT = (a, b) => a * b;

function process({ delay, factors, msg }) {
  if (delay !== undefined) DELAY = Number(delay) || 0;

  if (factors) {
    let response = startMsg('product');
    response.product = MULT(...factors);
    return postLater(response);
  }
  if (msg) {
    return postLater(startMsg(msg));
  }
  return postNow(startMsg('???'));
}

console.log('init', NAME);
onmessage = (e) => process(e.data);
