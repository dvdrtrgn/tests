/*global Vue, */

const flip = Math.random() > 0.5;

const RootComponent = {
  template: /*html*/ `<h1 :[attr]="value">see console</h1>`,
  data() {
    return {
      attr: flip ? 'class' : 'style',
      value: flip ? 'red' : 'font-style: italic;',
    };
  },
};

const app = Vue.createApp(RootComponent);
const vm = app.mount('#app');

console.log({
  app,
  vm,
});
