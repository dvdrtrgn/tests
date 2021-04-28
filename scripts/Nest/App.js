const name = 'NestApp';
const template = /*html*/ `
<main id="${name}" class="component">
  <legend @click="Clog">${name}</legend>
  <Bar message="A"/>
  <Bar message="B"/>
</main>`;

import 'https://unpkg.com/vue@2';
import Bar from './Bar.js';

const NestApp = new Vue({
  name,
  template,
  el: '#Nest',
  components: {
    Bar,
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
