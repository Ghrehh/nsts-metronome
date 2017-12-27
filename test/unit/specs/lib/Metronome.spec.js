import { Metronome } from '@/lib/metronome';

jest.useFakeTimers();

describe('Metronome', () => {
  const state = { bpm: 120, beatsPerMeasure: 4 };

  describe('starting the metronome', () => {
    const player = { play: jest.fn(), playAccent: jest.fn() };
    const metronome = new Metronome(state, player);

    metronome.start()

    /* A minute minus half a second, the fist hit is immediate
    so we only need 119 further hits. */
    jest.runTimersToTime(59500);

    it('changes the on state to true', () => {
      expect(metronome.on).toEqual(true);
    });

    it('plays the unaccented hit the correct number of times', () => {
      expect(player.play).toHaveBeenCalledTimes(90);
    });

    it('plays the accented hit the correct number of times', () => {
      expect(player.playAccent).toHaveBeenCalledTimes(30);
    });

    jest.clearAllTimers();
  });

  describe('starting and stopping the metronome', () => {
    const player = { play: jest.fn(), playAccent: jest.fn() };
    const metronome = new Metronome(state, player);

    metronome.start()
    metronome.stop()

    jest.runTimersToTime(1000);

    it('changes the on state to false', () => {
      expect(metronome.on).toEqual(false);
    });

    it('doesn\'t play any unaccented notes', () => {
      expect(player.play).toHaveBeenCalledTimes(0);
    });

    // The initial hit is immediate and not on a timer.
    it('plays the accented hit once', () => {
      expect(player.playAccent).toHaveBeenCalledTimes(1);
    });

    jest.clearAllTimers();
  });
});
