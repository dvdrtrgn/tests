import Database from './database.js';

const DB = new Database('id'); // primary key

const nullish = (val) => val == undefined;

const makeObjWithKeys = (row, keys) => {
  const entry = {};
  row.forEach((v, i) => (entry[keys[i]] = v));
  return entry;
};

// PUBLIC

function addTable(arr) {
  const [keys, ...data] = arr;

  data.forEach((row, i) => {
    try {
      const entry = makeObjWithKeys(row, keys);
      DB.mergeRecordObj(entry);
    } catch (err) {
      console.error(`Tried adding "${row[0]}"...`, err);
    }
  });
}

function listArrays() {
  // 2d array (Asv: array separated values)
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
const colSort = (val) => {
  if (!nullish(val)) DB.sort = Boolean(val);
  return DB.sort;
};

export default { addTable, listArrays, getCsv, getJson, listObjects, colSort };
