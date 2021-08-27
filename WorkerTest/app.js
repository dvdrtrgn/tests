const worker = new Worker('webworker.js');

function dump(data) {
  if (data.log) console.log(data.log);
  else console.log(data);
}

const app = new Vue({
  el: '#app',
  data() {
    return {
      multiplier: 1,
      multiplicand: 1,
      product: 1,
    };
  },
  methods: {
    handleMessage({ data }) {
      dump(data);
      if ('product' in data) {
        this.product = data.product;
      }
    },
    pester() {
      worker.postMessage({});
    },
    publish() {
      worker.postMessage({
        factors: [this.multiplier, this.multiplicand],
      });
    },
  },
  mounted() {
    worker.onmessage = this.handleMessage;
  },
  watch: {
    multiplier() {
      this.publish();
    },
    multiplicand() {
      this.publish();
    },
  },
});
