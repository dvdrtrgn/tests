/* global Vue, */
import 'https://unpkg.com/vue@2';
import DB from './DB.js';
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
      DB.addTable(arr);

      this.output = DB.getJson();
      this.table = DB.getTable();

      console.dir(DB.getCsv());
      console.table(DB.getData());
    },
  },
  computed: {},
});
console.log(DB);
