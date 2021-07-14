import 'https://unpkg.com/vue@2';
import ApiOps from './api-ops.js';

const name = 'App';

function jsonSeek(str, prop, obj = {}) {
  try {
    obj = JSON.parse(str);
  } catch (err) {}
  return obj ? obj[prop] : '';
}

function deferGet(app, path) {
  app.fetchToken().then(function () {
    ApiOps.get(app, path, app.accessToken);
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
      ApiOps.get(this, 'posts', token);
    },
    fetchMyPosts() {
      this.got_myposts = 'loading...';
      if (this.in_accessToken) {
        ApiOps.get(this, 'myposts', this.in_accessToken);
      } else {
        deferGet(this, 'myposts');
      }
    },
    fetchLogin() {
      this.in_username = this.in_username || 'Dave';
      return ApiOps.post(this, 'login', { username: this.in_username });
    },
    fetchToken() {
      let token = this.in_loginToken || this.loginToken;
      return ApiOps.post(this, 'token', { loginToken: token });
    },
    revokeLogin() {
      let token = this.in_loginToken || this.loginToken;
      ApiOps.delete(this, 'logout', { loginToken: token });
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
