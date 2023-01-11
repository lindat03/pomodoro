<template>
  <div class="meal-ready-div">
    <div class="before-button-press" v-if="!isMealCooking">
      <h1>Your meal is ready!</h1>
      <div class="meal-container">
        <Meal id="meal-img"  :mealSrc="selectedMeal.imgSrc" />
      </div>
      <div class="make-meal-button-div">
        <button id="make-meal-btn" class="game-btns" @click="makeMeal">Make Meal</button>
      </div>
    </div>
    <div class="after-button press" v-if="isMealCooking">
      <h1>Good job! You have successfully made {{ selectedMeal.name }}.</h1>
      <div class="meal-container">
        <Meal :mealSrc="selectedMeal.imgSrc" />
      </div>
      <div class="reset-button">
        <button @click="resetEverything" class="game-btns" id="reset-btn">
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
   width: 20rem;
   margin: auto;
   height: 80%;
 }
 #meal-img {
   position:relative;
   height: 50%;
   pointer-events: none;
 }
 #make-meal-btn {
   z-index: 3;
 }
 #reset-btn {
  font-size: 2vw;
 }
 .before-button-press{
  display:flex;
  flex-flow: column;
  height: 100%;
  align-content: stretch;
  align-items: stretch;
 }

 </style>