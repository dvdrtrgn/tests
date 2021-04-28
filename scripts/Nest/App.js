const template = /*html*/ `
<main id="NestApp" class="component">
  <legend>NestApp</legend>
  <Bar message="A"/>
  <Bar message="B"/>
</main>`;

import 'https://unpkg.com/vue@2';
import Bar from './Bar.js';

new Vue({
  el: '#Nest',
  name: 'NestApp',
  template,
  components: {
    Bar,
  },
  data() {
    return {
      subvalue: '',
    };
  },
  methods: {
    Clog() {
      console.log('NestApp.Clog: ', this.subvalue);
    },
  },
});
