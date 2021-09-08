import ScalesIvals from './scales-ivals.js';
import NoteModel from './note-model.js';
import MidiModel from './midi-model.js';

/*

turn each mode scale into a function
  takes a named note
  parse the hell out of it

  gets the octave scale starting with that
  selects just the ones for that mode

  returns octave array of named notes
  or
  return scale function that takes a number pos/neg and give note
*/

function getOffsetsFor(scaleNom) {
  let cipher = ScalesIvals[scaleNom];
  let offsets = [];
  let lastnum = 0;

  for (let i = 0; i < cipher.length; i++) {
    lastnum += cipher[i];
    offsets.push(lastnum);
  }
  return offsets;
}

function getNoteFromOffset(rootIdx, offsetIdx) {
  let name = MidiModel.getName(offsetIdx + rootIdx);
  return new NoteModel(name);
}

function mapOffsetsToNotesAt(offsets, rootIdx = 60) {
  return offsets.map((offsetIdx) => {
    return getNoteFromOffset(rootIdx, offsetIdx);
  });
}

function wrapNumAt(num, limit) {
  let mod = Number(num) % Number(limit);
  while (mod < 0) mod += limit;
  return mod || 0; // scrapes any neg sign
}

function makeNoteGetter(offsetKey, rootIdx) {
  return function (ivalNum) {
    // turn ivalNum (interval) into offset (frets)
    let total = offsetKey.length - 1;

    let ival = wrapNumAt(ivalNum, total);
    let offNum = offsetKey[ival];

    let note = getNoteFromOffset(rootIdx, offNum);

    return note;
  };
}

function forMajor(noteNom = 'C4') {
  let offsetKey = getOffsetsFor('ionian');
  let rootNote = new NoteModel(noteNom);
  let rootIndex = MidiModel.getNumber(rootNote.fullname);

  let notes = mapOffsetsToNotesAt(offsetKey, rootIndex);

  console.log(notes);

  return makeNoteGetter(offsetKey, rootIndex);
}

const API = {
  forMajor,
  getNoteFromOffset,
  mapOffsetsToNotesAt,
  getOffsetsFor,
};

window.foo = API;

export default API;
