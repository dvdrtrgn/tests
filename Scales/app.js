/*global Vue, */
import ModePicker from './components/ModePicker.js';
import ModePlayer from './components/ModePlayer.js';
// console.clear();

const RootComponent = {
  template: /*html*/ `<div>
    <h1>see console</h1>
    <ModePicker v-model="selectedMode" />
    <ModePlayer v-model="selectedMode" />
  </div>`,
  data() {
    return {
      selectedMode: 'ionian',
    };
  },
  created() {},
};

const app = Vue.createApp(RootComponent);
app.component('ModePicker', ModePicker);
app.component('ModePlayer', ModePlayer);
const vm = app.mount('#app');

console.log({
  app,
  vm,
});
