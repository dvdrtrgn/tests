/*global Vue, */
import Store from './store.js';

import SynthPicker from './components/SynthPicker.js';
import SongPicker from './components/SongPicker.js';
import SongPlayer from './components/SongPlayer.js';
import ModePicker from './components/ModePicker.js';
import ModePlayer from './components/ModePlayer.js';
// console.clear();

const RootComponent = {
  template: /*html*/ `<div>
    <h1>Try the modes</h1>
    <SynthPicker v-model:modelSynth="selectedSynth" />
    <SongPicker v-model:modelSong="selectedSong" />
    <ModePicker v-model:modelMode="selectedMode" />
    <hr>
    <SongPlayer :mode="selectedMode" :song="selectedSong" />
    <ModePlayer :mode="selectedMode" />
  </div>`,
  data() {
    return Store.init({
      selectedMode: 'ionian',
      selectedSong: 'mary',
      selectedSynth: 'default',
    });
  },
  created() {
    console.log('Store', Store);
  },
  watch: {
    selectedMode: () => Store.save(),
    selectedSong: () => Store.save(),
    selectedSynth: () => Store.save(),
  },
};

const app = Vue.createApp(RootComponent);
app.component('SynthPicker', SynthPicker);
app.component('SongPicker', SongPicker);
app.component('SongPlayer', SongPlayer);
app.component('ModePicker', ModePicker);
app.component('ModePlayer', ModePlayer);
const vm = app.mount('#app');

console.log({
  app,
  vm,
});
