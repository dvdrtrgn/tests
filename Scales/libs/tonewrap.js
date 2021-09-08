/*global Tone, */
import '/node_modules/tone/build/Tone.js';
// import 'https://unpkg.com/tone@14.7.77/build/Tone.js';

export default {
  Tone,
  synth: new Tone.Synth().toDestination(),
  enable() {
    Tone.start();
  },
  hitNote(note = 'C4') {
    const now = Tone.now();
    this.synth.triggerAttack(note, now);
    this.synth.triggerRelease(now + 1);
  },
};
