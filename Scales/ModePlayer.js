import Scales from './libs/scales.js';

export default {
  props: ['modelValue'],
  template: /*html*/ `
    <button @click="play">Log {{ modelValue }}</button>
  `,
  methods: {
    play() {
      console.log('scale', this.scale);
    },
  },
  computed: {
    scale() {
      return Scales[this.modelValue];
    },
  },
};
