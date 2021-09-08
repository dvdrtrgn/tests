import MidiModel from './midi-model.js';

// take standard name and model it for the parts

export default class NoteModel {
  constructor(start = 'C4') {
    if (typeof start === 'number') {
      start = MidiModel.getName(start);
    }
    let parts = start.match(/^([A-G])(#)?(\d)$/);
    if (!parts) throw 'bad note';

    this.fullname = start;
    this.octave = parts[3];
    this.index = MidiModel.getNumber(start);

    // this.name = parts[1] + (parts[2] || '');
    // this.shortname = parts[1];
    // this.sharp = Boolean(parts[2]);
  }
}
