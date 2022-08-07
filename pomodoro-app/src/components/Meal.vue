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
  width: 60%;
  margin: 8% auto 8% auto;
}
.meal-icon {
  padding: 5%;
  margin: .5rem;
  /* background: url(../assets/pastry_container.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%; */
  /* margin-bottom: 4rem; */
}
</style>
