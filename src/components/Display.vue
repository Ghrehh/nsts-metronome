<template>
<div class="display">
  <h2 class='title'>Beats Per Minute</h2>
    <div class='button-container'>
      <p @click='decrementBPM' class='button decrement-button'>
        -
      </p>

      <p class='bpm'>{{ bpm }}</p>

      <p @click='incrementBPM' class='button increment-button'>
        +
      </p>
    </div>
  <slider 
    cssClass='bpm-slider'
    :on-value-change='changeBPM'
    :value='bpm'
    :min='10'
    :max='300'
  />
</div>
</template>

<script>
import Slider from './Slider'

export default {
  components: {
    Slider
  },
  computed: {
    displayHeaderText() {
      return `${this.$store.state.bpm} BPM`;
    },
    bpm() {
      return this.$store.state.bpm;
    }
  },
  methods: {
    decrementBPM() {
      this.$store.commit({
        type: 'changeBPM',
        bpm: this.$store.state.bpm - 1
      })
    },
    incrementBPM() {
      this.$store.commit({
        type: 'changeBPM',
        bpm: this.$store.state.bpm + 1
      })
    },
    changeBPM(event){
      this.$store.commit({
        type: 'changeBPM',
        bpm: event 
      })
    }
  },
};
</script>

<style lang="scss">
@import '../style/_colors.scss';

.display {
  background-color: $display-grey;
  max-width: 300px;
  padding: 25px 25px 20px;
  margin: auto;
  box-sizing: border-box;
  text-align: center;
  border-radius: 2px;
  margin-bottom: 26px;

  .title {
    color: $background-black;
    font-size: 23px;
    margin-bottom: 20px;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    .bpm {
      color: $blue;
      font-size: 35px;
      margin: 0 20px;
    }
  }

  .bpm-slider {
    .vue-slider-piecewise {
      background-color: $pale-blue;
    }

    .vue-slider-process {
      background-color: $blue !important;
    }

    .vue-slider-dot {
      background-color: $background-black;

      &:hover {
        background-color: $background-black-hover;
      }
    }
  }
}
</style>
