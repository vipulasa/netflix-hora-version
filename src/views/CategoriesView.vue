<script setup>
import { ref } from 'vue'

</script>

<template>
  <div>
    <h1>Categories</h1>
    {{ $route.params.category}}

    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>