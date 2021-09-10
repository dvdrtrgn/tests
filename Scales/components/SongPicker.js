import SongsModel from './libs/songs-model.js';

export default {
  template: /*html*/ `
    <select v-model="selected">
      <option value="" disabled>Select One</option>
      <option v-for="name in names">{{ name }}</option>
    </select>
  `,
  props: ['modelSong'],
  emits: ['update:modelSong'],
  computed: {
    names() {
      return SongsModel.names;
    },
    selected: {
      get() {
        return this.modelSong;
      },
      set(val) {
        this.$emit('update:modelSong', val);
      },
    },
  },
};
