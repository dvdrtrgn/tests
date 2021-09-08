import ScalesIvals from './scales-ivals.js';
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

function generateOffsetKey(scaleNom) {
  let cipher = ScalesIvals[scaleNom];
  let offsets = [];
  let lastnum = 0;

  for (let i = 0; i < cipher.length; i++) {
    lastnum += cipher[i];
    offsets.push(lastnum);
  }
  return offsets;
}

function getNoteFromIndex(idx = 60) {
  return new NoteModel(idx);
}

function getNoteFromOffset(rootIdx, offsetIdx = 0) {
  return getNoteFromIndex(offsetIdx + rootIdx);
}

function mapOffsetsToNotes(offsets, rootIdx = 60) {
  return offsets.map((offsetIdx) => {
    return getNoteFromOffset(rootIdx, offsetIdx);
  });
}

function factorizeNoteFromInterval(offsetKey, rootIdx) {
  let total = offsetKey.length - 1;

  return function (ivalNum) {
    let relOctave = quotient(ivalNum, total);
    let relRoot = rootIdx + relOctave * 12;

    let relInterval = modulo(ivalNum, total);
    let offIndex = offsetKey[relInterval];

    return getNoteFromOffset(relRoot, offIndex);
  };
}

function modelScale(modeNom, rootNom = 'C4') {
  let offsetKey = generateOffsetKey(modeNom);
  let rootNote = new NoteModel(rootNom);

  return factorizeNoteFromInterval(offsetKey, rootNote.index);
}

function testMajor(rootNom = 'C4') {
  let major = modelScale('ionian', rootNom);
  console.log({ major });
  return major;
}

const API = {
  generateOffsetKey,
  mapOffsetsToNotes,
  testMajor,
};

export default API;
