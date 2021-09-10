const Key = 'scales';

const Store = {
  state: {},
  init(obj) {
    obj = obj || {};
    Object.assign(this.state, obj);
    return this.load();
  },
  save() {
    localStorage.setItem(Key, JSON.stringify(this.state));
    return this.state;
  },
  load() {
    const str = localStorage.getItem(Key) || '{}';
    Object.assign(this.state, JSON.parse(str));
    return this.state;
  },
};

export default Store;
