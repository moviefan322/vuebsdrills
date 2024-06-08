<script setup lang="ts">
import { useDrillStore } from '@/stores/drill'
import { RouterLink } from 'vue-router'

const store = useDrillStore()
</script>

<template>
  <h2 class="mb">Drills</h2>
  <div>
    <ul>
      <li
        v-for="drill in store.getAllDrills().sort((a, b) => a.name.localeCompare(b.name))"
        :key="drill.id"
      >
        <router-link class="noStyleLink lime" :to="`drill/${drill.id}`">
          {{ drill.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
