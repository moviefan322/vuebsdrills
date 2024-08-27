<script setup lang="ts">
import BaseDrillTest from '../components/baseComponents/BaseDrillTest.vue'
import { useDrillStore } from '../stores/drill'
import { onMounted, computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Drill, DrillSet } from '../types/types'

const drillStore = useDrillStore()
const route = useRoute()

const setId = Number(route.params.setId)
const drillSet = ref<DrillSet | null>(null)
const currentDrill = ref<Drill | null>(null)
const currentDrillIndex = computed(() => drillStore.getCurrentDrillIndex())

// Load the drill set on component mount
onMounted(async () => {
  console.log('mounted')
  drillSet.value = await drillStore.fetchDrillSet(setId)
  console.log('drillset', drillSet.value)
  updateCurrentDrill()
})

// Helper function to update the current drill based on the current index
const updateCurrentDrill = async () => {
  if (drillSet.value && currentDrillIndex.value < (drillSet.value.drills?.length || 0)) {
    currentDrill.value = drillStore.fetchDrill(drillSet.value.drills[currentDrillIndex.value] as unknown as number) as unknown as  Drill ?? null
  }
}

watch(
  () => drillStore.getCurrentDrillIndex(),
  () => {
    updateCurrentDrill()
  }
)

// Watch for changes in the route's setId parameter
watch(
  () => route.params.setId,
  async (newSetId) => {
    const newId = Number(newSetId)
    drillSet.value = await drillStore.fetchDrillSet(newId)
    updateCurrentDrill()
  }
)

watch(
  () => drillStore.getCurrentDrillIndex(),
  async () => {
    updateCurrentDrill()
    console.log('currentDrillIndex changed', currentDrill.value)
  }
)

const nextDrill = () => {
  console.log('old', currentDrillIndex.value)
  drillStore.nextDrill()
  updateCurrentDrill()
  console.log('new', currentDrillIndex.value)
}

const previousDrill = () => {
  drillStore.previousDrill()
  updateCurrentDrill()
}

console.log('main log', currentDrill.value)
</script>

<template>
  <base-drill-test
    v-if="currentDrill"
    @nextDrill="nextDrill"
    @previousDrill="previousDrill"
  ></base-drill-test>
  <div v-else>
    It's not working
    <p>No Drill</p>
  </div>
</template>
