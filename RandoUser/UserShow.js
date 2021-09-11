const template = /*html*/ `
  <img v-if="user" :src="user.picture.medium"/>
  <pre> {{user}} </pre>
`;

export default {
  template,
  props: ['user'],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
