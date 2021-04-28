const template = /*html*/ `
<main id="TransApp" class="component">
  <legend>TransApp</legend>
  <BaseInput
    message="BaseInput" placeholder="Hoist Data to TransApp"
    @keyup.enter="Clog" v-model="subvalue"
  />
</main>`;

import 'https://unpkg.com/vue@2';
import BaseInput from './BaseInput.js';

new Vue({
  el: '#Trans',
  name: 'TransApp',
  template,
  components: {
    BaseInput,
  },
  data() {
    return {
      subvalue: '',
    };
  },
  methods: {
    Clog() {
      console.log('TransApp.Clog: ', this.subvalue);
    },
  },
});
