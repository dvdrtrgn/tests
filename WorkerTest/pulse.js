/*global FULLNAME, NAME, */

const defer = (fn) => setTimeout(fn, Pulse.delay);

function startMsg(msg, extra) {
  const obj = {
    _meta_: {
      num: (Pulse.count += 1),
      from: FULLNAME,
      delay: Pulse.delay,
    },
    message: 'Pulse ' + NAME,
  };

  if (msg) {
    obj.message = msg === '???' ? '' : msg;
    // obj[msg] = extra;
  } else {
    obj.log = true;
  }
  return Object.assign(obj, extra);
}

function postNow(obj) {
  postMessage(obj || startMsg());
  Pulse.schedule(); // reset pulse
}

// eslint-disable-next-line no-unused-vars
function postLater(obj) {
  defer(() => postNow(obj));
  Pulse.schedule(); // reset pulses
}

const Pulse = {
  timer: null,
  count: 0,
  delay: 1,
  schedule() {
    clearTimeout(this.timer);
    this.timer = setTimeout(postNow, 1e4);
  },
  init: setTimeout(() => {
    // hack invocation (also needs external globals)
    console.log('Pulse', Pulse);
    postNow();
  }),
};

// importScripts('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js');
// console.log(`From worker: worker started at ${moment().format('HH:mm:ss')}`);
