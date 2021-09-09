/*global Vue, */
import SongPicker from './components/SongPicker.js';
import SongPlayer from './components/SongPlayer.js';
import ModePicker from './components/ModePicker.js';
import ModePlayer from './components/ModePlayer.js';
// console.clear();

const RootComponent = {
  template: /*html*/ `<div>
    <h1>see console</h1>
    <SongPicker v-model="selectedSong" />
    <SongPlayer v-model="selectedSong" />
    <hr>
    <ModePicker v-model="selectedMode" />
    <ModePlayer v-model="selectedMode" />
  </div>`,
  data() {
    return {
      selectedMode: 'ionian',
      selectedSong: 'mary',
    };
  },
  created() {},
};

const app = Vue.createApp(RootComponent);
app.component('SongPicker', SongPicker);
app.component('SongPlayer', SongPlayer);
app.component('ModePicker', ModePicker);
app.component('ModePlayer', ModePlayer);
const vm = app.mount('#app');

console.log({
  app,
  vm,
});
