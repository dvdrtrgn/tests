import ToneWrap from './libs/tonewrap.js';
import ScaleNotes from './libs/scaleNotes.js';

export default {
  props: ['modelValue'],
  template: /*html*/ `
    <button @click="play">Play {{ scale }}</button>
    <p> Offset Key: {{ offsets }} </p>
    <pre>
Notes for octave: {{ notes }}
    </pre>
  `,
  methods: {
    play() {
      ToneWrap.enable();
      ToneWrap.playSequence(this.song);
    },
  },
  computed: {
    scale() {
      return this.modelValue;
    },
    offsets() {
      return ScaleNotes.generateOffsetKey(this.scale);
    },
    notes() {
      return ScaleNotes.mapOffsetsToNotes(this.offsets);
    },
    song() {
      return this.notes.map((e) => e.fullname);
    },
  },
  created() {},
};
