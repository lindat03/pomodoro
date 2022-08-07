<template>
  <div class="meal-ready-div">
    <div class="before-button-press" v-if="!isMealCooking">
      <h1>Your meal is ready!</h1>
      <div class="meal-container">
        <Meal id="meal-img"  :mealSrc="selectedMeal.imgSrc" />
      </div>
      <div class="make-meal-button-div">
        <button id="make-meal-btn" @click="makeMeal">Make Meal</button>
      </div>
    </div>
    <div class="after-button press" v-if="isMealCooking">
      <h1>Good job! You have successfully made {{ selectedMeal.name }}.</h1>
      <div class="meal-container">
        <Meal :mealSrc="selectedMeal.imgSrc" />
      </div>
      <div class="reset-button">
        <button @click="resetEverything">
        Make Another Meal
        </button>
      </div>
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
 <style scoped>
 .meal-container{
   position: relative;
   height: 10%;
 }
 #meal-img {
   position:relative;
   height: 1rem;
   pointer-events: none;
 }
 #make-meal-btn {
   z-index: 3;
 }
 </style>