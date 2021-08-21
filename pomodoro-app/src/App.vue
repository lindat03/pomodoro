<template>
  <div>
    <Header></Header>
    <Timer v-if="mealIsSelected === true && progressInt !== 4" />
    <MealSelect v-if="progressInt !== 4" />
    <MealReady v-if="progressInt === 4" />
    <Ingredient v-if="progressInt !== 4" />
    <hr />
    <ProgressBar v-if="mealIsSelected === true" />
    <DisplayCase />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Timer from './components/Timer.vue';
import MealSelect from './components/MealSelect.vue';
import ProgressBar from './components/ProgressBar.vue';
import Ingredient from './components/Ingredient.vue';
import MealReady from './components/MealReady.vue';
import DisplayCase from './components/DisplayCase.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Timer,
    MealSelect,
    ProgressBar,
    Ingredient,
    MealReady,
    DisplayCase,
  },
  computed: mapState(['mealIsSelected', 'progressInt']),
};
</script>
