<template>
  <div class="meal-icon">
    <img
      :src="require('../assets/meals/meal_' + mealSrc + '.png')"
      class="meal"
    />
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

<style scoped>
.meal {
  width: 90%;
  height: 100%;
  object-fit: contain;
  /* margin: 8% auto 8% auto; */
}
.meal-icon {
  position: relative;
  padding: 5%;
  margin: .5rem;
}
</style>
