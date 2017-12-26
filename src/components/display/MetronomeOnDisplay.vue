<template>
<div>
  <display :header="displayHeaderText">
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
      return '4/4';
    },
  },
  methods: {
    changeBPM() {
      this.$store.commit({
        type: 'changeBPM',
        bpm: 130
      })
    },
  },
};
</script>
