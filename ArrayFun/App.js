/* global Vue, */
// import { createApp } from 'https://unpkg.com/vue@3.2.6/dist/vue.esm-browser.js';

import Mesh from './datamesh.js';
import frags from './tablefrags.js';
import TableArray from './TableArray.js';

console.log('Mesh', Mesh);

const name = 'App';
export default Vue.createApp({
  name,
  components: { TableArray },
  data() {
    return {
      csv: '',
      json: '',
      outputfrag: [],
      table: [[null]],
    };
  },
  methods: {
    previewFrag(nom) {
      let frag = frags[nom];
      let hint = frag.join(' | ');
      this.outputfrag = frag;

      console.log('hint', hint);
    },
    addToDB(nom) {
      let frag = frags[nom];

      this.outputfrag = frag;
      Mesh.addTable(this.outputfrag);

      this.csv = Mesh.getCsv(); // string
      this.json = Mesh.getJson(); // string
      this.table = Mesh.listArrays(); // "table" is a 2d array

      console.table(Mesh.listObjects());
    },
  },
  computed: {
    recordsTotal() {
      return this.table.length - 1;
    },
  },
}).mount(`#${name}`);
