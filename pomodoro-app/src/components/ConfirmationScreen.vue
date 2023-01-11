<template>
    <div id="confirmation-screen-div">
      <h1>Are you sure you want to give up? You'll lose all of your progress!</h1>
      <div class="confirmation-btn-div">
        <button
          @click="
            resetEverything();
            cancelConfirmationScreen();
          "
          class="game-btns"
        >
        Yes
        </button>
        <button @click="cancelConfirmationScreen" class="game-btns">No</button>
      </div>
    </div>
</template>


<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Confirmation Screen',
    computed: mapState(['progressInt']),
    methods: {
        ...mapActions(['resetEverything']),
        cancelConfirmationScreen() {
            this.$store.state.confirmationScreenToggled = false;
            console.log("Confirmation screen cancelled. Progress int is " + this.$store.state.progressInt);
    },
    }
};
</script>

<style scoped>
.confirmation-btn-div{
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2vw;
}
#confirmation-screen-div{
  height:100%;
  display: flex;
  flex-flow: column;
  gap: 5vw;
  align-items: center;
}

h1{
  font-size: 3vw;
  line-height: 4vw;
  margin-top: 5vw;
}
</style>