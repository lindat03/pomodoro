<template>
  <div>
    <div class="game-container">
      <Header></Header>
      <MealSelect v-if="progressInt !== 4" />
      <!-- <Timer v-if="mealIsSelected === true && progressInt !== 4" /> -->
      <MealReady v-if="progressInt === 4" />
      
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
// import Timer from './components/Timer.vue';
import MealSelect from './components/MealSelect.vue';
// import ProgressBar from './components/ProgressBar.vue';
// import IngredientList from './components/IngredientList.vue';
import MealReady from './components/MealReady.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    // Timer,
    MealSelect,
    // ProgressBar,
    // IngredientList,
    MealReady,
  },
  computed: mapState(['mealIsSelected', 'progressInt']),
};
</script>
