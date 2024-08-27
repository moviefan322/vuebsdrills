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
  console.log('drillBefore', drillSet.value?.drills[currentDrillIndex.value])
  console.log('drillIndexBefore', currentDrillIndex.value)
  currentDrill.value = await drillStore.fetchDrill(drillSet.value?.drills[currentDrillIndex.value] as unknown as number) as Drill
  console.log('drillIndex', currentDrillIndex.value)
  console.log('drill', currentDrill.value)
})

watch(
  () => drillStore.getCurrentDrillIndex(),
  (newIndex) => {
    console.log('new index', newIndex)
    currentDrill.value = drillSet.value?.drills[newIndex] as Drill
  }
)

// Watch for changes in the route's setId parameter
watch(
  () => route.params.setId,
  async (newSetId) => {
    const newId = Number(newSetId)
    drillSet.value = await drillStore.fetchDrillSet(newId)
    currentDrill.value = await drillStore.fetchDrill(drillSet.value?.drills[currentDrillIndex.value]) as Drill
    console.log('Updated drill', currentDrill.value)
  }
)

watch(
  () => currentDrill.value,
  async (newDrill) => {
    console.log('new drill', newDrill)
  })

const nextDrill = () => {
  drillStore.nextDrill()
  currentDrill.value = drillSet.value?.drills[drillStore.getCurrentDrillIndex()] as Drill
}

const previousDrill = () => {
  drillStore.previousDrill()
  currentDrill.value = drillSet.value?.drills[drillStore.getCurrentDrillIndex()] as Drill
}

console.log('main log', currentDrill.value)
</script>

<template>
  <base-drill-test
    v-if="currentDrill"
    :drill="currentDrill"
    @nextDrill="nextDrill"
    @previousDrill="previousDrill"
  ></base-drill-test>
  <div v-else>
    It's not working
    <p>No Drill</p>
  </div>
</template>
