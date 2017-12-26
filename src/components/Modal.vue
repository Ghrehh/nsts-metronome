<template>
  <div v-if='visible' :class="combinedCssClass">
    <div class="modal-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cssClass: String,
    visible: {
      type: Boolean,
      required: true
    }
  },
  components: {
  },
  computed: {
    combinedCssClass() {
      return `modal-outer ${this.cssClass}`;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

.modal-outer {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 100;
  display: flex;
  overflow: hidden;
  padding: 30px;
  box-sizing: border-box;

  .modal-inner {
    margin: auto;
    max-width: 400px;
    border-radius: 3px;
    padding: 30px;
  }
}
</style>
