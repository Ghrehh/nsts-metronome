import Metronome from '@/lib/Metronome';

const mockHowl = jest.fn();

jest.mock('howler', () => {
  class MockHowl {
    constructor() {
      this.play = mockHowl;
    }
  };

  return { Howl: MockHowl }
});

describe('stuff', () => {
  const state = {
    bpm: 100
  };


  const metronome = new Metronome(state);
  metronome.start()

  it('stuff', () => {
    expect(metronome.on).toEqual(true);
  });

  it('stuff', () => {
    expect(mockHowl).toBeCalledWith();
  });
});
