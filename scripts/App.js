const template = /*html*/ `
  <main id="App" class="component">
    <legend>App</legend>
    <Bar message="A"/>
    <Bar message="B"/>
  </main>`;

import Bar from './Bar.js';

new Vue({
  el: '#App',
  template,
  components: {
    Bar,
  },
});
