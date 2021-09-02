/*global Vue, */

const RootComponent = {
  template: '<h1>see console</h1>',
};

const app = Vue.createApp(RootComponent);
const vm = app.mount('#app');

console.log({
  app,
  vm,
});
