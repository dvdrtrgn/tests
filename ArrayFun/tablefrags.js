const clone = (obj) => JSON.parse(JSON.stringify(obj));

export const gen = [
  ['name', 'id', 'age', 'weight', 'Cool'],
  ['Susan', '3', '20', '120', true],
  ['John', '1', '21', '150', true],
  ['Bob', '2', '23', '90', false],
  ['Ben', '4', '20', '100', true],
];
export const hgt = [
  ['name', 'id', 'height'],
  ['Bob', '2', '50'],
  ['John', '1', '45'],
  ['Ben', '4', '43'],
  ['Susan', '3', '48'],
];
export const par = [
  ['name', 'id', 'parent'],
  ['Bob', '2', 'yes'],
  ['John', '1', 'yes'],
];
export const junk1 = [
  ['name', 'id', 'odd', 'Cool', 'ball'],
  ['Barb', '11', 'duck', true],
  ['Erik', '12', , , 'goof'],
];
export const junk2 = [
  ['ball', 'name', 'id'],
  ['Foo'],
  ['buster', 'Skittles', 12],
  ['sports', 'Barbara', 'a'],
  [, 'Bennny', 4],
];

const API = {
  gen,
  hgt,
  par,
  junk1,
  junk2,
  copy: (nom) => {
    if (API[nom]) {
      return clone(API[nom]);
    }
  },
};

export default API;
