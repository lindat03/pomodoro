<template>
  <div class="meal-icon">
    <img :src="require('../assets/' + mealSrc + '.png')" style="width: 2rem" />
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
