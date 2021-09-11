import UserShow from './UserShow.js';

const template = /*html*/ `
  <button @click="getRando"> {{ btnLabel }} </button>
  <UserShow v-for="user in users" :user="user"></UserShow>
`;

export default {
  template,
  components: { UserShow },
  data() {
    return { users: [] };
  },
  computed: {
    btnLabel() {
      return `get ${this.users.length ? 'another' : 'a'} user`;
    },
  },
  methods: {
    getRando() {
      let self = this;
      return fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then(({ results }) => {
          let user = results[0];
          console.log('fetched user', user);
          self.users.unshift(user);
        })
        .catch((error) => {
          console.log('getRando', error);
        });
    },
  },
};
