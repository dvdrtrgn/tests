const template = /* html */ `
<table>
  <tbody>
    <tr v-for="row in table">
      <td v-for="cell in row">{{ cell }}</td>
    </tr>
  </tbody>
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
