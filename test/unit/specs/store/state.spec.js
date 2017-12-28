import state from '@/store/state.js';

describe('store state', () => {
  it('has the correct default state', () => {
    expect(state).toEqual({
      bpm: 120,
      metronomeOn: false,
      beatsPerMeasure: 4,
      currentBeat: 0
    });
  });
});
