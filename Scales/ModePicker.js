import Scales from './libs/scales.js';

export default {
  template: /*html*/ `
    <select v-model="selected">
      <option value="" disabled>Select One</option>
      <option v-for="name in names">{{ name }}</option>
    </select>
  `,
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      scales: Scales,
    };
  },
  computed: {
    names() {
      return Object.keys(Scales);
    },
    selected: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
  },
};
