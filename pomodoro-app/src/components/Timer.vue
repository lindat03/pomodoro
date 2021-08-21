<template>
  <div id="timer">
    <img class="pause-icon" src="../assets/pause.png" alt="" />
    <div id="display">
      {{ timeDisplay() }}
    </div>
    <button @click="toggleTimer()">{{ timerButtonText }} Timer</button>
    <button @click="toggleSession()">End {{ stageButtonText }}</button>
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
    if (this.progressInt !== 4) {
      this.resetEverything();
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

    toggleSession() {
      if (this.timerOn) {
        this.toggleTimer();
      }
      if (this.sessionState === 0) {
        if (this.progressInt < 3) {
          this.changeToShortBreakTimer();
          this.incrementProgress();
        } else {
          this.changeToLongBreakTimer();
          this.incrementProgress();
        }
      } else if (this.sessionState === 2) {
        this.incrementProgress(); //resets progress
        this.changeToStudyTimer();
        //do bake function!!!!
      } else {
        this.changeToStudyTimer();
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
        console.log('bruh');
        this.toggleSession();
      }

      return `${minutesDisplay}:${secondsDisplay}`;
    },
    toggleTimer() {
      this.timerOn = !this.timerOn;
      if (this.timerOn) {
        this.timerButtonText = 'Pause';
        this.startTimer();
      } else {
        this.timerButtonText = 'Start';
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
#timer {
  position: relative;
  width: 20rem;
  height: 10rem;
  margin: auto;
}

#display {
  position: absolute;
  top: 7rem;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, 0%);
}

.pause-icon {
  position: absolute;
  height: 4rem;
  width: 4rem;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 6.5rem;
  opacity: 0%;
  z-index: 10;
  transition: 0.5s;
}

.pause-icon:hover {
  opacity: 30%;
}
</style>
