const template = /*html*/ `
<main id="App" class="component">
  <legend>App</legend>
  <Bar message="A"/>
  <Bar message="B"/>
  <BaseInput
    message="BaseInput" placeholder="Hoist Data to App"
    @keyup.enter="Clog" v-model="subvalue"
  />
</main>`;

import 'https://unpkg.com/vue@2';
import Bar from './Bar.js';
import BaseInput from './BaseInput.js';

new Vue({
  el: '#App',
  template,
  components: {
    Bar,
    BaseInput,
  },
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
