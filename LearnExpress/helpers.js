/* eslint-disable no-undef */

const OUT = [];

const collect = (message, data) => {
  OUT.push(message);
  console.log(message, data || 'no data');
};

const finish = (res) => {
  res.send(OUT);
  // OUT.length = 0;
  OUT.push(' --end-- ');
};

function middleware(req, res, next) {
  collect('running middleware', { req, res, next });
  next();
}
function authware(req, res, next) {
  collect('running authware', { req, res, next });
  if (req.query.auth) req._auth = true;
  next();
}

module.exports = {
  collect,
  finish,
  middleware,
  authware,
};
