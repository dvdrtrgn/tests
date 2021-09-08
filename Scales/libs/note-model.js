// take standard name and model it for the parts

export default class NoteModel {
  constructor(start = 'C4') {
    let parts = start.match(/^([A-G])(#)?(\d)$/);
    if (!parts) throw 'bad note';

    // this.name = parts[1] + (parts[2] || '');
    this.octave = parts[3];
    // this.sharp = Boolean(parts[2]);
    this.fullname = start;
    // this.shortname = parts[1];
  }
}
