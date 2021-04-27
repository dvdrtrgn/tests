const template = /*html*/ `
  <span class="btn component">
    <button
      @click="click"
      :class="{ active: active }">
        Btn {{ message }}
    </button>
  </span>`;

export default Vue.component('Btn', {
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
});
