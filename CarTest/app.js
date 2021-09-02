/*global Vue, */
const COMP = Vue.reactive({
  Aold: 25,
  Anew: 35,
  Bold: 8,
  Bnew: 10,
  distance: 1400,
  price: '3.50',
  metric: false,
  costAt(dpf) {
    return this.fuelUsed(dpf) * this.price;
  },
  fuelReduction(a, b) {
    return this.fuelUsed(a) - this.fuelUsed(b);
  },
  moneySaved(a, b) {
    return this.costAt(b) - this.costAt(a);
  },
  fuelUsed(dpf) {
    return this.distance / dpf;
  },
  percentDiff(car1, car2) {
    return (car2 / car1) * 100 - 100;
  },

  carA_fpd() {
    return (1 / this.Aold - 1 / this.Anew) * 100;
  },
  carB_fpd() {
    return (1 / this.Bold - 1 / this.Bnew) * 100;
  },
  pctDiff() {
    let dif = this.carB_fpd() - this.carA_fpd();
    let avg = (this.carB_fpd() + this.carA_fpd()) / 2;
    return Math.round((dif / avg) * 100) || 0;
  },
  winner() {
    if (!this.pctDiff()) return '';
    return this.pctDiff() > 0 ? 'B' : 'A';
  },
  key() {
    return {
      dpf: this.metric ? 'km/L' : 'MPG',
      fpd: this.metric ? 'L/km' : 'gal/mi',
      unitF: this.metric ? 'Ltr' : 'gal',
      unitD: this.metric ? 'km' : 'mile',
    };
  },
});

console.log(COMP);

const keepLessThan = (l, r) => (l >= r ? r - 1 : l);
const keepMoreThan = (l, r) => (l <= r ? r + 1 : l);

export default Vue.createApp({
  name: 'Cars',
  components: {},
  setup() {
    return COMP;
  },
  watch: {
    Aold() {
      this.Aold = keepLessThan(this.Aold, this.Anew);
    },
    Bold() {
      this.Bold = keepLessThan(this.Bold, this.Bnew);
    },
    Anew() {
      this.Anew = keepMoreThan(this.Anew, this.Aold);
    },
    Bnew() {
      this.Bnew = keepMoreThan(this.Bnew, this.Bold);
    },
  },
}).mount('#app');
