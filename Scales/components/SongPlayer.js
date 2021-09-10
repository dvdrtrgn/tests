import SongsModel from './libs/songs-model.js';
import Toner from './libs/tone_wrap.js';

export default {
  props: ['songProp', 'modeProp'],
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
      return this.songProp;
    },
    mode() {
      return this.modeProp;
    },
    notes() {
      return SongsModel.getNotesFor(this.song, this.mode);
    },
    names() {
      return this.notes.map((e) => e.name);
    },
  },
  created() {},
};