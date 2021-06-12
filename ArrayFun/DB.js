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

function addTable(arr) {
  const keys = arr[0].slice();
  arr.forEach((row, i) => {
    if (i) {
      const entry = readRowWithKeys(row, keys);
      mergeToDB(entry);
    }
  });
  return DB;
}

export default { addTable, database: DB };
