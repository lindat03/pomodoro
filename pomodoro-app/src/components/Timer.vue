<template>
  <div id="timer">
    <div class="timer-display">
      <audio id="timer-ding" src="../assets/timer-ding.mp3" v-if="timerDing === true"></audio>
      <div id="display">
        {{ timeDisplay() }}
      </div>
      <div class="pause-icon-div">
        <img v-if="timerOn===true" @click="toggleTimer()" class="pause-icon" src="../assets/pause.png" alt="" />
        <img v-if="timerOn===false" @click="toggleTimer()" class="pause-icon" src="../assets/play.png" alt="" />
      </div>
    </div>
    <div class="end-session-btn">
      <button @click="toggleSession()" class="game-btns" id="toggle-session">End {{ stageButtonText }}</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Timer',
  data() {
    return {
      timerButtonText: 'Start',
      stageButtonText: 'Study Session',
      timerOn: false,
      timerDing: false,
    };
  },
  mounted() {
    if (this.mealIsSelected) {
      this.toggleTimer();
    }
  },
  beforeUnmount() {
    if (this.timerOn) {
      console.log('timer was on');
      this.toggleTimer();
    }
  },
  computed: mapState([
    'progressInt',
    'sessionState',
    'currentTimeInSeconds',
    'interval',
    'mealIsSelected',
  ]),
  methods: {
    ...mapActions([
      'incrementProgress',
      'setSessionState',
      'changeToShortBreakTime',
      'changeToLongBreakTime',
      'changeToStudyTime',
      'startTimer',
      'stopTimer',
      'resetEverything',
    ]),
    toggleTimerDing(){
      this.timerDing = !this.timerDing;
      setTimeout(() => this.timerDing = !this.timerDing, 100);
    },
    toggleSession() {
      if (this.sessionState === 0) {
        if (this.progressInt < 3) {
          this.changeToShortBreakTimer();
          this.toggleTimerDing()
        } else {
          this.changeToLongBreakTimer();
          this.incrementProgress();
          this.toggleTimerDing()
        }
      } else if (this.sessionState === 2) {
        this.incrementProgress(); //resets progress
        this.changeToStudyTimer();
      } else {
        this.changeToStudyTimer();
        this.incrementProgress();
        this.toggleTimerDing()
      }
      console.log(this.progressInt);
    },

    changeToShortBreakTimer() {
      this.setSessionState(1);
      this.changeToShortBreakTime();
      this.stageButtonText = 'Short Break';
    },
    changeToLongBreakTimer() {
      this.setSessionState(2);
      this.changeToLongBreakTime();
      this.stageButtonText = 'Long Break';
    },
    changeToStudyTimer() {
      this.setSessionState(0);
      this.changeToStudyTime();
      this.stageButtonText = 'Study Session';
    },

    timeDisplay: function() {
      const minutes = parseInt(this.currentTimeInSeconds / 60);
      const seconds = this.currentTimeInSeconds % 60;
      const minutesDisplay = minutes < 10 ? '0' + minutes : minutes;
      const secondsDisplay = seconds < 10 ? '0' + seconds : seconds;
      if (this.currentTimeInSeconds === 0) {
        this.toggleSession();
      }

      return `${minutesDisplay}:${secondsDisplay}`;
    },
    toggleTimer() {
      this.timerOn = !this.timerOn;
      if (this.timerOn) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
#timer {
  position: flex;
}
.timer-display{
  position: relative;
}
#display {
  font-size: 3vw;
  position: relative;
  margin: auto;
  top: 50%;
  padding-top: 50%;
  padding-bottom: 50%;
}
.pause-icon{
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  margin:auto;
  opacity: 5%;
  z-index: 10;
  transition: 0.5s;
  height: 8vw;
  cursor: pointer;
}
.pause-icon:hover {
  opacity: 30%;
}

#toggle-session{
  font-size: 2.4vw;
}

</style>
