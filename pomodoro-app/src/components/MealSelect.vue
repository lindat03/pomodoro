<template>
  <div id="meal-div">
    <div v-if="mealIsSelected === false && confirmationScreen === false" id="meal-selection-div">
      <h1>Select Your Pastry!</h1>
      <div class="meal-select-row">
        <div class="selection-arrows-container">
          <div @click="decreaseMealIndex" class="decrease-button-container">
            <img  
            v-if="leftIsPressed === false"
            src="../assets/arrows/left-arrow.png"
            class="selection-arrow left button-img"
            />
            <img  
            v-if="leftIsPressed === true"
            src="../assets/arrows/left-arrow-pressed.png"
            class="selection-arrow left-hover button-img"
            />
          </div>
          <div class="meal-display">
            <Meal :mealSrc="meal[mealIndex].imgSrc" />
          </div>
          <div @click="increaseMealIndex" class="increase-button-container">
            <img
              v-if="rightIsPressed === false"
              src="../assets/arrows/right-arrow.png"
              class="selection-arrow right button-img"
            />
            <img
              v-if="rightIsPressed === true"
              src="../assets/arrows/right-arrow-pressed.png"
              class="selection-arrow right button-img"
            />
          </div>
        </div>

        <div id="meal-description">
          <h2>{{ meal[mealIndex].name }}</h2>
          <h3 class="meal-description-text">{{ meal[mealIndex].description }}</h3>
          <div
            class="steps"
            v-for="(step, index) in meal[mealIndex].steps"
            :key="step"
          >
            <Ingredient :imgSrc="meal[mealIndex].ingredients[index]" />
            <span class="step">{{ step }}</span>
          </div>
        </div>
      </div>
      <div class="select-btn-div">
        <img @click="selectMeal" src="../assets/select-btn.png" class="select-btn"/>
      </div>
    </div>
    <div
      v-if="mealIsSelected === true && confirmationScreen === false"
      id="selected-meal-container"
    >
      <div class="header">
        <h1 id="study-header">Baking...</h1>
      </div>
      <div class="main-bake-container">
        <div class="sidebar">
          <div class="meal-and-timer">
            <Timer v-if="mealIsSelected === true && progressInt !== 4"/>
          </div>
          <button @click="toggleConfirmationScreen">Give Up</button>
        </div>
        <div class="study-container">
          <div  id="selected-meal-display">
              <h2 class="selected-meal-title">Selected Meal: {{ selectedMeal.name }}</h2>
              <Meal :mealSrc="meal[mealIndex].imgSrc" />
          </div>
          <div class="ingredient-description">
            <span v-if="sessionState == 0">{{meal[mealIndex].steps[progressInt]}}</span>
            <!-- <IngredientList v-if="progressInt !== 4 && mealIsSelected === true " />  -->
          </div>
          <ProgressBar v-if="mealIsSelected === true" />
        </div>
      </div>
    </div>
    <div id="confirmation-screen-div" v-if="confirmationScreen === true">
      <h3>Are you sure you want to give up? You'll lose all of your progress!</h3>
      <button
        @click="
          toggleConfirmationScreen
          // toggleMealSelect;
        "
      >
        Yes
      </button>
      <button @click="toggleConfirmationScreen">No</button>
    </div>
  </div>
</template>

