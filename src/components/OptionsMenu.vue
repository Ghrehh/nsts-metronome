<template>
  <transition name="drop">
    <div v-if='visible' class='options-menu'>
      <div class='options-menu-inner'>
        <h1 class='options-title'>OPTIONS</h1>
        <div v-on:click='toggleOptionsOpen' class='button close-options-menu-button'>
          <gear-svg />
          <p>CLOSE</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import GearSVG from './GearSVG';

export default {
  components: {
    'gear-svg': GearSVG
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  computed: {
  },
  methods: {
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

.options-menu {
  height: 100%;
  transition: height .5s ease;
  transition-delay: 0s;
  background-color: #363646;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;

  .options-menu-inner {
    opacity: 1;
    transition: opacity .5s ease;
    transition-delay: .5s;
    padding: 30px;
  }
}

.options-title {
  color: white;
  font-size: 40px;
}

.close-options-menu-button {
  background-color: $red;
  color: white;
  @include box-shadow(0, 5px, $red-hover);
  position: relative;
  display: flex;
  max-width: 168px;
  padding: 10px 10px 10px 1px;
  align-items: center;
  box-sizing: border-box;
  margin: auto;


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

.drop-enter {
  height: 0%;

  .options-menu-inner {
    opacity: 0;
  }
}

.drop-leave {
  height: 100%;

  .options-menu-inner {
    opacity: 1;
  }
}

.drop-leave-to {
  transition: height 0.5s ease;
  transition-delay: 0.2s;
  height: 0%;

  .options-menu-inner {
  transition: height 0.2s ease;
    transition-delay: 0s;
    opacity: 0;
  }
}

</style>
