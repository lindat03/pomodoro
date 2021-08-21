<template>
  <div>
    <Header></Header>
    <Timer v-if="mealIsSelected === true" />
    <MealSelect />
    <ProgressBar v-if="mealIsSelected === true" />
    <Ingredient />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Timer from './components/Timer.vue';
import MealSelect from './components/MealSelect.vue';
import ProgressBar from './components/ProgressBar.vue';
import Ingredient from './components/Ingredient.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { Header, Timer, MealSelect, ProgressBar, Ingredient },
  computed: mapState(['mealIsSelected']),
};
</script>
