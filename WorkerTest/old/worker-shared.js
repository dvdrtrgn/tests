/*global postMessage, */

const ports = [];
const TIME = 'shared' + `${Date.now()}`.slice(8);
const DLAY = 10;
const NONPRIMITIVE = {
  a: 9,
  b: 99,
};

let ticks = 1;

const logMult = (a, b) => `${a * b} from "worker-shared.js"`;

function reportStats() {
  ports.forEach((port) =>
    port.postMessage({
      log: {
        worker: TIME,
        portcount: ports.length,
        elapsed: ticks,
        // NONPRIMITIVE,
      },
    }),
  );
}

function postMult(port, data) {
  port.postMessage(logMult(data[0], data[1]));
}

var onconnect = function (e) {
  var port = e.ports[0];

  ports.push(port);

  port.onmessage = (e) => postMult(port, e.data);
  reportStats();
};

setInterval(reportStats, DLAY * 1000);
setInterval(() => (ticks += 1), 1000);
