const name = 'DynaApp';
const template = /*html*/ `
<main id="${name}" class="component">
  <legend @click="Clog">${name}</legend>
  <Component :is="dynamicComponent" />
</main>`;

import 'https://unpkg.com/vue@2';
import dynacomp from './dynacomp.js';

const DynaApp = new Vue({
  name,
  template,
  el: '#Dyna',
  data() {
    return {
      message: '#' + name,
    };
  },
  computed: {
    dynamicComponent() {
      return dynacomp(this);
    },
  },
  methods: {
    Clog() {
      console.log(name + '.Clog: ', this.message);
    },
  },
});

setTimeout(() => {
  DynaApp.message += ' timeout';
}, 3333);
