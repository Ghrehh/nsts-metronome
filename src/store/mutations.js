import { newMetronome } from '@/lib/metronome';

export default {
  changeBPM(state, payload) {
    state.bpm = payload.bpm;
  },

  changeBeatsPerMeasure(state, payload) {
    state.beatsPerMeasure = payload.beatsPerMeasure;
  },

  toggleMetronome(state) {
    state.metronomeOn = !state.metronomeOn;

    if (state.metronomeOn) {
      state.metronome = newMetronome(this.state);
      state.metronome.start()
    } else {
      state.metronome.stop();
    }
  }
};
