<template>
  <div id="plant-div">
    <h1>grow your plant!</h1>
    <button @click="decreasePlantIndex">Left</button>
    <Plant :plantSrc="plant[plantIndex]" />
    <button @click="increasePlantIndex">Right</button>
  </div>
</template>

<script>
import Plant from './Plant.vue';
export default {
  name: 'PlantSelect',
  components: {
    Plant,
  },
  data() {
    return {
      plantIndex: 0,
      plant: ['pause', 'play', 'test'],
    };
  },
  methods: {
    increasePlantIndex() {
      this.plantIndex < this.plant.length - 1
        ? this.plantIndex++
        : (this.plantIndex = 0);
    },
    decreasePlantIndex() {
      this.plantIndex > 0
        ? this.plantIndex--
        : (this.plantIndex = this.plant.length - 1);
    },
  },
};
</script>
