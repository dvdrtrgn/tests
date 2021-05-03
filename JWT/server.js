const express = require('express');
const jwt = require('jsonwebtoken');
const posts = require('./posts.js')

require('dotenv').config({ path: process.cwd() + '/JWT/.env' });

const app = express();

app.use(express.json());

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/login', (req, res) => {
  // auth user
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.json({ accessToken: accessToken });
});

app.listen(4000);
