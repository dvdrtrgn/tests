import ModesModel from './modes-model.js';
import NoteModel from './note-model.js';

const modulo = (n, m) => ((n % m) + m) % m;
const quotient = (n, m) => Math.floor(n / m);

/*
  take a named note and mode

    model intervals as offsets
    use midi as a universal note namer
    help identify the notes by index and interval

  return factory
    a function that takes a number pos/neg and calculates note

  TODO turn each mode scale into a function
*/

function getNoteFromOffset(rootIdx, offsetIdx = 0) {
  return new NoteModel(rootIdx + offsetIdx);
}

function mapOffsetsToNotes(offsets, rootIdx = 60) {
  return offsets.map((offsetIdx) => {
    return getNoteFromOffset(rootIdx, offsetIdx);
  });
}

function _fact_NoteFromIval(offsetKeys, rootIdx) {
  let modulus = offsetKeys.length - 1;

  return function (ivalNum) {
    if (ivalNum === 0) return new NoteModel('_');
    if (ivalNum > 0) ivalNum -= 1;

    let relOctave = quotient(ivalNum, modulus);
    let relRoot = rootIdx + relOctave * 12;

    let relInterval = modulo(ivalNum, modulus);
    let offIndex = offsetKeys[relInterval];

    return getNoteFromOffset(relRoot, offIndex);
  };
}

function modelScale(modeNom, rootNom = 'C4') {
  let offsetKeys = ModesModel.offsets[modeNom];
  let rootNote = new NoteModel(rootNom);

  return _fact_NoteFromIval(offsetKeys, rootNote.midi.index);
}

function testMajor(rootNom) {
  let major = modelScale('ionian', rootNom);
  console.log({ major });
  return major;
}

const API = {
  mapOffsetsToNotes,
  modelScale,
  major: testMajor(),
  _: {
    NoteModel,
    ModesModel,
  },
};

export default API;
