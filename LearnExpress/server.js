/* eslint-disable no-undef */
console.clear();

const express = require('express');
const app = express();
const { collect, finish, middleware } = require('./helpers.js');

app.use(middleware);

app.get('/', (req, res) => {
  collect('Loading Home page');
  finish(res);
});
app.get('/user', (req, res) => {
  collect('Loading User page');
  finish(res);
});

app.listen(4444);
