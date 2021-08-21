<template>
  <div class="meal-icon">
    <img :src="require('../assets/' + mealSrc + '.png')" style="width: 15rem" />
  </div>
</template>

<script>
export default {
  name: 'Meal',
  props: {
    mealSrc: String,
  },
};
</script>

<style scoped></style>
