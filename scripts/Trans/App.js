const name = 'TransApp';
const template = /*html*/ `
<main id="${name}" class="component">
  <legend @click="Clog">${name}</legend>
  <BaseInput
    message="BaseInput" placeholder="Hoist to ${name}"
    @keyup.enter="Clog" v-model="message"
  />
</main>`;

import 'https://unpkg.com/vue@2';
import BaseInput from './BaseInput.js';

const TransApp = new Vue({
  name,
  template,
  el: '#Trans',
  components: {
    BaseInput,
  },
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
