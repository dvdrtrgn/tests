let SORT_KEYS = false;

const dedupe = (arr) => arr.filter((e, i) => arr.indexOf(e) === i);

function makeRecord(self, uid) {
  return (self._db[uid] = { [self._pk]: null });
}

class Database {
  constructor(primaryKey) {
    this._db = {}; // data holder
    this._ks = []; // keys holder
    this._pk = primaryKey;
    console.log('construct', this);
  }

  getRecordById(uid) {
    if (!uid)
      throw `Database! entry must have a key of '${this.uid}' to get/set record`;
    let record = this._db[uid];
    return record || makeRecord(this, uid);
  }

  mergeRecordObj(obj) {
    // row object
    const record = this.getRecordById(obj[this._pk]);
    Object.assign(record, obj);

    this._ks = dedupe([...this._ks, ...Object.keys(record)]);
  }

  get uid() {
    return this._pk;
  }
  get keys() {
    const copy = this._ks.slice();
    return copy.sort((a, b) => {
      if (b === this.uid) return 1; // force primary key to start
      if (SORT_KEYS) return a < b ? -1 : 1;
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

  get sort() {
    return SORT_KEYS;
  }
  set sort(bool) {
    SORT_KEYS = Boolean(bool);
  }
}

export default Database;
