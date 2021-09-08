/*global Tone, */
import '/node_modules/tone/build/Tone.js';
// import 'https://unpkg.com/tone@14.7.77/build/Tone.js';

const TICK = 0.3;

export default {
  Tone,
  synth: new Tone.Synth().toDestination(),
  enable() {
    Tone.start();
  },
  hitNote(note = 'C4') {
    const now = Tone.now();
    this.synth.triggerAttack(note, now);
    this.synth.triggerRelease(now + TICK);
  },
  playSequence(notes = ['C4', 'G4']) {
    const now = Tone.now();
    for (let i = 0; i < notes.length; i++) {
      this.synth.triggerAttack(notes[i], now + i * TICK);
      this.synth.triggerRelease(now + i * TICK + TICK);
    }
  },
};
