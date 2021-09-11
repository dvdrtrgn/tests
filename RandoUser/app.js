/*global Vue, */

const template = /*html*/ `
  <img v-if="user" :src='user.picture.large'/>
  <button @click="getData"> get more </button>
  <pre> {{user}} </pre>
`;

const app = Vue.createApp({
  template,
  data() {
    return { user: null };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let self = this;
      return fetch('https://randomuser.me/api')
        .then((res) => res.json())
        .then(({ results }) => {
          let user = results[0];
          console.log('user', user);
          self.user = user;
        })
        .catch((error) => {
          console.log('getData', error);
        });
    },
  },
});
app.mount('#app');
