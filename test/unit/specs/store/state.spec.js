import state from '@/store/state.js';
import newSoundPlayer from '@/lib/metronome/SoundPlayer';

describe('store state', () => {
  it('has the correct default state', () => {
    expect(state).toEqual({
      bpm: 120,
      metronomeOn: false,
      beatsPerMeasure: 4,
      currentBeat: 0,
      optionsOpen: false,
      volume: 10,
      soundPlayer: newSoundPlayer()
    });
  });
});
