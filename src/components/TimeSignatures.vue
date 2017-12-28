<template>
  <div class='time-signatures-container'>
    <h2 class='title'>Beats Per Measure</h2>

    <div class='button-container'>
      <p @click='decrementBeatsPerMeasure' class='button decrement-button'>
        -
      </p>

      <p class='beats-per-measure'>{{ beatsPerMeasure }}</p>

      <p @click='incrementBeatsPerMeasure' class='button increment-button'>
        +
      </p>
    </div>

    <slider 
      cssClass='beats-per-measure-slider'
      :on-value-change='changeBeatsPerMeasure'
      :value='beatsPerMeasure'
      :min='1'
      :max='32'
    />

    <div v-if="false" class='time-signatures'>
      <div
        v-for='timeSignature in timeSignatures'
        class='time-signature'
      >
        <p class='numberator'>{{ timeSignature.numerator }}</p>
        <p class='denominator'>{{ timeSignature.denominator }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from './Slider';

export default {
  components: {
    Slider
  },
  props: {
    timeSignatures: {
      type: Array,
      required: true
    }
  },
  computed: {
    beatsPerMeasure() {
      return this.$store.state.beatsPerMeasure;
    }
  },
  methods: {
    incrementBeatsPerMeasure() {
      this.$store.commit({
        type: 'changeBeatsPerMeasure',
        beatsPerMeasure: this.$store.state.beatsPerMeasure + 1
      })
    },
    decrementBeatsPerMeasure() {
      this.$store.commit({
        type: 'changeBeatsPerMeasure',
        beatsPerMeasure: this.$store.state.beatsPerMeasure - 1
      })
    },
    changeBeatsPerMeasure(event) {
      this.$store.commit({
        type: 'changeBeatsPerMeasure',
        beatsPerMeasure: event
      })
    }
  }
};
</script>

<style lang="scss">
@import '../style/_colors.scss';

.time-signatures-container {
  margin-bottom: 30px;
}

.title {
  color: white;
  font-size: 23px;
  margin-bottom: 20px;
}

.time-signatures {
  display: flex;
  max-width: 316px;
  margin: auto;
  margin-bottom: 26px;
  flex-wrap: wrap;

  .time-signature {
    background-color: $purple;
    padding: 10px 25px;
    font-size: 22px;
    color: white;
    border-radius: 2px;
    margin: 0 8px;
  }
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .beats-per-measure {
    color: $yellow;
    font-size: 35px;
    margin: 0 20px;
  }
}

.beats-per-measure-slider {
  max-width: 300px;
  margin: 0 auto;
  padding: 0 25px;
  box-sizing: border-box;

  .vue-slider-piecewise {
    background-color: $pale-yellow;
  }

  .vue-slider-process {
    background-color: $yellow !important;
  }

  .vue-slider-dot {
    background-color: $display-grey;

    &:hover {
      background-color: $display-grey-dark;
    }
  }
}
</style>
