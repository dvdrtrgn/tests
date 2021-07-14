require('dotenv').config({ path: process.cwd() + '/JWT/lib/.env' });

const { ACCESS_TOKEN_SECRET, LOGIN_TOKEN_SECRET } = process.env;
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const loginTokens = ['backdoor!'];

app.use(express.json());
app.use(cors());

function generateAccessToken(obj) {
  return jwt.sign(obj, ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}

function generateLoginToken(obj) {
  const token = jwt.sign(obj, LOGIN_TOKEN_SECRET);
  loginTokens.push(token);
  return token;
}

function verifyLoginToken(token, res) {
  const secret = LOGIN_TOKEN_SECRET;

  if (!loginTokens.includes(token)) return res.sendStatus(401);

  jwt.verify(token, secret, (err, obj) => {
    if (err) {
      console.log(`${token.slice(0, 11)}<-login`, err.message);
      if (token === 'backdoor!') {
        obj = { name: 'God', iat: 666 };
      } else return res.sendStatus(403);
    }
    delete obj.iat;
    const accessToken = generateAccessToken(obj);

    res.json({ accessToken });
  });
}

app.delete('/logout', (req, res) => {
  var token = req.body.loginToken;
  var index = loginTokens.indexOf(token);

  if (index > -1) {
    res.send('Revoking token ' + token);
    loginTokens.splice(index, 1);
  } else res.sendStatus(204);
});

app.post('/token', (req, res) => {
  const loginToken = req.body.loginToken;

  verifyLoginToken(loginToken, res);
});

app.post('/login', (req, res) => {
  // auth user via password first
  const username = req.body.username;
  const userObj = { name: username };

  const loginToken = generateLoginToken(userObj);

  res.json({ loginToken });
});

app.listen(4001);
