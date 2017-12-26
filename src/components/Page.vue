<template>
<div class="page">
  <metronome-off-display v-if='!metronomeOn' />
  <metronome-on-display v-if='metronomeOn' />
  <time-signatures :time-signatures='timeSignatures'/>
  <div class='buttons-container'>
    <p
      v-on:click='toggleMetronomeOn'
      :class='toggleButtonCSS'
    >
      {{ toggleButtonText }}
    </p>
    <p
      class='button edit-button'
    >
      EDIT
    </p>
  </div>
</div>
</template>

<script>
import MetronomeOffDisplay from './display/MetronomeOffDisplay';
import MetronomeOnDisplay from './display/MetronomeOnDisplay';
import Modal from './Modal';
import TimeSignatures from './TimeSignatures';

export default {
  components: {
    MetronomeOffDisplay,
    MetronomeOnDisplay,
    Modal,
    TimeSignatures
  },
  computed: {
    metronomeOn() {
      return this.$store.state.metronomeOn;
    },
    toggleButtonText() {
      return this.$store.state.metronomeOn ? 'STOP' : 'START';
    },
    toggleButtonCSS() {
      const modifier = this.$store.state.metronomeOn ? 'stop' : 'start';
      return `button toggle-metronome-button ${modifier}`;
    },
    timeSignatures() {
      return this.$store.state.timeSignatures;
    }
  },
  methods: {
    toggleMetronomeOn() {
      this.$store.dispatch({
        type: 'toggleMetronome',
      })
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

.page {
  padding: 100px 20px 0;
  background-color: $background-black;
  height: 100%;
  text-align: center;
}

.change-bpm-modal {
  .modal-inner {
    background-color: $purple;
  }
}

.buttons-container {
  display: flex;
  max-width: 300px;
  margin: auto;
  justify-content: center;

  .button {
    padding: 10px 15px;
  }

  .toggle-metronome-button {
    margin-right: 10px;
  }

  .toggle-metronome-button.start {
    background-color: $green;
    color: white;

    &:hover {
      background-color: $green-hover;
    }
  }

  .toggle-metronome-button.stop {
    background-color: $red;
    color: white;

    &:hover {
      background-color: $red-hover;
    }
  }

  .edit-button {
    background-color: $purple;
    color: white;

    &:hover {
      background-color: $purple-hover;
    }
  }
}
</style>
