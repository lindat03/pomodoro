<template>
  <div class="display-case-div">
    <h1>your display case</h1>
    <div
      class="completed-meals"
      v-for="meal in completedMeals"
      :key="meal.imgSrc"
    >
      <Meal :mealSrc="meal.imgSrc" />
    </div>
  </div>
</template>

<script>
import Meal from './Meal.vue';
import { mapState } from 'vuex';

export default {
  name: 'Display Case',
  components: { Meal },
  computed: mapState(['completedMeals']),
};
</script>
