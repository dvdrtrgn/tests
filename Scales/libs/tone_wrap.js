/*global Tone, */
import '/node_modules/tone/build/Tone.js';
// import 'https://unpkg.com/tone@14.7.77/build/Tone.js';

const TICK = 0.3;
const HOLD = TICK / 2;

export default {
  Tone,
  synth: new Tone.Synth().toDestination(),
  enable() {
    Tone.start();
  },
  hitNote(note = 'C4') {
    const now = Tone.now();
    this.enable();

    this.synth.triggerAttack(note, now);
    this.synth.triggerRelease(now + HOLD);
  },
  playSequence(notes = ['C4', 'G4']) {
    const now = Tone.now();
    this.enable();

    for (let i = 0; i < notes.length; i++) {
      let delay = now + i * TICK;

      this.synth.triggerAttack(notes[i], delay);
      this.synth.triggerRelease(delay + HOLD);
    }
  },
};
