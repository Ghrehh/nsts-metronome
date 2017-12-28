<template>
  <router-view/>
</template>

<script>
</script>

<style lang="scss">
@import './style/_reset.scss';
@import './style/_colors.scss';

@font-face {
  font-family: "envy";
  src: url(/static/envy_code_r_bold.ttf) format("truetype");
}

html, body {
  height: 100%;
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

  &:hover {
    background-color: $red-hover;
  }
}

.increment-button {
  background-color: $green;
  color: white;
  padding: 10px 9px 10px 11px;

  &:hover {
    background-color: $green-hover;
  }
}

</style>
