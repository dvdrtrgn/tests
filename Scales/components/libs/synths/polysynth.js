export default {
  volume: 0,
  detune: 0,
  portamento: 0,
  envelope: {
    attack: 0.005,
    attackCurve: 'linear',
    decay: 0.1,
    decayCurve: 'exponential',
    release: 1,
    releaseCurve: 'exponential',
    sustain: 0.3,
  },
  oscillator: {
    partialCount: 0,
    partials: [],
    phase: 0,
    type: 'triangle',
  },
};
