const worker = new Worker('webworker.js');

function read(obj, out) {
  let str;
  if (obj.log) str = obj.log;
  else str = obj;
  return JSON.stringify(str, null, 2) + (out || '');
}

const app = new Vue({
  el: '#app',
  data() {
    return {
      delay: 1,
      multiplier: 1,
      multiplicand: 1,
      product: 1,
      console: '',
      reporter: '',
    };
  },
  methods: {
    handleMessage({ data }) {
      this.dump(data);
      if ('product' in data) this.product = data.product;
    },
    pester() {
      worker.postMessage({ msg: 'pssst' });
    },
    linger() {
      this.delay = 999;
    },
    publish() {
      worker.postMessage({
        factors: [this.multiplier, this.multiplicand],
      });
    },
    dump(data) {
      this.reporter = data.from;
      delete data.from;
      this.console = read(data, this.console);
    },
  },
  mounted() {
    worker.onmessage = this.handleMessage;
  },
  watch: {
    delay() {
      worker.postMessage({ delay: this.delay });
    },
    multiplier() {
      this.publish();
    },
    multiplicand() {
      this.publish();
    },
  },
});
