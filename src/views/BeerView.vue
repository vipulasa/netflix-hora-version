<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const beer = ref({});

const route = useRoute();

onMounted(async () => {
  const response = await fetch('https://api.sampleapis.com/beers/ale')
  const beers = await response.json();

  // loop through the beers
  for (let i = 0; i < beers.length; i++) {
    // if the beer id matches the route param, set the beer value
    if (beers[i].id == route.params.beer) {
      beer.value = beers[i];
    }
  }
})
</script>

<template>
  <h1>Beer</h1>
  <img :src="beer.image" :alt="beer.name" width="100" height="100">
  <h2>{{ beer.name }}</h2>
  <p>{{ beer.description }}</p>
</template>

<style scoped>

</style>