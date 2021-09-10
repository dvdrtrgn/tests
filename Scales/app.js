/*global Vue, */
import SongPicker from './components/SongPicker.js';
import SongPlayer from './components/SongPlayer.js';
import ModePicker from './components/ModePicker.js';
import ModePlayer from './components/ModePlayer.js';
// console.clear();

const RootComponent = {
  template: /*html*/ `<div>
    <h1>see console</h1>
    <SongPicker v-model:songProp="selectedSong" />
    <ModePicker v-model:modeProp="selectedMode" />
    <hr>
    <SongPlayer v-model:songProp="selectedSong" />
    <ModePlayer v-model:modeProp="selectedMode" />
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
