/*global Tone, */
import '/node_modules/tone/build/Tone.js';
// import 'https://unpkg.com/tone@14.7.77/build/Tone.js';

import amsynth from './amsynth.js';
import fmsynth from './fmsynth.js';
import monosynth from './monosynth.js';
import polysynth from './polysynth.js';

export default {
  get(arg) {
    switch (arg) {
      case 'am':
        return new Tone.AMSynth(amsynth).toDestination();
      case 'fm':
        return new Tone.FMSynth(fmsynth).toDestination();
      case 'mono':
        return new Tone.MonoSynth(monosynth).toDestination();
      case 'poly':
        return new Tone.PolySynth(polysynth).toDestination();
      default:
        return new Tone.Synth().toDestination();
    }
  },
};
