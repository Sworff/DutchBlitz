<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

const title = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('https://localhost:44370/DutchBlitz');
    title.value = response.data;
  } catch(error) {
    title.value = "Multi!"
  }
})
</script>

<template>
  <h1>{{ title }}</h1>
</template>
