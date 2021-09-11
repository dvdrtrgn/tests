import SongsModel from './libs/songs-model.js';
import Toner from './libs/tone_wrap.js';

export default {
  props: ['song', 'mode'],
  template: /*html*/ `
    <button @click="play">Play {{ song }}</button>
    <p>
      Intervals to play: <br>
      <small>{{ ivals.join(' / ') }}</small>
    </p>
    <p>
      Notes for song: <br>
      <small>{{ names.join(' / ') }}</small>
    </p>
  `,
  methods: {
    play() {
      Toner.playSequence(this.names);
    },
  },
  computed: {
    ivals() {
      return SongsModel.getIvalsFor(this.song);
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
