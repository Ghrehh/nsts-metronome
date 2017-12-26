<template>
  <div>
    <h2 class='title'>Time Signatures</h2>
    <div class='time-signatures'>
      <div
        v-for='timeSignature in timeSignatures'
        class='time-signature'
      >
        <p class='numberator'>{{ timeSignature.numerator }}</p>
        <p class='denominator'>{{ timeSignature.denominator }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timeSignatures: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

.title {
  color: white;
  margin-bottom: 10px;
}

.time-signatures {
  display: flex;
  max-width: 316px;
  margin: auto;
  margin-bottom: 26px;
  flex-wrap: wrap;

  .time-signature {
    background-color: $purple;
    padding: 10px 25px;
    font-size: 22px;
    color: white;
    border-radius: 2px;
    margin: 0 8px;
  }
}
</style>
