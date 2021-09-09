// prettier-ignore
const Ciphers = {
  // major
  ionian: [0, 2, 2, 1, 2, 2, 2, 1],
  lydian: [0, 2, 2, 2, 1, 2, 2, 1],
  myxolydian: [0, 2, 2, 1, 2, 2, 1, 2],
  // minor
  dorian:   [0, 2, 1, 2, 2, 2, 1, 2],
  phrygian: [0, 1, 2, 2, 2, 1, 2, 2],
  aeolian:  [0, 2, 1, 2, 2, 1, 2, 2],
  // variants
  locrian:  [0, 1, 2, 2, 1, 2, 2, 2],
  harmonic: [0, 2, 1, 2, 2, 1, 3, 1],
  melodic:  [0, 2, 1, 2, 2, 2, 2, 1],
  // dbl harmonic
  arabic: [0, 1, 3, 1, 2, 1, 3, 1],
  gypsy:  [0, 2, 1, 3, 1, 1, 3, 1],
  // blue
  blues:  [0, 3, 2, 2, 3, 2],
  blues1: [0, 3, 2, 1, 1, 3, 2],
  blues2: [0, 3, 2, 1, 1, 3, 1, 1],
  blues3: [0, 2, 1, 2, 1, 1, 3, 2],
  // odd
  half: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  whole: [0, 2, 2, 2, 2, 2, 2],
};

function octaveOffsets(scaleNom) {
  let cipher = Ciphers[scaleNom];
  let offsets = [];
  let lastnum = 0;

  for (let i = 0; i < cipher.length; i++) {
    lastnum += cipher[i];
    offsets.push(lastnum);
  }

  return offsets;
}

export default {
  names: Object.keys(Ciphers),
  octaveOffsets,
};
