import { newMetronome } from '@/lib/metronome';

export default {
  changeBPM(state, payload) {
    state.bpm = payload.bpm;
  },

  changeBeatsPerMeasure(state, payload) {
    state.beatsPerMeasure = payload.beatsPerMeasure;
  },

  changeCurrentBeat(state, payload) {
    state.currentBeat = payload.currentBeat;
  },

  toggleOptionsOpen(state) {
    state.optionsOpen = !state.optionsOpen;
  },

  changeVolume(state, payload) {
    state.volume = payload.volume;
  },

  toggleMetronome(state) {
    state.metronomeOn = !state.metronomeOn;

    if (state.metronomeOn) {
      state.metronome = newMetronome(this);
      state.metronome.start()
    } else {
      state.metronome.stop();
      state.currentBeat = 0;
    }
  }
};
