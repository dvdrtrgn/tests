import Database from './database.js';
import { nullish, rowhash, deepstring } from './datautils.js';

const PKEY = 'id';
const BASE = new Database(PKEY); // primary key

const json = () => JSON.stringify(BASE.records);
const readableJson = () => JSON.stringify(BASE.records, null, 2);

// PUBLIC

function applyTable(arr) {
  const [keys, ...data] = arr;

  data.forEach((row, i) => {
    try {
      const entry = rowhash(row, keys);
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

function generateTable() {
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

const getCsv = () => generateTable().map(deepstring).join('\n');
const getJson = () => readableJson();
const listObjects = () => JSON.parse(json());
const colSort = (val) => {
  if (!nullish(val)) BASE.sort = Boolean(val);
  return BASE.sort;
};

export default {
  applyTable,
  colSort,
  getCsv,
  getJson,
  generateTable,
  listObjects,
  redactTable,
};
