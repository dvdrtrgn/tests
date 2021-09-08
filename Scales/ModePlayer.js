import ToneWrap from './libs/tonewrap.js';
import ScaleNotes from './libs/scaleNotes.js';

export default {
  props: ['modelValue'],
  template: /*html*/ `
    <button @click="play">Log {{ modelValue }}</button>
    <p> Offset Key: {{ offsets }} </p>
  `,
  methods: {
    play() {
      ToneWrap.enable();
      ToneWrap.hitNote();
    },
  },
  computed: {
    scale() {
      return this.modelValue;
    },
    offsets() {
      return ScaleNotes.getOffsetsFor(this.scale);
    },
  },
  watch: {
    scale() {
      console.log('offsets', this.offsets);
    },
  },
  created() {
    // console.clear();
    console.log('ToneWrap', ToneWrap);
    console.log('ScaleNotes', ScaleNotes);
  },
};
