import Database from './database.js';

const DB = new Database('id'); // primary key
const valify = (arg) => (arg != null ? arg : null);
const makeObjWithKeys = (row, keys) => {
  const entry = {};
  row.forEach((v, i) => (entry[keys[i]] = v));
  return entry;
};

function addTable(arr) {
  const [keys, ...data] = arr;

  data.forEach((row, i) => {
    const entry = makeObjWithKeys(row, keys);
    DB.mergeRecord(entry);
  });
}

function getTable() {
  const rows = DB.getRecords();
  const cols = DB.getKeys();
  const table = [cols];

  rows.forEach(function (rec) {
    const row = [];
    cols.forEach((k, i) => (row[i] = valify(rec[k])));
    table.push(row);
  });

  return table;
}

function getCsv() {
  return getTable().join('\n');
}

function getJson() {
  return DB.getJson();
}

function getData() {
  return JSON.parse(getJson());
}

export default { addTable, getTable, getCsv, getJson, getData };
