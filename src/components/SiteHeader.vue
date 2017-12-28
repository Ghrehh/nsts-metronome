<template>
<div class='header-container'>
  <h1 v-if='!metronomeOn' class='header'>NSTS Metronome</h1>

  <div v-if='metronomeOn' class='beat-counter'>
    <div :class='beatClass(number)' v-for='number in beatsPerMeasure'>
    </div>

  </div>
</div>
</template>

<script>
export default {
  computed: {
    metronomeOn() {
      return this.$store.state.metronomeOn;
    },
    beatsPerMeasure() {
      return this.$store.state.beatsPerMeasure;
    }
  },
  methods: {
    beatClass(beatNumber) {
      const currentBeat = this.$store.state.currentBeat;
      return currentBeat === (beatNumber - 1) ? 'current-beat beat' : 'beat';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

.header-container {
  .header {
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .beat-counter {
    height: 30px;
    display: flex;
    max-width: 300px;
    margin: 0 auto 20px;
    justify-content: space-between;

    .beat {
      background-color: $display-grey;
      width: 10px;
      flex: 1;
      margin-right: 4px;
      border-radius: 1px;

      &:last-child {
        margin-right: 0;
      }
    }

    .current-beat {
      background-color: $red;
    }
  }
}
</style>
