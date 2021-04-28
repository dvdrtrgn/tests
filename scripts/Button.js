const template = /*html*/ `
<button
  @click="click"
  :class="{ active: active }">
    Button {{ message }}
</button>`;

export default {
  props: ['message'],
  data() {
    return {
      active: false,
    };
  },
  template,
  methods: {
    click() {
      this.toggle();
    },
    toggle() {
      this.active = !this.active;
    },
  },
};
