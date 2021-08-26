import Database from './database.js';

const PKEY = 'id';
const BASE = new Database(PKEY); // primary key

const nullish = (val) => val == undefined;

const makeObjWithKeys = (row, keys) => {
  const entry = {};
  row.forEach((v, i) => (entry[keys[i]] = v));
  return entry;
};

// PUBLIC

function applyTable(arr) {
  const [keys, ...data] = arr;

  data.forEach((row, i) => {
    try {
      const entry = makeObjWithKeys(row, keys);
      BASE.mergeRecordObj(entry);
    } catch (err) {
      console.error(`Tried adding "${row[0]}"...`, err);
    }
  });
}

function redactTable(arr) {
  let mask = arr[0].indexOf(PKEY);

  for (let row = 1; row < arr.length; row++) {
    arr[row].forEach((e, i, a) => {
      if (i !== mask) a[i] = '';
    });
  }
  applyTable(arr);
}

function listArrays() {
  // 2d array (Asv: array separated values)
  const rows = BASE.records;
  const keys = BASE.keys;
  const table = [keys];

  rows.forEach(function (rec) {
    const row = [];
    keys.forEach((k, i) => (row[i] = rec[k]));
    table.push(row);
  });

  return table;
}

const getCsv = () => listArrays().join('\n');
const getJson = () => BASE.readableJson;
const listObjects = () => JSON.parse(BASE.json);
const colSort = (val) => {
  if (!nullish(val)) BASE.sort = Boolean(val);
  return BASE.sort;
};

export default {
  applyTable,
  colSort,
  getCsv,
  getJson,
  listArrays,
  listObjects,
  redactTable,
};
