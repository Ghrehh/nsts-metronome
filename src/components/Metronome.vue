<template>
<div class="page">
  <options-menu :visible='optionsOpen' />
  <div class='main-page'>
    <site-header />
    <display />

    <time-signatures :time-signatures='[]'/>

    <div class='buttons-container'>
      <div v-on:click='toggleMetronomeOn' :class='toggleButtonCSS'>
        <metronome-svg />
        <p class='text'>{{ toggleButtonText }}</p>
      </div>

      <div v-on:click='toggleOptionsOpen' :class='optionsButtonCSS'>
        <gear-svg />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SiteHeader from './SiteHeader';
import Display from './Display';
import TimeSignatures from './TimeSignatures';
import MetronomeSVG from './MetronomeSVG';
import GearSVG from './GearSVG';
import OptionsMenu from './OptionsMenu';

export default {
  components: {
    SiteHeader,
    Display,
    TimeSignatures,
    OptionsMenu,
    'metronome-svg': MetronomeSVG,
    'gear-svg': GearSVG
  },
  computed: {
    metronomeOn() {
      return this.$store.state.metronomeOn;
    },
    optionsOpen() {
      return this.$store.state.optionsOpen;
    },
    toggleButtonText() {
      return this.$store.state.metronomeOn ? 'STOP' : 'START';
    },
    toggleButtonCSS() {
      const modifier = this.$store.state.metronomeOn ? 'stop' : 'start';
      return `button toggle-metronome-button ${modifier}`;
    },
    optionsButtonCSS() {
      const modifier = this.$store.state.optionsOpen ? 'active' : '';
      return `button options-button ${modifier}`;
    }
  },
  methods: {
    toggleMetronomeOn() {
      this.$store.commit({
        type: 'toggleMetronome'
      })
    },
    toggleOptionsOpen() {
      this.$store.commit({
        type: 'toggleOptionsOpen'
      })
    }
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
  animation: fadeIn .5s;
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
    margin-right: 10px;

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

  .options-button {
    background-color: $purple;
    display: flex;
    position: relative;
    @include box-shadow(0, 5px, $purple-hover);
    padding: 10px 2px;

    &:hover {
      @media (min-width: 450px) {
        top: 2px;
        @include box-shadow(0, 3px, $purple-hover);
      }
    }

    &:active, &.active {
      position: relative;
      top: 5px;
      @include box-shadow(0, 0px, $purple-hover);
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
