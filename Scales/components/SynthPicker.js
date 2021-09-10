import Synths from './libs/synths/index.js';
import Toner from './libs/tone_wrap.js';

export default {
  template: /*html*/ `
    <label>
      Synth voice: <br>
      <select v-model="selected">
        <option value="" disabled>Select One</option>
        <option v-for="name in names">{{ name }}</option>
      </select>
    </label>
  `,
  props: ['modelSynth'],
  emits: ['update:modelSynth'],
  methods: {
    play() {
      Toner.playSequence();
      // this.$nextTick(() => {});
    },
  },
  computed: {
    names() {
      return Synths.names;
    },
    selected: {
      get() {
        return this.modelSynth;
      },
      set(val) {
        this.$emit('update:modelSynth', val);
      },
    },
  },
  watch: {
    selected() {
      Toner.setSynth(this.selected);
      this.play();
    },
  },
  created() {
    // this.play();
  },
};
