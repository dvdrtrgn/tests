import Database from './database.js';

const DB = new Database('id'); // primary key

const makeObjWithKeys = (row, keys) => {
  const entry = {};
  row.forEach((v, i) => (entry[keys[i]] = v));
  return entry;
};

// PUBLIC

function addTable(arr) {
  const [keys, ...data] = arr;

  data.forEach((row, i) => {
    const entry = makeObjWithKeys(row, keys);
    DB.mergeRecordObj(entry);
  });
}

function listArrays() { // 2d array (Asv: array separated values)
  const rows = DB.records;
  const keys = DB.keys;
  const table = [keys];

  rows.forEach(function (rec) {
    const row = [];
    keys.forEach((k, i) => (row[i] = rec[k]));
    table.push(row);
  });

  return table;
}

const getCsv = () => listArrays().join('\n');
const getJson = () => DB.readableJson;
const listObjects = () => JSON.parse(DB.json);

export default { addTable, listArrays, getCsv, getJson, listObjects };
