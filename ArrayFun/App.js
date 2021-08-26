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
      hintFrag: '',
      preFrag: [],
      freshFrag: [],
      table: [[null]],
      sortCols: false,
    };
  },
  methods: {
    previewFrag(nom) {
      let frag = frags.copy(nom);
      let hint = frag.join(' | ');

      this.preFrag = frag;
      this.hintFrag = hint;
    },
    addToDB(nom) {
      let frag = frags.copy(nom);

      this.freshFrag = frag;
      Mesh.applyTable(this.freshFrag);
      this.update();

      console.table(Mesh.listObjects());
    },
    wipeFromDB(nom) {
      let frag = frags.copy(nom);

      this.freshFrag = frag;
      Mesh.redactTable(this.freshFrag);
      this.update();
    },
    update() {
      Mesh.colSort(this.sortCols);

      this.csv = Mesh.getCsv(); // string
      this.json = Mesh.getJson(); // string
      this.table = Mesh.listArrays(); // "table" is a 2d array
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
    fragWash() {
      return {
        click: (evt) => this.wipeFromDB(evt.target.name),
      };
    },
  },
  watch: {
    sortCols() {
      this.update();
    },
  },
}).mount(`#${name}`);
