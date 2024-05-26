<script setup lang="ts">
import { RouterView } from 'vue-router'

const testEnv = (import.meta as any).env.VITE_APP_TEST

console.log(testEnv)
</script>

<template>
  <div id="container">
    <RouterView />
  </div>
</template>

<style scoped>
#container {
  width: 95%;
  margin: .5rem auto;
  padding: 1rem;
  border: 1px dashed lime;
  display: flex;
  flex-direction: column;
  align-items: center;
}</style>
