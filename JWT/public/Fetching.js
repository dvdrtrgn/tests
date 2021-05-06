import 'https://unpkg.com/vue@2';

const name = 'Fetching';

function jsonSeek(str, prop) {
  var obj = {};
  try {
    obj = JSON.parse(str);
  } catch (err) {}
  return obj ? obj[prop] : '';
}

function runGet(obj, key, token) {
  let url = `http://localhost:4001/${key}`;

  return fetch(url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.text())
    .then((res) => {
      obj['got_' + key] = res;
      obj.console = '...' + obj.console;
    });
}

function runPost(obj, key, payload) {
  let url = `http://localhost:4000/${key}`;

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((res) => res.text())
    .then((res) => {
      obj['json_' + key] = res;
      obj.console = res;
    });
}

function runDelete(obj, key, payload) {
  let url = `http://localhost:4000/${key}`;

  return fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((res) => res.text())
    .then((res) => {
      obj.console = res;
    });
}

function deferGet(app, path) {
  app[`got_${path}`] = 'loading...';
  app.fetchToken().then(function () {
    runGet(app, path, app.accessToken);
  });
}

const App = (window[name] = new Vue({
  name,
  el: '#' + name,
  components: {},
  data() {
    return {
      name,
      console: '',
      in_username: '',
      in_accessToken: '',
      in_loginToken: '',
      json_token: '',
      json_login: '',
      got_posts: '',
      got_myposts: '',
    };
  },
  methods: {
    fetchPosts() {
      this.got_posts = '';
      let token = this.in_accessToken || this.accessToken;
      runGet(this, 'posts', token);
    },
    fetchMyPosts() {
      this.got_myposts = '';
      if (this.in_accessToken) {
        runGet(this, 'myposts', this.in_accessToken);
      } else {
        deferGet(this, 'myposts');
      }
    },
    fetchLogin() {
      this.in_username = this.in_username || 'Dave';
      return runPost(this, 'login', { username: this.in_username });
    },
    fetchToken() {
      let token = this.in_loginToken || this.loginToken;
      return runPost(this, 'token', { loginToken: token });
    },
    revokeLogin() {
      let token = this.in_loginToken || this.loginToken;
      runDelete(this, 'logout', { loginToken: token });
      this.in_loginToken = '';
      this.json_login = '{"loginToken":"already revoked"}';
      this.json_token = '{"accessToken":"set to expire"}'; // simulate expired token
    },
  },
  computed: {
    accessToken() {
      return jsonSeek(this.json_token, 'accessToken');
    },
    loginToken() {
      return jsonSeek(this.json_login, 'loginToken');
    },
  },
}));