<script>
import Meal from './Meal.vue';
import { mapActions, mapState } from 'vuex';
import Ingredient from './Ingredient.vue';
import ProgressBar from './ProgressBar.vue';
import Timer from './Timer.vue';
// import IngredientList from './IngredientList.vue';
export default {
  name: 'MealSelect',
  components: {
    Meal,
    Ingredient,
    Timer,
    ProgressBar,
    // IngredientList,
  },
  data() {
    return {
      leftIsPressed: false,
      rightIsPressed: false,
      mealIndex: 0,
      meal: [
        {
          name: 'Souffle Pancakes',
          imgSrc: 'souffle-pancakes',
          ingredients: ['milk', 'flour', 'egg', 'sugar'],
          description:
            'Japan takes pancakes to new heights. Think cottony clouds of heaven that melt in your mouth! These wispy, soft pancakes are a must-try.',
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
          ingredients: ['strawberry', 'batter', 'egg', 'whipped_cream'],
          description:
            'Layers of fluffy cake, fresh cream, and sweet strawberries. Enjoy this sweet summer treat with your friends and family.',
          steps: [
            'Cut the strawberries!',
            'Whisk the egg!',
            'Mix the batter!',
            'Whip the cream!',
          ],
        },
        {
          name: 'Chocolate Cake',
          imgSrc: 'chocolate-cake',
          ingredients: ['cocoa', 'flour', 'sugar', 'batter'],
          description:
            'Decadent, chocolatey goodness. With a super moist crumb and fudgy texture, this chocolate cake will be one of your favorites.',
          steps: [
            'Sift the cocoa powder!',
            'Fold in the flour!',
            'Add the sugar!',
            'Mix the batter!',
          ],
        },
      ],
      selectedMeal: null,
      confirmationScreen: false,
    };
  },
  computed: mapState(['mealIsSelected', 'progressInt', 'sessionState']),
  methods: {
    ...mapActions(['setIngredients', 'toggleMealSelect', 'setSelectedMeal']),
    increaseMealIndex() {
      this.rightIsPressed = !this.rightIsPressed;
      setTimeout(() => this.rightIsPressed = !this.rightIsPressed, 100);
      this.mealIndex < this.meal.length - 1
        ? this.mealIndex++
        : (this.mealIndex = 0);
    },
    decreaseMealIndex() {
      this.leftIsPressed = !this.leftIsPressed;
      setTimeout(() => this.leftIsPressed = !this.leftIsPressed, 100);
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
      console.log("Confirmation screen toggled.")
    },

  },
};
</script>

<style scoped>
.meal-display {
  background: url(../assets/pastry_container.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.selected-meal-title {
  /* width: 40%; */
  font-size: 2.5vw;
  /* line-height: 110%; */
}

.main-bake-container {
  display: flex;
  justify-content: center;
}
.meal-and-timer{
  width: 100%;
  display: grid;
  grid-template-rows: 35% 65%;
  margin: auto;
  padding: 10px;
}
.header{
  width: 100%;
}
#study-header{
  font-size: 3.7vw;
  margin-top: 2rem;
  margin-bottom: 3rem;
}
.ingredient-description{
  width: 80%;
  display: grid;
  /* grid-template-columns: 80% 20%; */
  margin: auto;
}
/****

    THIS IS ALL FOR MEAL SELECT SCREEN

*/

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
  margin: auto 6% 5% 6%;
}
/* START OF MEAL DESCRIPTION */
#meal-description {
  text-align: left;
  padding-left: 10%;
}
h1 {
  font-size: 2.5rem;
  color: #927a67;
  text-align: center;
  margin-top: 3rem;
}
h2 {
  font-size: 2rem;
  font-size: 2.5vw;
  color: #927a67;
  text-align: center;
  margin-bottom: 2px;
}
h3 {
  height: 2rem;
}
.meal-description-text{
  margin-top: 10px;
  height: 8rem;
}
.steps {
  display: grid;
  grid-template-columns: 10% 90%;
}
.step{
  font-size: 15px;
}
span {
  position: relative;
  top: 25%;
  font-size: 140%;
  margin-left: 5%;
}
/* END OF MEAL DESCRIPTION */
.selection-arrow {
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
.select-btn {
  height: 3.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 2rem;
  cursor: pointer;
}
.decrease-button-container, .increase-button-container{
  margin: auto;
}

#selected-meal-container {
  display: inline
}

#meal-div{
  position: absolute;
  width: 100%;
}

.sidebar{
  display: inline-block
}
#meal-selection-div{
  display: flex;
  flex-direction: column;
}
</style>
