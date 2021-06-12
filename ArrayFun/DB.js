const DB = {};
const PK = 'id'; // primary key

const dedupe = (arr) => arr.filter((e, i) => arr.indexOf(e) === i);
const valify = (arg) => (arg != null ? arg : null);

function getKeys(arr) {
  return dedupe(arr.map(Object.keys).flat());
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
  const rows = Object.values(DB);
  const cols = getKeys(rows);
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
  return JSON.stringify(DB, null, 2);
}

export default { addTable, getTable, getCsv, getJson, database: DB };
