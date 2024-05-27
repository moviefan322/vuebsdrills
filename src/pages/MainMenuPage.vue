<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Welcome</h1>
    <button class="myButt">
      <router-link to="/set/1" class="noStyleLink lime">BU Fundamentals</router-link>
    </button>
  </div>
</template>

<style scoped>
.lime {
  color: lime;
}

.lime:hover {
  color: black;
}
</style>
