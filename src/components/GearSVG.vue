<template>
<svg class='gear-svg' width="67px" height="68px" viewBox="0 0 67 68" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="new-gear" fill="#000000">
            <polygon id="Path-4" points="30.182373 0.582275391 36.0249023 0.582275391 39.9975586 11.1105957 26.5500488 11.1105957"></polygon>
            <polygon id="Path-4-Copy" transform="translate(61.264160, 33.723755) rotate(90.000000) translate(-61.264160, -33.723755) " points="58.1727295 28.4595947 64.0152588 28.4595947 67.987915 38.987915 54.5404053 38.987915"></polygon>
            <polygon id="Path-4-Copy-2" transform="translate(5.264160, 33.723755) rotate(-90.000000) translate(-5.264160, -33.723755) " points="2.17272949 28.4595947 8.01525879 28.4595947 11.987915 38.987915 -1.45959473 38.987915"></polygon>
            <polygon id="Path-4-Copy-4" transform="translate(52.476736, 14.476736) rotate(45.000000) translate(-52.476736, -14.476736) " points="49.3853054 9.21257586 55.2278346 9.21257586 59.2004909 19.7408962 45.7529811 19.7408962"></polygon>
            <polygon id="Path-4-Copy-5" transform="translate(13.523264, 14.476736) rotate(-45.000000) translate(-13.523264, -14.476736) " points="10.4318333 9.21257586 16.2743626 9.21257586 20.2470189 19.7408962 6.7995091 19.7408962"></polygon>
            <polygon id="Path-4-Copy-6" transform="translate(52.476736, 53.476736) rotate(135.000000) translate(-52.476736, -53.476736) " points="49.3853054 48.2125759 55.2278346 48.2125759 59.2004909 58.7408962 45.7529811 58.7408962"></polygon>
            <polygon id="Path-4-Copy-7" transform="translate(13.523264, 53.476736) rotate(-135.000000) translate(-13.523264, -53.476736) " points="10.4318333 48.2125759 16.2743626 48.2125759 20.2470189 58.7408962 6.7995091 58.7408962"></polygon>
            <polygon id="Path-4-Copy-3" transform="translate(32.723755, 62.264160) rotate(180.000000) translate(-32.723755, -62.264160) " points="29.6323242 57 35.4748535 57 39.4475098 67.5283203 26 67.5283203"></polygon>
            <path d="M33,60 C18.6405965,60 7,48.3594035 7,34 C7,19.6405965 18.6405965,8 33,8 C47.3594035,8 59,19.6405965 59,34 C59,48.3594035 47.3594035,60 33,60 Z M33,51 C42.3888407,51 50,43.3888407 50,34 C50,24.6111593 42.3888407,17 33,17 C23.6111593,17 16,24.6111593 16,34 C16,43.3888407 23.6111593,51 33,51 Z" id="Combined-Shape"></path>
        </g>
    </g>
</svg>
</template>

<style lang="scss" scoped>
.gear-svg {
  opacity: 0.30;
  height: 44px;
}

.options-button:hover, .close-options-menu-button:hover {
  @media (min-width: 450px) {
    .gear-svg {
      transform-origin: center;
      animation: rotate 4s infinite;
      animation-timing-function: linear;
    }
  }
}

.options-button.active, .close-options-menu-button:active {
  .gear-svg {
    transform-origin: center;
    animation: rotate 4s infinite;
    animation-timing-function: linear;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
