<script setup lang="ts">
import { RouterView } from 'vue-router'
import UserComponent from './components/UserComponent.vue'
</script>

<template>
  <div id="container">
    <UserComponent />
    <RouterView />
  </div>
</template>

<style scoped>
#container {
  width: 95%;
  margin: 0.5rem auto;
  padding: 1rem;
  border: 1px dashed lime;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
