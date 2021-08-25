const not = (a) => Number(!a);
const and = (a, b) => Number(a && b);

const Gates = {
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

export default Gates;
