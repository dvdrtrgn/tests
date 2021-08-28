/*global Vue, */

const worker = new Worker('webworker.js');
const metakill = (k, v) => (k !== '_meta_' ? v : '...');

function read(obj, out = '') {
  let num = `#${obj._meta_.num}: `;
  let str = JSON.stringify(obj, metakill, '\t');
  let slug = obj.message;

  if (obj.log) {
    str = obj.message;
  } else if (slug) {
    if (obj[slug]) slug = `${slug} ${obj[slug]}`; // unwrap more?
    str = slug;
  }
  return num + str + '\n' + out;
}

new Vue({
  el: '#app',
  data() {
    return {
      delay: 0,
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
    eraser() {
      this.console = '';
    },
    pester() {
      worker.postMessage({ foo: 'pssst' });
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
      this.reporter = data._meta_.from;
      this.console = read(data, this.console);
    },
  },
  mounted() {
    worker.onmessage = this.handleMessage;
  },
  watch: {
    delay() {
      worker.postMessage({ msg: 'delay set', delay: this.delay });
    },
    multiplier() {
      this.publish();
    },
    multiplicand() {
      this.publish();
    },
  },
});
