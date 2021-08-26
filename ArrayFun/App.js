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
      preFrag: [],
      freshFrag: [],
      table: [[null]],
    };
  },
  methods: {
    previewFrag(nom) {
      let frag = frags[nom];
      let hint = frag.join(' | ');

      this.preFrag = frag;
    },
    addToDB(nom) {
      let frag = frags[nom];

      this.freshFrag = frag;
      Mesh.addTable(this.freshFrag);

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
    fragActions() {
      return {
        click: (evt) => this.addToDB(evt.target.name),
        mouseover: (evt) => this.previewFrag(evt.target.name),
      };
    },
  },
}).mount(`#${name}`);
