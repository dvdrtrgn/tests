const template = /*html*/ `
<main id="App" class="component">
  <legend>App</legend>
</main>`;

import 'https://unpkg.com/vue@2';

new Vue({
  el: '#App',
  name: 'MainApp',
  template,
  components: {},
  data() {
    return {
      subvalue: '',
    };
  },
  methods: {
    Clog() {
      console.log('App.Clog: ', this.subvalue);
    },
  },
});
