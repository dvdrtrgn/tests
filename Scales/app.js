/*global Vue, */

const RootComponent = {
  template: /*html*/ `<div>
    <h1>see console</h1>
    foo:{{ foo }} / bar:{{ bar }} / baz:{{ baz }}
  </div>`,
  data() {
    return {
      foo: 1,
      bar: 2,
    };
  },
  created() {
    this.baz = 3;
  },
};

const app = Vue.createApp(RootComponent);
const vm = app.mount('#app');

console.log({
  app,
  vm,
});
