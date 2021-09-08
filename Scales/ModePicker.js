import ScalesIvals from './libs/scales-ivals.js';

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
      scales: ScalesIvals,
    };
  },
  computed: {
    names() {
      return Object.keys(this.scales);
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
