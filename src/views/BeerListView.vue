<script setup>
import { ref, onMounted } from 'vue'

const beers = ref([])

onMounted(async () => {
  const response = await fetch('https://api.sampleapis.com/beers/ale')
  beers.value = await response.json()
})

</script>

<template>
  <h1>List of Beer</h1>
  <ul class="grid grid-cols-10">
    <li v-for="beer in beers" :key="beer.id">
      <router-link :to="`/drinks/${beer.id}`">
        <img :src="beer.image" :alt="beer.name" width="100" height="100">
        <h2>{{ beer.name }}</h2>
        <p>{{ beer.description }}</p>
      </router-link>
    </li>
  </ul>

  <router-view></router-view>

</template>

<style scoped>

</style>