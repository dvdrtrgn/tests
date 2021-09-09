import ModesModel from './libs/modes-model.js';
import ScaleNotes from './libs/scaleNotes.js';
import Toner from './libs/tone_wrap.js';

export default {
  props: ['modelValue'],
  template: /*html*/ `
    <button @click="play">Play {{ scale }}</button>
    <p> Offset Keys: {{ offsets }} </p>
    <pre>
Notes for octave: {{ notes }}
    </pre>
  `,
  methods: {
    play() {
      Toner.playSequence(this.names);
    },
  },
  computed: {
    scale() {
      return this.modelValue;
    },
    offsets() {
      return ModesModel.offsets[this.scale];
    },
    notes() {
      return ScaleNotes.mapOffsetsToNotes(this.offsets);
    },
    names() {
      return this.notes.map((e) => e.name);
    },
  },
  created() {},
};
