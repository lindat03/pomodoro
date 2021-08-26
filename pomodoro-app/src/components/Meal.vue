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
  /* margin: 10%; */
  width: 50%;
  margin: 8% auto 8% auto;
}
.meal-icon {
  padding: 5%;
  margin: 1rem;
  /* margin-bottom: 4rem; */
}
</style>
