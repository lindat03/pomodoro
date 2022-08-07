<template>
  <div class="ingredient-div">
    <img
      :src="require('../assets/ingredients/ingredient_' + imgSrc + '.png')"
      style="width: 2.5rem"
    />
  </div>
</template>

<script>
export default {
  name: 'Ingredient',
  props: {
    imgSrc: String,
  },
};
</script>
