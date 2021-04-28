const template = /*html*/ `
<span class="bar component">
  <legend>Bar {{ message }}</legend>
  <Button message="A"/>
  <Button message="B"/>
  <Button message="C"/>
</span>`;

import Button from './Button.js';

export default {
  props: ['message'],
  template,
  data() {
    return {};
  },
  components: {
    Button,
  },
};
