<script setup lang="ts">
import BaseDrillTest from '../components/baseComponents/BaseDrillTest.vue'
import { useDrillStore } from '../stores/drill'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Drill } from '../types/types'

const drillStore = useDrillStore()
const route = useRoute()
const drillId = Number(route.params.id)
const drillData = ref<Drill | null>(null) // Initialize with null

onMounted(async () => {
  await drillStore.fetchDrill(drillId)
  drillData.value = drillStore.drill // Set the drillData after fetching
})

watch(
  () => route.params.id,
  async (newId) => {
    await drillStore.fetchDrill(Number(newId))
    drillData.value = drillStore.drill // Ensure drillData is updated
  }
)

// Bind the local ref to the store's state
watch(
  () => drillStore.drill,
  (newVal) => {
    drillData.value = newVal
  }
)

const nextDrill = () => {
  drillStore.nextDrill()
}

const previousDrill = () => {
  drillStore.previousDrill()
}

</script>

<template>
  <base-drill-test
    v-if="drillData && drillData.id === drillId"
    @nextDrill="nextDrill"
    @previousDrill="previousDrill"
  ></base-drill-test>
</template>
