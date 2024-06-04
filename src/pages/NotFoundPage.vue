<template>
  <div class="main">
    <h1 class="mb"><font-awesome-icon class="red" :icon="['fas', 'triangle-exclamation']" /> Oops! <font-awesome-icon class="red" :icon="['fas', 'triangle-exclamation']" /></h1>
    <p>Sorry, the page you are looking for doesn't exist.</p>
  </div>
  <router-link class="noStyleLink lime" to="/">Back To Main</router-link>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}
</style>
