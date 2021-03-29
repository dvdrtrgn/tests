// Barb fun

/*

a function is like a robot that answers a single question
(and it needs a detail or two, in order to give an answer)
the details are called arguments

24 questions
6 binary operators (two args) each run thru 4 tests
1 unary (single arg, not, meaning reverse)

A = B   (means: give to A the value of B)
  vs
A === B (means: check if A is exactly equal to B)


REMEMBER
  "zero based" numbers, so 0 means first item
  an array is a list            (grocery list)
  an object is a robust array   (contact list)

  An object is a list of variables
  AKA: an associative array,  a list that associates keys with values
  AKA: key-value pairs means: labels and contents

  Boolean/binary logic:
    0 is false
    1 is true

*/

var not = (a) => Number(!a); // you know what not means
var and = (a, b) => Number(a && b); // this, too!

var Gates = { // electrical engineers that called logic operations "gate" functions
  not: not,
  and: and,
  // compose not/and operations
  nand: (a, b) => not(and(a, b)),
  nor: (a, b) => and(not(a), not(b)),
  or: (a, b) => not(and(not(a), not(b))),
  // derive from above
  xor: (a, b) => and(Gates.or(a, b), not(and(a, b))),
  // derive from above, again!
  xnor: (a, b) => not(Gates.xor(a, b)),
};

var answersArray = {
  and: [0, 0, 0, 1],
  nand: [1, 1, 1, 0],
  or: [0, 1, 1, 1],
  nor: [1, 0, 0, 0],
  xor: [0, 1, 1, 0], // equivalence (basically "unequal" 😊)
  xnor: [1, 0, 0, 1], // equivalence (basically "equals" 😊)
}

function assert(a, b, name, answer) {
  var gate = Gates[name];
  var outcome = gate(a, b) === answer;
  // make fragments into a sentence
  var sentence = `${a} <${name}> ${b} ${outcome ? 'is' : 'isn’t'} ${answer}`;

  console.log(sentence);
}

function testGate(gate) {
  var answers = answersArray[gate];

  assert(0, 0, gate, answers[0]);
  assert(0, 1, gate, answers[1]);
  assert(1, 0, gate, answers[2]);
  assert(1, 1, gate, answers[3]);
}

function testAll() {
  var keys = Object.keys(answersArray);

  keys.forEach(i => testGate(i));
}
testAll()
