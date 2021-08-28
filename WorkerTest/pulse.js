// importScripts('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js');
// console.log(`From worker: worker started at ${moment().format('HH:mm:ss')}`);

const defer = (fn) => setTimeout(fn, DELAY);

let COUNT = 1;

function startMsg(msg) {
  const obj = {
    '#': COUNT,
    from: FULLNAME,
    delay: DELAY,
  };

  if (msg) {
    COUNT += 1;
    obj.msg = msg; // obj[msg] = null;
  } else {
    obj.log = { msg: 'Pulse ' + NAME };
  }
  return obj;
}

function postNow(obj) {
  postMessage(obj || startMsg());
  Pulse.schedule();
}

function postLater(obj) {
  defer(() => postNow(obj));
}

const Pulse = {
  timer: null,
  using: (fn) => (this.fn = fn),
  send() {
    postLater();
  },
  schedule() {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.send, 1e4);
  },
  init: setTimeout(() => {
    // hack invocation
    console.log('Pulse', Pulse);
    Pulse.send();
  }),
};
