<template>
<svg class='metronome-svg-container' width="33px" height="44px" viewBox="0 0 33 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g class="metronome-svg" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="On" transform="translate(-1094.000000, -283.000000)">
            <g id="start-button" transform="translate(692.000000, 283.000000)">
                <g id="metronome-copy-4" transform="translate(402.000000, 0.000000)">
                    <path d="M0,43.5228444 L10.8584764,0 L21.8141881,0 L32.4638476,43.5228444 L0,43.5228444 Z M5.38819048,32.1336889 L27.0756571,32.1336889 L19.9611543,2.03377778 L12.6421934,2.03377778 L5.38819048,32.1336889 Z" id="Combined-Shape" fill="#000000"></path>
                    <polygon id="inner-copy" points="12.6746724 32.1336889 19.9611543 32.1336889 19.9611543 2.03377778 12.6421934 2.03377778"></polygon>
                    <g class='stick' id="stick" transform="translate(12.952381, 4.259259)" fill="#000000">
                      <g class='stick-inner' fill="#000000">
                        <rect id="Rectangle-7" x="2.26925714" y="0.350637037" width="1.61645714" height="32.4048593"></rect>
                        <polygon id="Path-2" points="0.91609256 7.67223704 5.2327619 7.67223704 4.41721278 10.7956559 1.73754167 10.7956559"></polygon>
                      </g>
                    </g>
                    <path d="M2.90912451,31.8625185 L29.6106678,31.8625185 L32.4638476,43.5228444 L0,43.5228444 L2.90912451,31.8625185 Z" id="cover" fill="#000000"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
</template>

<script>
</script>

<style lang="scss" scoped>
.metronome-svg-container {
  height: 40px;

  .metronome-svg {
    opacity: 0.25;
  }
}

.toggle-metronome-button:hover {
  @media (min-width: 450px) {
    .stick-inner {
      transform-origin: center bottom;
      animation: pulse 1.5s infinite;
      transform-origin: bottom 12.9524px;
      animation-timing-function: linear;
    }
  }
}

.toggle-metronome-button.stop {
  .stick-inner {
    transform-origin: center bottom;
    animation: pulse 1.5s infinite;
    transform-origin: bottom 12.9524px;
    animation-timing-function: linear;
  }
}

@keyframes pulse {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

</style>
