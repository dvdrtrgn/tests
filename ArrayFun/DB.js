const DB = {};
const PK = 'id'; // primary key

const getObjVals = (obj) => Object.values(obj);
const reducer = (a, b) => (a.includes(b) ? a : (a.push(b), a));
const uniqs = (arr) => arr.reduce(reducer, []);
const value = (arg) => (arg != null ? arg : null);

function getKeys(arr) {
  return uniqs(arr.map(Object.keys).flat());
}

function getDBRecord(id) {
  return DB[id] || (DB[id] = { [PK]: null });
}

function mergeToDB(obj) {
  const record = getDBRecord(obj[PK]);
  Object.assign(record, obj);
}

function makeObjWithKeys(row, keys) {
  const entry = {};
  row.forEach((v, i) => (entry[keys[i]] = v));
  return entry;
}

function addTable(arr) {
  const [keys, ...data] = arr;

  data.forEach((row, i) => {
    const entry = makeObjWithKeys(row, keys);
    mergeToDB(entry);
  });

  return DB;
}

function getTable() {
  const rows = getObjVals(DB);
  const cols = getKeys(rows);
  const table = [cols];

  rows.forEach(function (rec) {
    const row = [];
    cols.forEach((k, i) => (row[i] = value(rec[k])));
    table.push(row);
  });

  return table;
}

function getCsv() {
  return getTable().join('\n');
}

function getJson() {
  return JSON.stringify(DB, null, 2);
}

export default { addTable, getTable, getCsv, getJson, database: DB };
