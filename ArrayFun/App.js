/* global Vue, */
import 'https://unpkg.com/vue@2';
import DB from './DB.js';

const arr1 = [
  ['name', 'id', 'age', 'weight', 'Cool'],
  ['Susan', '3', '20', '120', true],
  ['John', '1', '21', '150', true],
  ['Bob', '2', '23', '90', false],
  ['Ben', '4', '20', '100', true],
];
const arr2 = [
  ['name', 'id', 'height'],
  ['Bob', '2', '50'],
  ['John', '1', '45'],
  ['Ben', '4', '43'],
  ['Susan', '3', '48'],
];
const arr3 = [
  ['name', 'id', 'parent'],
  ['Bob', '2', 'yes'],
  ['John', '1', 'yes'],
];
const junk1 = [
  ['id', 'name', 'odd'],
  ['11', 'Barb', 'duck'],
  ['12', 'Erik', 'couple'],
];
const junk2 = [
  ['id', 'name', 'ball'],
  ['11', 'Barbara'],
  ['12', 'Skittles', 'buster'],
];

const name = 'App';
export default new Vue({
  name,
  el: `#${name}`,
  components: {},
  data() {
    return {
      output: '',
      arr1,
      arr2,
      arr3,
      junk1,
      junk2,
    };
  },
  methods: {
    addToDB(arr) {
      const data = DB.addTable(arr);
      this.output = JSON.stringify(data, null, 2);
      console.table(data);
      console.dir(DB.getTable().join('\n')); // CSV
    },
  },
  computed: {},
});
