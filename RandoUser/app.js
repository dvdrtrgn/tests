/*global Vue, */
import UserCollect from './components/UserCollect.js';

const template = /*html*/ `
  <UserCollect></UserCollect>
`;

const app = Vue.createApp({
  template,
  components: { UserCollect },
  data() {
    return {};
  },
});
export default app.mount('#app');
