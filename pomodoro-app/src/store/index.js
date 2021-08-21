export default {
  name: 'Store',
  state() {
    //basically the data() of stores
    return {
      progressInt: 0, // tracks how many study sessions user has done
      sessionState: 0, // 0 - study, 1 - short break, 2 - long break
      completedPomodoros: 0,
      currentTimeInSeconds: 25 * 60,
      interval: null,
      mealIsSelected: false,
      ingredients: [],
    };
  },
  mutations: {
    setIngredients(state, ingredientArray) {
      state.ingredients = ingredientArray;
    },
    toggleMealSelect(state) {
      state.mealIsSelected = !state.mealIsSelected;
    },
    resetEverything(state) {
      console.log('reset everything');
      state.progressInt = 0;
      state.sessionState = 0;
      state.interval = null;
      state.ingredients = [];
      state.currentTimeInSeconds = 25 * 60;
      state.mealIsSelected = false;
    },
    incrementProgress(state) {
      if (state.progressInt > 3) {
        state.progressInt = 0;
      } else {
        state.progressInt++;
      }
    },
    setSessionState(state, stage) {
      state.sessionState = stage;
    },

    changeToShortBreakTime(state) {
      const shortBreakTime = 5;
      state.currentTimeInSeconds = shortBreakTime * 60;
    },
    changeToLongBreakTime(state) {
      const longBreakTime = 15;
      state.currentTimeInSeconds = longBreakTime * 60;
    },
    changeToStudyTime(state) {
      const studyTime = 25;
      state.currentTimeInSeconds = studyTime * 60;
    },

    startTimer(state) {
      state.interval = setInterval(() => {
        state.currentTimeInSeconds--;
      }, 1000);
    },
    stopTimer(state) {
      clearInterval(state.interval);
    },
  },
  actions: {
    incrementProgress({ commit }) {
      commit('incrementProgress');
    },
    setSessionState({ commit }, stage) {
      commit('setSessionState', stage);
    },
    changeToShortBreakTime({ commit }) {
      commit('changeToShortBreakTime');
    },
    changeToLongBreakTime({ commit }) {
      commit('changeToLongBreakTime');
    },
    changeToStudyTime({ commit }) {
      commit('changeToStudyTime');
    },
    startTimer({ commit }) {
      commit('startTimer');
    },
    stopTimer({ commit }) {
      commit('stopTimer');
    },
    setIngredients({ commit }, ingredientArray) {
      commit('setIngredients', ingredientArray);
    },
    toggleMealSelect({ commit }) {
      commit('toggleMealSelect');
    },
    resetEverything({ commit }) {
      commit('resetEverything');
    },
  },
};
