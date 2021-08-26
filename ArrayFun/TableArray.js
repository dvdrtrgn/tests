const template = /* html */ `
  <table>
    <tr v-for="row in table">
      <td v-for="cell in row">{{ cell }}</td>
    </tr>
  </table>
`;

export default {
  template,
  props: {
    table: {
      type: Array,
      default: [],
    },
  },
};
