import Gates from './gates.js';

let rez = '';
const answersArray = {
  and: [0, 0, 0, 1],
  nand: [1, 1, 1, 0],
  or: [0, 1, 1, 1],
  nor: [1, 0, 0, 0],
  xor: [0, 1, 1, 0], // equivalence (basically "unequal" 😊)
  xnor: [1, 0, 0, 1], // equivalence (basically "equals" 😊)
};

function output(arg) {
  // console.log(arg);
  rez += arg + '\n';
}

function assert(a, b, name, answer) {
  const gate = Gates[name];
  const outcome = gate(a, b) === answer;
  // make fragments into a sentence
  const sentence = `(${a} ${name} ${b}) ${outcome ? '=' : 'isn’t'} ${answer}`;

  output(sentence);
}

function testGate(gate) {
  const answers = answersArray[gate];

  assert(0, 0, gate, answers[0]);
  assert(0, 1, gate, answers[1]);
  assert(1, 0, gate, answers[2]);
  assert(1, 1, gate, answers[3]);
  rez += '\n';
}

function testAll() {
  if (!rez) {
    const keys = Object.keys(answersArray);

    keys.forEach((i) => testGate(i));
  } else {
    rez = '';
  }

  return rez;
}

export default { testAll };
