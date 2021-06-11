const name = 'App';

import Vue from 'https://unpkg.com/vue@2';

const DB = {};

function getRecord(name) {
  return DB[name] || (DB[name] = {});
}

function mergeToDB(obj) {
  const record = getRecord(obj.name);
  Object.assign(record, obj);
}

function readRowWithKeys(row, keys) {
  const entry = {};
  row.forEach((v, i) => (entry[keys[i]] = v));
  return entry;
}

function addToDB(arr) {
  const keys = arr[0].slice();

  arr.forEach(function (row, i) {
    if (i) {
      const entry = readRowWithKeys(row, keys);
      mergeToDB(entry);
    }
  });

  return DB;
}

const App = new Vue({
  name,
  el: `#${name}`,
  components: {},
  data() {
    return {
      arr1: [
        ['name', 'id', 'age', 'weight', 'Cool'],
        ['Susan', '3', '20', '120', true],
        ['John', '1', '21', '150', true],
        ['Bob', '2', '23', '90', false],
        ['Ben', '4', '20', '100', true],
      ],
      arr2: [
        ['name', 'id', 'height'],
        ['Bob', '2', '50'],
        ['John', '1', '45'],
        ['Ben', '4', '43'],
        ['Susan', '3', '48'],
      ],
      arr3: [
        ['name', 'id', 'parent'],
        ['Bob', '2', 'yes'],
        ['John', '1', 'yes'],
      ],
    };
  },
  methods: {
    addToDB,
    Clog() {
      console.log(name + '.Clog: ', this.message);
    },
  },
  computed: {},
});

export default App;
