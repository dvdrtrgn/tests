const template = /*html*/ `
<label class="component">
  {{ message }}
  <input
    v-bind="$attrs"
    @input="$emit('hoist', $event.target.value)"
    v-on="$listeners"
  >
</label>`;

export default {
  template,
  inheritAttrs: false,
  model: {
    event: 'hoist',
  },
  props: ['message'],
};
