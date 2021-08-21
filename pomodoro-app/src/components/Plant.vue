<template>
  <div class="plant-icon">
    <img :src="require('../assets/' + plantSrc + '.png')" style="width: 2rem" />
  </div>
</template>

<script>
export default {
  name: 'Plant',
  props: {
    plantSrc: String,
  },
};
</script>

<style scoped></style>
