/*global postMessage, */

const TIME = 'simple' + `${Date.now()}`.slice(8);
const DLAY = 10;
const NONPRIMITIVE = {
  a: 4,
  b: 44,
};

let ticks = 1;

const logMult = (a, b) => `${a * b} from "worker-simple.js"`;

function reportStats() {
  postMessage({
    log: {
      worker: TIME,
      portcount: null,
      elapsed: ticks,
      // NONPRIMITIVE,
    },
  });
}

function postMult(data) {
  postMessage(logMult(data[0], data[1]));
}

var onmessage = (e) => postMult(e.data);
reportStats();

setInterval(reportStats, DLAY * 1000);
setInterval(() => (ticks += 1), 1000);
