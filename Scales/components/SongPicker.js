import SongsModel from './libs/songs-model.js';

export default {
  template: /*html*/ `
    <select v-model="selected">
      <option value="" disabled>Select One</option>
      <option v-for="name in names">{{ name }}</option>
    </select>
  `,
  props: ['songProp'],
  emits: ['update:songProp'],
  computed: {
    names() {
      return SongsModel.names;
    },
    selected: {
      get() {
        return this.songProp;
      },
      set(val) {
        this.$emit('update:songProp', val);
      },
    },
  },
};
