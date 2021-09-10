// Provide note fullname/number conversion

const ALLNAMES = 'C C# D D# E F F# G G# A A# B'.split(' ');
const byIndex = ['C-4'];
const byNom = {'C-4': 0};
let counter = 12;

// generate note lists from 12 to 131
function init() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 12; j++) {
      let nom = `${ALLNAMES[j]}${i}`;

      byIndex[counter] = nom;
      byNom[nom] = counter;

      counter++;
    }
  }
  return true;
}

function ensureValue(val, key) {
  if (key === 'C-4') val = 0;
  if (val == null) throw `bad Midi key: ${key}`;
  return val;
}

const API = {
  inited: init(),
  getName: (num) => ensureValue(byIndex[num], num),
  getNumber: (nom) => ensureValue(byNom[nom], nom),
};

export default API;
