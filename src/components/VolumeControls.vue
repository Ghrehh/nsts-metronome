<template>
<div class='volume-controls'>
  <h2 class='title'>
    Volume <span class='volume-value'>{{ volume }}</span>
  </h2>

  <slider
    cssClass='blue-slider volume-slider'
    :on-value-change='changeVolume'
    :value='volume'
    :min='0'
    :max='10'
  />

</div>
</template>

<script>
import Slider from './Slider';

export default {
  components: {
    Slider
  },
  props: {
  },
  computed: {
    volume() {
      return this.$store.state.volume;
    }
  },
  methods: {
    changeVolume(event) {
      this.$store.commit({
        type: 'changeVolume',
        volume: event
      })
    }
  }
};
</script>

<style lang="scss">
@import '../style/_colors.scss';
.volume-slider {
  .vue-slider-dot {
    background-color: $display-grey !important;

    &:hover {
      background-color: $display-grey-dark !important;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '../style/_colors.scss';

.volume-controls {
  margin-bottom: 30px;
}

.title {
  font-size: 23px;
  color: white;
  margin-bottom: 15px;
}

.volume-value {
  color: $yellow;
}
</style>
