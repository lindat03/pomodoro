<template>
  <div>
    <Header></Header>
    <Timer />
    <PlantSelect />
    <ProgressBar />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Timer from './components/Timer.vue';
import PlantSelect from './components/PlantSelect.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
  name: 'App',
  components: { Header, Timer, PlantSelect, ProgressBar },
};
</script>
