<template>
<div class="page">
  <site-header />
  <display />

  <time-signatures :time-signatures='[]'/>

  <div class='buttons-container'>
    <div v-on:click='toggleMetronomeOn' :class='toggleButtonCSS'>
      <metronome-svg />
      <p class='text'>{{ toggleButtonText }}</p>
    </div>

    <p class='button edit-button' v-if='false'>
      EDIT
    </p>
  </div>
</div>
</template>

<script>
import SiteHeader from './SiteHeader';
import Display from './Display';
import TimeSignatures from './TimeSignatures';
import MetronomeSVG from './MetronomeSVG';

export default {
  components: {
    SiteHeader,
    Display,
    TimeSignatures,
    'metronome-svg': MetronomeSVG
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
    }
  },
  methods: {
    toggleMetronomeOn() {
      this.$store.commit({
        type: 'toggleMetronome',
      })
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';
@import '../style/_mixins.scss';

.page {
  padding: 20px 20px 40px;
  background-color: $background-black;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
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
    font-size: 40px;
    padding: 12px 19px;
    display: flex;
    align-items: center;
    position: relative;

    .text {
      margin-left: 8px;
    }
  }

  .toggle-metronome-button.start {
    background-color: $green;
    color: white;
    @include box-shadow(0, 5px, $green-hover);

    &:hover {
      @media (min-width: 450px) {
        top: 2px;
        @include box-shadow(0, 3px, $green-hover);
      }
    }

    &:active {
      position: relative;
      top: 5px;
      @include box-shadow(0, 0px, $green-hover);
    }
  }

  .toggle-metronome-button.stop {
    background-color: $red;
    color: white;
    @include box-shadow(0, 5px, $red-hover);
    position: relative;

    &:hover {
      @media (min-width: 450px) {
        top: 2px;
        @include box-shadow(0, 3px, $red-hover);
      }
    }

    &:active {
      position: relative;
      top: 5px;
      @include box-shadow(0, 0px, $red-hover);
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
