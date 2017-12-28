<template>
  <router-view/>
</template>

<script>
</script>

<style lang="scss">
@import './style/_reset.scss';
@import './style/_colors.scss';
@import './style/_mixins.scss';

@font-face {
  font-family: "envy";
  src: url(/static/envy_code_r_bold.ttf) format("truetype");
}

html, body {
  height: 100%;
  background-color: $background-black;
}

p, a, div, li, h1, h2, h3, h4, h5 {
  font-family: "envy", sans-serif;
}


.button {
  display: inline-block;
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 2px;
  user-select: none;
}

.decrement-button {
  background-color: $red;
  color: white;
  @include box-shadow(0, 5px, $red-hover)
  position: relative;

  &:hover {
    @media (min-width: 450px) {
      top: 2px;
      @include box-shadow(0, 3px, $red-hover)
    }
  }

  &:active {
    @include box-shadow(0, 0px, $red-hover)
    top: 5px;
  }
}

.increment-button {
  background-color: $green;
  color: white;
  padding: 10px 9px 10px 11px;
  @include box-shadow(0, 5px, $green-hover)
  position: relative;

  &:hover {
    @media (min-width: 450px) {
      top: 2px;
      @include box-shadow(0, 3px, $green-hover)
    }
  }

  &:active {
    @include box-shadow(0, 0px, $green-hover)
    top: 5px;
  }
}

</style>
