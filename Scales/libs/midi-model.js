// Prove note fullname/number conversion

const ALLNAMES = 'C C# D D# E F F# G G# A A# B'.split(' ');
const byNumber = [];
const byName = {};

let counter = 12;

// generate note list from 12 to 131
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 12; j++) {
    let name = `${ALLNAMES[j]}${i}`;
    byNumber[counter] = name;
    byName[name] = counter;
    counter++;
  }
}

function ensureValue(val, input) {
  if (val == null) throw `bad Midi input: ${input}`;
  return val;
}

const API = {
  getName: (num) => ensureValue(byNumber[num], num),
  getNumber: (nom) => ensureValue(byName[nom], nom),
};

// window.MIDI = API

export default API;
