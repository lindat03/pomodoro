<template>
  <div class="ingredient-div" v-if="mealIsSelected">
    <h1>ingredients</h1>
    <div class="ingredient" v-if="progressInt === 0 && sessionState === 0">
      {{ ingredients[0] }}
    </div>
    <div class="ingredient" v-if="progressInt === 1 && sessionState === 0">
      {{ ingredients[1] }}
    </div>
    <div class="ingredient" v-if="progressInt === 2 && sessionState === 0">
      {{ ingredients[2] }}
    </div>
    <div class="ingredient" v-if="progressInt === 3 && sessionState === 0">
      {{ ingredients[3] }}
    </div>
    <div class="intermission" v-if="sessionState !== 0">
      <h3>break time!</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Ingredient',
  props: {
    imgSrc: String,
  },
  data() {
    return {};
  },
  computed: mapState([
    'ingredients',
    'progressInt',
    'sessionState',
    'mealIsSelected',
  ]),
};
</script>
