import ToneWrap from './libs/tonewrap.js';
import ScaleNotes from './libs/scaleNotes.js';

export default {
  props: ['modelValue'],
  template: /*html*/ `
    <button @click="play">Play {{ scale }}</button>
    <p> Offset Key ({{ scale }}): {{ offsets }} </p>
    <pre> Notes in scale: {{ notes }} </pre>
  `,
  methods: {
    play() {
      ToneWrap.enable();
      ToneWrap.playSequence(this.notes);
    },
  },
  computed: {
    scale() {
      return this.modelValue;
    },
    offsets() {
      return ScaleNotes.getOffsetsFor(this.scale);
    },
    notes() {
      let notes = ScaleNotes.mapOffsetsToNotesAt(this.offsets);
      return notes.map((e) => e.fullname);
    },
  },
  created() {
    // console.clear();
    console.log('ToneWrap', ToneWrap);
    console.log('ScaleNotes', ScaleNotes);
  },
};
