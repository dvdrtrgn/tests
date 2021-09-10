import SongsModel from './libs/songs-model.js';

export default {
  template: /*html*/ `
    <label>
      Song name: <br>
      <select v-model="selected">
        <option value="" disabled>Select One</option>
        <option v-for="name in names">{{ name }}</option>
      </select>
    </label>
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
