const template = /*html*/ `
  <span class="bar component">
    <legend>Bar {{ message }}</legend>
    <Btn message="A"/>
    <Btn message="B"/>
    <Btn message="C"/>
  </span>`;

import Btn from './Btn.js';

export default Vue.component('Bar', {
  props: ['message'],
  template,
  data() {
    return {};
  },
  components: {
    Btn,
  },
});
