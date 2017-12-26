<template>
<div class="display">
  <h2 class="header">{{header}}</h2>
  <slot />
</div>
</template>

<script>
export default {
  props: {
    header: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../../style/_colors.scss';

.display {
  background-color: $display-grey;
  height: 160px;
  max-width: 300px;
  padding: 25px;
  margin: auto;
  box-sizing: border-box;
  text-align: center;
  border-radius: 2px;
  margin-bottom: 26px;

  .header {
    text-align: center;
    font-size: 50px;
    margin-bottom: 10px;
  }
}
</style>

