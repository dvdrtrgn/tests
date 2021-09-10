import ModesModel from './libs/modes-model.js';

export default {
  template: /*html*/ `
    <select v-model="selected">
      <option value="" disabled>Select One</option>
      <option v-for="name in names">{{ name }}</option>
    </select>
  `,
  props: ['modeProp'],
  emits: ['update:modeProp'],
  computed: {
    names() {
      return ModesModel.names;
    },
    selected: {
      get() {
        return this.modeProp;
      },
      set(val) {
        this.$emit('update:modeProp', val);
      },
    },
  },
};
