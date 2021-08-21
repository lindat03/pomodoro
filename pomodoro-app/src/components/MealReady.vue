<template>
  <div class="meal-ready-div">
    <div class="before-button-press" v-if="!isMealCooking">
      <h1>your meal is ready!</h1>
      <Meal :mealSrc="selectedMeal.imgSrc" />
      <button @click="makeMeal">make meal</button>
    </div>
    <div class="after-button press" v-if="isMealCooking">
      <Meal :mealSrc="selectedMeal.imgSrc" />
      <h1>good job! you have successfully made {{ selectedMeal.name }}</h1>
      <button @click="resetEverything">
        make another meal
      </button>
    </div>
  </div>
</template>

<script>
import Meal from './Meal.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'MealReady',
  components: { Meal },
  data() {
    return {
      isMealCooking: false,
    };
  },
  computed: mapState(['progressInt', 'selectedMeal']),
  methods: {
    ...mapActions(['resetEverything', 'addCompletedMeal']),
    makeMeal() {
      //add to display case
      this.isMealCooking = true;
      console.log('meal made');
      this.addCompletedMeal(this.selectedMeal);
    },
  },
};
</script>
