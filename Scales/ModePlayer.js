import ScalesIvals from './libs/scales-ivals.js';
import ToneWrap from './libs/tonewrap.js';

export default {
  props: ['modelValue'],
  template: /*html*/ `
    <button @click="play">Log {{ modelValue }}</button>
  `,
  methods: {
    play() {
      ToneWrap.enable();
      console.log('scale', this.scale);
      ToneWrap.hitNote();
    },
  },
  computed: {
    scale() {
      return ScalesIvals[this.modelValue];
    },
  },
  created() {
    // console.clear();
    console.log('ToneWrap', ToneWrap);
  },
};
