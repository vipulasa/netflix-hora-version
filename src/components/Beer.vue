<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const beer = ref({});

const showModal = ref(true);

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

  showModal.value = true;
})
</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="showModal">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
          <div>
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <img :src="beer.image" :alt="beer.name" width="100" height="100">
              <h2>{{ beer.name }}</h2>
              <p>{{ beer.description }}</p>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <RouterLink to="/drinks" class="block w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm">
              Go back to drinks
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>