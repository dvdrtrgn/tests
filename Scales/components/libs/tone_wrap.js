/*global Tone, */
import '/node_modules/tone/build/Tone.js';
// import 'https://unpkg.com/tone@14.7.77/build/Tone.js';
import ScaleNotes from './scaleNotes.js';

const TICK = 0.3;
const HOLD = TICK / 2;

const API = {
  Tone,
  synth: new Tone.Synth().toDestination(),
  enable() {
    Tone.start();
  },
  hitNote(note = 'C4', delay = 0) {
    const now = Tone.now();
    this.enable();

    let start = now + delay;
    let duration = start + HOLD;

    this.synth.triggerAttack(note, start);
    this.synth.triggerRelease(duration);
  },
  playSequence(notes = ['C4', 'G4']) {
    for (let i = 0; i < notes.length; i++) {
      this.hitNote(notes[i], i * TICK);
    }
  },
};

window._ = {
  ScaleNotes,
  wrap: API,
};

export default API;
