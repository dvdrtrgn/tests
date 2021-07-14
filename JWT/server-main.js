// IMPORTS

require('dotenv').config({ path: process.cwd() + '/JWT/lib/.env' });
const auth = require('./lib/authHelper.js');
const express = require('express');
const posts = require('./lib/dataPosts.js');

// INITS

const app = express();
app.use(express.static('JWT/public'));
app.use(express.json());
app.listen(4000);

// ROUTES

app.get('/posts', auth, (req, res) => {
  res.json(posts);
});

app.get('/myposts', auth, (req, res) => {
  var myposts = posts.filter((post) => {
    return post.username === req.user.name;
  });
  res.json(myposts);
});
