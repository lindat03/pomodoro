<template>
  <div id="progress-bar-div">
    <div class="progress-bar-line">
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 0 }]"
        id="element1"
      >
        <Ingredient :imgSrc="ingredients[0]" />
      </div>
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 1 }]"
        id="element2"
      >
        <Ingredient :imgSrc="ingredients[1]" />
      </div>
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 2 }]"
        id="element3"
      >
        <Ingredient :imgSrc="ingredients[2]" />
      </div>
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 3 }]"
        id="element4"
      >
        <Ingredient :imgSrc="ingredients[3]" />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Ingredient from './Ingredient.vue';

export default {
  name: 'ProgressBar',
  components: {
    Ingredient,
  },
  data() {
    return {};
  },
  computed: mapState(['progressInt', 'ingredients']),
};
</script>

<style scoped>
.progress-bar-div {
  width: 50%;
  margin: auto;
  border: none;
}
hr{
  border: none;
}
.progress-bar-elements {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 3rem;
  height: 3rem;
}

.progress-bar-line {
  width: 50%;
  margin: auto;
  margin-top: 3vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.set-unfilled {
  opacity: 40%;
}
</style>
