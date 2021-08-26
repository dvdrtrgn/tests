/* global Vue, */
// import { createApp } from 'https://unpkg.com/vue@3.2.6/dist/vue.esm-browser.js';

import Mesh from './datamesh.js';
import { arr1, arr2, arr3, junk1, junk2 } from './tablefrags.js';

console.log('Mesh', Mesh);

const name = 'App';
export default Vue.createApp({
  name,
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
      recordsTotal: 0,
    };
  },
  methods: {
    addToDB(arr) {
      this.outputfrag = arr;
      Mesh.addTable(arr);

      this.csv = Mesh.getCsv();
      this.json = Mesh.getJson();
      this.table = Mesh.listArrays();
      this.recordsTotal = this.table.length - 1;

      console.table(Mesh.listObjects());
    },
  },
  computed: {},
}).mount(`#${name}`);
