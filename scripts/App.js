const name = 'App';
const template = /*html*/ `
<main id="${name}" class="component">
  <legend @click="Clog">${name}</legend>
</main>`;

import 'https://unpkg.com/vue@2';

const App = new Vue({
  name,
  template,
  el: '#App',
  components: {},
  data() {
    return {
      message: '',
    };
  },
  methods: {
    Clog() {
      console.log(name + '.Clog: ', this.message);
    },
  },
});
