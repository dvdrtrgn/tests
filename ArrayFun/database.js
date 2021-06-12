const dedupe = (arr) => arr.filter((e, i) => arr.indexOf(e) === i);

class Database {
  constructor(pk) {
    this._db = {};
    this._pk = pk;
    this._keys = [];
    console.log(this);
  }

  getJson() {
    return JSON.stringify(this.getRecords(), null, 2);
  }
  getKeys() {
    return this._keys.slice().sort((a, b) => {
      if (b === this._pk) return 1;
      else return a < b ? -1 : 1;
    });
  }
  getRecord(id) {
    return this._db[id] || (this._db[id] = { [this._pk]: null });
  }
  getRecords() {
    return Object.values(this._db);
  }

  mergeRecord(obj) {
    const record = this.getRecord(obj[this._pk]);
    Object.assign(record, obj);

    this._keys = dedupe([...this._keys, ...Object.keys(record)]);
  }
}

export default Database;
