<template>
<div>
  <display :header='displayHeaderText'>
    <p
      v-on:click='decrementBPM'
      class='button decrement-bpm-button'
    >
      -
    </p>

    <p
      v-on:click='incrementBPM'
      class='button increment-bpm-button'
    >
      +
    </p>
  </display>
</div>
</template>

<script>
import Display from './Display';

export default {
  components: {
    Display,
  },
  computed: {
    displayHeaderText() {
      return `${this.$store.state.bpm} BPM`;
    },
  },
  methods: {
    decrementBPM() {
      this.$store.commit({
        type: 'changeBPM',
        amount: -1
      })
    },
    incrementBPM() {
      this.$store.commit({
        type: 'changeBPM',
        amount: 1
      })
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../style/_colors.scss';

.decrement-bpm-button {
  background-color: $red;
  color: white;

  &:hover {
    background-color: $red-hover;
  }
}

.increment-bpm-button {
  background-color: $green;
  color: white;

  &:hover {
    background-color: $green-hover;
  }
}
</style>
