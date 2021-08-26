/* global Vue, */
import 'https://unpkg.com/vue@2';
import Mesh from './datamesh.js';
import { arr1, arr2, arr3, junk1, junk2 } from './tablefrags.js';

const name = 'App';
export default new Vue({
  name,
  el: `#${name}`,
  components: {},
  data() {
    return {
      output: 'nothin',
      outputfrag: 'nothin',
      table: [],
      arr1,
      arr2,
      arr3,
      junk1,
      junk2,
    };
  },
  methods: {
    addToDB(arr) {
      this.outputfrag = (arr);
      Mesh.addTable(arr);

      this.output = Mesh.getJson();
      this.table = Mesh.getTable();

      console.dir(Mesh.getCsv());
      console.table(Mesh.getData());
    },
  },
  computed: {},
});
console.log(Mesh);
