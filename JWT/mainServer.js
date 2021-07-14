require('dotenv').config({ path: process.cwd() + '/JWT/lib/.env' });

const auth = require('./lib/authHelper.js');
const express = require('express');
// const jwt = require('jsonwebtoken');
const posts = require('./lib/dataPosts.js');

const app = express();
app.use(express.static('JWT/public'));
app.use(express.json());

app.get('/posts', auth, (req, res) => {
  res.json(posts);
});

app.get('/myposts', auth, (req, res) => {
  var myposts = posts.filter((post) => {
    return post.username === req.user.name;
  });
  res.json(myposts);
});

app.listen(4000);
