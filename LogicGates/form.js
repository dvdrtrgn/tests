/*global Vue, */

import tests from './tests.js';
import 'https://unpkg.com/vue@2';
import Gates from './gates.js';

const name = 'GatesForm';
// const gateNames = 'and or xor nand nor xnor';
const gateNames = 'and nand or nor xor xnor';

const App = new Vue({
  name,
  el: '#' + name,
  components: {},
  data() {
    return {
      gates: gateNames.split(' '),
      choosen: 'and',
      testRez: '',
      left: true,
      right: true,
    };
  },
  methods: {
    runTests() {
      this.testRez = tests.testAll();
    },
  },
  computed: {
    result() {
      const gate = Gates[this.choosen];
      const rez = gate(this.left, this.right);
      return Boolean(rez);
    },
  },
});

window[name] = App;
