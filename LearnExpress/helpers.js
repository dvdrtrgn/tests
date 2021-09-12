/* eslint-disable no-undef */

const OUT = [];

const collect = (message, data) => {
  OUT.push(message);
  console.log(message, data || 'no data');
};

const finish = (res) => {
  res.send(OUT);
  // OUT.length = 0;
};

function middleware(req, res, next) {
  collect('running middleware', { req, res, next });
  next();
}

module.exports = {
  collect,
  finish,
  middleware,
};
