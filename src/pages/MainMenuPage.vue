<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PoolTable from '@/components/PoolTable.vue'
</script>

<template>
  <div>
    <h1>Welcome</h1>
    <button class="myButt">
      <router-link to="/set/1" class="noStyleLink lime">BU Fundamentals</router-link>
    </button>
  </div>
  <pool-table></pool-table>
</template>


<style scoped>
.lime {
  color: lime;
}

.lime:hover {
  color: black;
}
</style>
