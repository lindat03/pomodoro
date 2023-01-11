<template>
  <div>
    <div class="game-container">
        <Header></Header>
        <KeepAlive>
        <MealSelect v-if="progressInt !== 4 && !confirmationScreenToggled" />
        </KeepAlive>
        <MealReady v-if="progressInt === 4 && !confirmationScreenToggled" />
        <ConfirmationScreen v-if="confirmationScreenToggled"></ConfirmationScreen>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import MealSelect from './components/MealSelect.vue';
import MealReady from './components/MealReady.vue';
import ConfirmationScreen from './components/ConfirmationScreen.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    MealSelect,
    MealReady,
    ConfirmationScreen,
  },
  computed: mapState(['progressInt', 'confirmationScreenToggled']),
};
</script>

<style>
.game-container{
  display: flex;
  flex-flow: column;
  
}
</style>