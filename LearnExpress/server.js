/* eslint-disable no-undef */
console.clear();

const express = require('express');
const app = express();
const { collect, finish, middleware, authware } = require('./helpers.js');

app.use(middleware);

app.get('/', (req, res) => {
  collect('Loading Home page');
  finish(res);
});
app.get('/user', authware, (req, res) => {
  if (req._auth) {
    collect('Loading User page');
  } else {
    collect('No auth query');
  }
  finish(res);
});

app.listen(4444);
