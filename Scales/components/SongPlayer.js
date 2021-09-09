import SongsModel from './libs/songs-model.js';
import Toner from './libs/tone_wrap.js';

export default {
  props: ['modelValue'],
  template: /*html*/ `
    <button @click="play">Play {{ song }}</button>
    <p>
Notes for song: {{ names }}
    </p>
  `,
  methods: {
    play() {
      Toner.playSequence(this.names);
    },
  },
  computed: {
    song() {
      return this.modelValue;
    },
    notes() {
      return SongsModel[this.song];
    },
    names() {
      return this.notes.map((e) => e.name);
    },
  },
  created() {},
};
