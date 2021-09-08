/*global Vue, */
import ModePicker from './ModePicker.js';

const RootComponent = {
  template: /*html*/ `<div>
    <h1>see console</h1>
    <ModePicker v-model="selectedMode" />
  </div>`,
  data() {
    return {
      selectedMode: 'half',
    };
  },
  created() {},
};

const app = Vue.createApp(RootComponent);
app.component('ModePicker', ModePicker);
const vm = app.mount('#app');

console.log({
  app,
  vm,
});
