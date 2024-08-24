<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useDrillStore } from '@/stores/drill'
import { RouterLink } from 'vue-router'
import { Drill } from '../../types/types'

const store = useDrillStore()
const loading = ref(true)
const allDrills = ref<Drill[]>([])

onMounted(async () => {
  try {
    const drills = await store.fetchAllDrills()
    allDrills.value = drills
  } catch (error) {
    console.error('Error fetching drills:', error)
  } finally {
    console.log('alldrills!', allDrills.value)
    loading.value = false
  }
})

watch(allDrills, (newVal) => {
  if (newVal.length > 0) {
    loading.value = false
  }
})
</script>


<template>
  <h2 class="mb">Drills</h2>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="drill in allDrills.sort((a, b) => a.name.localeCompare(b.name))" :key="drill.id">
        <router-link class="noStyleLink lime" :to="`drill/${drill.id}`">
          {{ drill.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
