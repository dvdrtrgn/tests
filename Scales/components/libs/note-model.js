import MidiModel from './midi-model.js';

// take standard name (or number) and reveal the properies
const fromNumber = (num) => MidiModel.getName(num);

export default class NoteModel {
  constructor(arg = 'C4') {
    let rest = arg === '_';
    if (typeof arg === 'number') arg = fromNumber(arg);

    let parts = arg.match(/^([A-G])(#)?(-?\d)$/);
    if (!parts && !rest) throw `NoteModel, bad note ${arg}`;
    if (rest) parts = ['_', false, null]

    this.name = arg;
    this.midi = {
      index: MidiModel.getNumber(arg),
      octave: Number(parts[3]),
    };

    // this.barename = parts[1] + (parts[2] || '');
    // this.shortname = parts[1];
    // this.sharp = Boolean(parts[2]);
  }
}
