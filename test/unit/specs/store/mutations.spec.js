import mutations from '@/store/mutations';
import { newMetronome } from '@/lib/metronome';

jest.mock('@/lib/metronome', () => ({ newMetronome: jest.fn() }));

describe('store mutations', () => {
  describe('changeBPM', () => {
    const state = { bpm: 100 };
    const payload = { bpm: 120 }

    mutations.changeBPM(state, payload);

    it('changes the bpm state', () => {
      expect(state).toEqual({ bpm: 120 });
    });
  });

  describe('changeBeatsPerMeasure', () => {
    const state = { beatsPerMeasure: 100 };
    const payload = { beatsPerMeasure: 120 }

    mutations.changeBeatsPerMeasure(state, payload);

    it('changes the beatsPerMeasure state', () => {
      expect(state).toEqual({ beatsPerMeasure: 120 });
    });
  });

  describe('changeCurrentBeat', () => {
    const state = { currentBeat: 0 };
    const payload = { currentBeat: 1 }

    mutations.changeCurrentBeat(state, payload);

    it('changes the currentBeat state', () => {
      expect(state).toEqual({ currentBeat: 1 });
    });
  });


  describe('changeVolume', () => {
    const changeVolumeMock = jest.fn();

    const state = {
      volume: 10,
      soundPlayer: { changeVolume: changeVolumeMock }
    };

    const payload = { volume: 5 }

    mutations.changeVolume(state, payload);

    it('changes the volume state', () => {
      expect(state.volume).toEqual(5);
    });

    it('calls changeVolume on the SoundPlayer', () => {
      expect(changeVolumeMock).toBeCalledWith(5);
    });
  });

  describe('toggleOptionsOpen', () => {
    describe('on', () => {
      const state = { optionsOpen: false };
      mutations.toggleOptionsOpen(state);

      it('toggles the optionsOpen state', () => {
        expect(state.optionsOpen).toEqual(true);
      });
    });

    describe('off', () => {
      const state = { optionsOpen: true };
      mutations.toggleOptionsOpen(state);

      it('toggles the optionsOpen state', () => {
        expect(state.optionsOpen).toEqual(false);
      });
    });
  });

  describe('toggleMetronome', () => {
    describe('on', () => {
      const startMock = jest.fn();
      newMetronome.mockReturnValue({ start: startMock })

      const state = { metronomeOn: false };

      mutations.toggleMetronome(state);

      it('changes the metronomeOn state', () => {
        expect(state.metronomeOn).toEqual(true);
      });

      it('sets a metronome attribute in the state', () => {
        expect(state.metronome).toBeDefined();
      });

      it('calls the start method on the metronome instance', () => {
        expect(startMock).toHaveBeenCalledTimes(1);
      });
    });

    describe('off', () => {
      const stopMock = jest.fn();
      newMetronome.mockReturnValue({ stop: stopMock })

      const state = {
        metronomeOn: true,
        metronome: newMetronome(),
        currentBeat: 3
      };

      mutations.toggleMetronome(state);

      it('changes the metronomeOn state', () => {
        expect(state.metronomeOn).toEqual(false);
      });

      it('changes the currentBeat state to its default', () => {
        expect(state.currentBeat).toEqual(0);
      });

      it('calls the stop method on the metronome instance', () => {
        expect(stopMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
