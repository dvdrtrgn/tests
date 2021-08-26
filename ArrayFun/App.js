/* global Vue, */
import 'https://unpkg.com/vue@2';
import Mesh from './datamesh.js';
import { arr1, arr2, arr3, junk1, junk2 } from './tablefrags.js';

console.log('Mesh', Mesh);

const name = 'App';
export default new Vue({
  name,
  el: `#${name}`,
  components: {},
  data() {
    return {
      csv: '',
      json: '',
      outputfrag: null,
      table: [[null]],
      arr1,
      arr2,
      arr3,
      junk1,
      junk2,
    };
  },
  methods: {
    addToDB(arr) {
      this.outputfrag = arr;
      Mesh.addTable(arr);

      this.csv = Mesh.getCsv();
      this.json = Mesh.getJson();
      this.table = Mesh.listArrays();

      console.table(Mesh.listObjects());
    },
  },
  computed: {},
});
