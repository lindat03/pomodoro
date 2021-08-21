<template>
  <div id="meal-div">
    <div v-if="mealIsSelected === false" id="meal-selection-div">
      <h1>select what you wanna cook</h1>
      <button @click="decreaseMealIndex">Left</button>
      <button @click="increaseMealIndex">Right</button>
      <h3>{{ meal[mealIndex].name }}</h3>
      <Meal :mealSrc="meal[mealIndex].imgSrc" />
      <button @click="selectMeal">Select</button>
    </div>
    <div v-if="mealIsSelected === true" id="selected-meal-div">
      <h1>selected meal: {{ selectedMeal.name }}</h1>
      <Meal :mealSrc="selectedMeal.imgSrc" />
      <button @click="toggleMealSelect">Go Back</button>
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
          imgSrc: 'pause',
          ingredients: ['milk', 'flour', 'egg', 'ingredient4'],
        },
        {
          name: 'Fruit Cake',
          imgSrc: 'play',
          ingredients: ['fruit', 'flour', 'egg', 'ingredient4'],
        },
        {
          name: 'Pumpkin Pie',
          imgSrc: 'test',
          ingredients: ['pumpkin', 'flour', 'egg', 'ingredient4'],
        },
      ],
      selectedMeal: null,
    };
  },
  computed: mapState(['mealIsSelected']),
  methods: {
    ...mapActions(['setIngredients', 'toggleMealSelect']),
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
    },
  },
};
</script>
