/*global postMessage, onmessage */

const TIME = Date.now().toString().slice(9);
const NAME = 'simple' + TIME;
const FULLNAME = NAME + ' (webworker.js)';
let DELAY = 1;
let COUNT = 0;

console.log('init', NAME);

const MULT = (a, b) => a * b;
const defer = (fn) => setTimeout(fn, DELAY);

onmessage = (e) => process(e.data);

function timePost(obj) {
  defer(() => {
    postMessage(obj);
    schedulePulse();
  });
}

function startMsg(msg) {
  const obj = {
    '#': (COUNT += 1),
    from: FULLNAME,
    deferral_ms: DELAY,
  };

  if (msg) {
    obj[msg] = null;
  } else {
    obj.log = { msg: 'PULSE ' + NAME };
  }

  return obj;
}

function process({ delay, factors, msg }) {
  if (delay !== undefined) DELAY = Number(delay) || 0;

  let response = startMsg(msg || '???');

  if (factors) {
    response = startMsg('product');
    response.product = MULT(...factors);
  }
  timePost(response);
}

function sendPulse() {
  timePost(startMsg());
}

function schedulePulse() {
  clearTimeout(pulseTimer);
  pulseTimer = setTimeout(sendPulse, 1e4);
}

let pulseTimer;

sendPulse();
