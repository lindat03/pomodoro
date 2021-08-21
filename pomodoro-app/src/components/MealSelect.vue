<template>
  <div id="meal-div">
    <div v-if="mealIsSelected === false" id="meal-selection-div">
      <h1>select your pastry!</h1>
      <button @click="decreaseMealIndex">Left</button>
      <button @click="increaseMealIndex">Right</button>
      <h3>{{ meal[mealIndex].name }}</h3>
      <Meal :mealSrc="meal[mealIndex].imgSrc" />
      <button @click="selectMeal">Select</button>
    </div>
    <div
      v-if="mealIsSelected === true && confirmationScreen === false"
      id="selected-meal-div"
    >
      <h1>selected meal: {{ selectedMeal.name }}</h1>
      <Meal :mealSrc="selectedMeal.imgSrc" />
      <button @click="toggleConfirmationScreen">Give up</button>
    </div>
    <div id="confirmation-screen-div" v-if="confirmationScreen === true">
      <h3>are you sure you wanna give up? you'll lose all your progress.</h3>
      <button
        @click="
          toggleMealSelect();
          toggleConfirmationScreen();
        "
      >
        yes
      </button>
      <button @click="toggleConfirmationScreen">no</button>
    </div>
  </div>
</template>

<script>
import Meal from './Meal.vue';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'MealSelect',
  components: {
    Meal,
  },
  data() {
    return {
      mealIndex: 0,
      meal: [
        {
          name: 'Milk Bread',
          imgSrc: 'milk-bread',
          ingredients: ['milk', 'flour', 'egg', 'sugar'],
        },
        {
          name: 'Strawberry Cake',
          imgSrc: 'strawberry-cake',
          ingredients: ['strawberry', 'batter', 'egg', 'whipped cream'],
        },
        {
          name: 'Chocolate Swiss Roll',
          imgSrc: 'chocolate-swiss-roll',
          ingredients: ['chocolate', 'milk', 'egg', 'cocoa powder'],
        },
      ],
      selectedMeal: null,
      confirmationScreen: false,
    };
  },
  computed: mapState(['mealIsSelected']),
  methods: {
    ...mapActions(['setIngredients', 'toggleMealSelect', 'setSelectedMeal']),
    increaseMealIndex() {
      this.mealIndex < this.meal.length - 1
        ? this.mealIndex++
        : (this.mealIndex = 0);
    },
    decreaseMealIndex() {
      this.mealIndex > 0
        ? this.mealIndex--
        : (this.mealIndex = this.meal.length - 1);
    },
    selectMeal() {
      this.toggleMealSelect();
      this.selectedMeal = this.meal[this.mealIndex];
      this.setIngredients(this.selectedMeal.ingredients);
      this.setSelectedMeal(this.selectedMeal);
    },
    toggleConfirmationScreen() {
      this.confirmationScreen = !this.confirmationScreen;
    },
  },
};
</script>
