const dedupe = (arr) => arr.filter((e, i) => arr.indexOf(e) === i);

function makeRecord(self, pk) {
  return (self._db[pk] = { [self._pk]: null });
}

class Database {
  constructor(primaryKey) {
    this._db = {}; // data holder
    this._ks = []; // keys holder
    this._pk = primaryKey;
    console.log('construct', this);
  }

  getRecordById(pk) {
    if (!pk)
      throw `Database! must have a primary key of "${this._pk}" to get/set record`;
    let record = this._db[pk];
    return record || makeRecord(this, pk);
  }

  mergeRecordObj(obj) {
    // row object
    const record = this.getRecordById(obj[this._pk]);
    Object.assign(record, obj);

    this._ks = dedupe([...this._ks, ...Object.keys(record)]);
  }

  get keys() {
    return this._ks.slice().sort((a, b) => {
      if (b === this._pk) return 1; // force primary key to start
      return a < b ? -1 : 1;
    });
  }
  get records() {
    return Object.values(this._db);
  }
  get json() {
    return JSON.stringify(this.records);
  }
  get readableJson() {
    return JSON.stringify(this.records, null, 2);
  }
}

export default Database;
