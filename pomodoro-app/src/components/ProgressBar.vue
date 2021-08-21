<template>
  <div id="progress-bar-div">
    <h1>progress bar</h1>
    <div class="progress-bar-line">
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 1 }]"
        id="element1"
      ></div>
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 2 }]"
        id="element2"
      ></div>
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 3 }]"
        id="element3"
      ></div>
      <div
        :class="['progress-bar-elements', { 'set-unfilled': progressInt < 4 }]"
        id="element4"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ProgressBar',
  data() {
    return {};
  },
  computed: mapState({
    progressInt: (state) => state.progressInt,
  }),
};
</script>

<style scoped>
.progress-bar-div {
  width: 50%;
  margin: auto;
}

.progress-bar-elements {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgb(228, 72, 72);
  border: solid rgb(228, 72, 72);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
}

.progress-bar-line {
  width: 50%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.set-unfilled {
  background-color: transparent;
}
</style>
