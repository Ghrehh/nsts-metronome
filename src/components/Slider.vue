<template>
<div :class='combinedCssClass'>
  <vue-slider
    tooltip='false'
    @input='onValueChange'
    :value='value'
    :min='min'
    :max='max'
  />
</div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider
  },
  props: {
    cssClass: String,
    min: Number,
    max: Number,
    value: {
      type: Number,
      required: true
    },
    onValueChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    combinedCssClass: function () {
      return `metronome-slider ${this.cssClass}`
    }
  }
};
</script>

<style lang="scss">
@import '../style/_colors.scss';

.metronome-slider {
  .vue-slider {
    height: 9px !important;
    border-radius: 2px !important;
  }

  .vue-slider-piecewise {
  }

  .vue-slider-process {
    border-radius: 2px !important;
  }

  .vue-slider-dot {
    box-shadow: none !important;
    border-radius: 2px !important;
    height: 32px !important;
    top: -11px !important;
  }
}
</style>
