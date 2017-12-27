import Vue from 'vue';
import Vuex from 'vuex';
import Metronome from '../lib/Metronome';

Vue.use(Vuex);

const state = {
  bpm: 120,
  metronomeOn: false,
  timeSignatures: [{ numerator: 4, denominator: 4 }],
  beatsPerMeasure: 4
};

const mutations = {
  changeBPM(state, payload) {
    state.bpm = payload.amount;
  },

  toggleMetronome(state) {
    state.metronomeOn = !state.metronomeOn;
  },

  changeBeatsPerMeasure(state, payload) {
    state.beatsPerMeasure = payload.beatsPerMeasure;
  }
};

const actions = {
  toggleMetronome(context) {
    context.commit('toggleMetronome');

    if (state.metronomeOn) {
      this.state.metronome = new Metronome(this.state);
      this.state.metronome.start()
    } else {
      this.state.metronome.stop();
    }
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
