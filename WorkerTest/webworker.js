/*global postMessage, onmessage */

const TIME = Date.now().toString().slice(9);
const NAME = 'simple' + TIME + ' (webworker.js)';
const MULT = (a, b) => a * b;

console.log('init', NAME);

function startMsg(msg) {
  return msg
    ? { [msg]: null, from: NAME }
    : {
        log: { msg: '(pulse)', from: NAME },
      };
}
function sendPulse() {
  postMessage(startMsg());
}

function process({ factors }) {
  let response = startMsg('product');

  if (factors) response.product = MULT(...factors);
  else response = startMsg('???');

  postMessage(response);
}

onmessage = (e) => process(e.data);

setInterval(sendPulse, 1e4);
sendPulse();
