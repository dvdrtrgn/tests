import ModesModel from './libs/modes-model.js';

export default {
  template: /*html*/ `
    <label>
      Mode name: <br>
      <select v-model="selected">
        <option value="" disabled>Select One</option>
        <option v-for="name in names">{{ name }}</option>
      </select>
    </label>
  `,
  props: ['modelMode'],
  emits: ['update:modelMode'],
  computed: {
    names() {
      return ModesModel.names;
    },
    selected: {
      get() {
        return this.modelMode;
      },
      set(val) {
        this.$emit('update:modelMode', val);
      },
    },
  },
};
