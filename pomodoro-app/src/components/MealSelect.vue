<template>
  <div id="meal-div">
    <div v-if="mealIsSelected === false" id="meal-selection-div">
      <h1>Select your pastry!</h1>
      <div class="meal-select-row">
        <div class="selection-arrows-container">
          <img
            @click="decreaseMealIndex"
            src="../assets/arrows/left-arrow.png"
            class="selection-arrow left button-img"
          />
          <div id="meal-display">
            <Meal :mealSrc="meal[mealIndex].imgSrc" />
          </div>
          <div @click="increaseMealIndex">
            <img
              v-if="isPressed === false"
              src="../assets/arrows/right-arrow.png"
              class="selection-arrow right button-img"
            />
            <img
              v-if="isPressed === true"
              src="../assets/arrows/right-arrow-pressed.png"
              class="selection-arrow right button-img"
            />
          </div>
        </div>

        <div id="meal-description">
          <h2>{{ meal[mealIndex].name }}</h2>
          <h3>{{ meal[mealIndex].description }}</h3>
          <div
            class="steps"
            v-for="(step, index) in meal[mealIndex].steps"
            :key="step"
          >
            <Ingredient :imgSrc="meal[mealIndex].ingredients[index]" />
            <span>{{ step }}</span>
          </div>
        </div>
      </div>
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
import Ingredient from './Ingredient.vue';
export default {
  name: 'MealSelect',
  components: {
    Meal,
    Ingredient,
  },
  data() {
    return {
      isPressed: false,
      mealIndex: 0,
      meal: [
        {
          name: 'Milk Bread',
          imgSrc: 'souffle-pancakes',
          ingredients: ['milk', 'flour', 'egg', 'sugar'],
          description:
            'A loaf of milky-sweet bread with a feathery soft texture. It tears into wispy strands and melts in your mouth; great for Spring picnics!',
          steps: [
            'Measure the milk!',
            'Fold in the flour!',
            'Whisk the egg!',
            'Add the sugar!',
          ],
        },
        {
          name: 'Strawberry Cake',
          imgSrc: 'strawberry-cake',
          ingredients: ['strawberry', 'batter', 'egg', 'whipped cream'],
          description:
            'Layers of fluffy cake, fresh cream, and sweet strawberries. Enjoy this sweet summer treat with your friends and family.',
          steps: [
            'Cut the strawberries!',
            'Whisk the egg!',
            'Mix the batter!',
            'Whip the cream!',
          ],
        },
        // {
        //   name: 'Chocolate Swiss Roll',
        //   imgSrc: 'chocolate-swiss-roll',
        //   ingredients: ['chocolate', 'milk', 'egg', 'cocoa powder'],
        // },
      ],
      selectedMeal: null,
      confirmationScreen: false,
    };
  },
  computed: mapState(['mealIsSelected']),
  methods: {
    ...mapActions(['setIngredients', 'toggleMealSelect', 'setSelectedMeal']),
    increaseMealIndex() {
      this.isPressed = !this.isPressed;
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

<style scoped>
#meal-display {
  background: url(../assets/pastry_container.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.selection-arrows-container {
  width: 100%;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  margin: auto;
}

/* THE DIV FOR THE MEAL DISPLAY AND THE DESCRIPTION */
.meal-select-row {
  height: 60%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: auto 6% 5% 10%;
}

/* START OF MEAL DESCRIPTION */
#meal-description {
  text-align: left;
  padding-left: 10%;
}
h1 {
  font-size: 2rem;
  color: #927a67;
  text-align: center;
  margin-top: 5rem;
}
h2 {
  font-size: 2rem;
  color: #927a67;
  text-align: center;
  margin-bottom: 2px;
}
h3 {
  margin-top: 4px;
}

.steps {
  display: grid;
  grid-template-columns: 10% 90%;
}
span {
  position: relative;
  top: 25%;
  font-size: 140%;
  margin-left: 5%;
}
/* END OF MEAL DESCRIPTION */

/* change this to image */
.selection-arrow {
  -webkit-appearance: none;
  height: 2rem;
  width: 2rem;
  border: none;
  margin: auto;
  background: transparent;
}
.button-img {
  margin: auto;
  width: 100%;
  height: 18%;
  cursor: pointer;
}
</style>
