<template>
  <div id="main">
    <PoolTable
      v-if="useProps && currentDrillTableSetup"
      :tableWidth="350"
      :ballPositionsProp="ballPositionProps"
      :pottingPocketProp="currentDrillTableSetup.pottingPocketProp"
      :targetSpecs="currentDrillTableSetup.targetSpecs"
      :leaveLineProp="currentDrillTableSetup.leaveLineProp"
      :showShotLine="currentDrillTableSetup.showShotLine"
      :kickShotLineProp="currentDrillTableSetup.kickShotLineProp"
      :bankShotLineProp="currentDrillTableSetup.bankShotLineProp"
    />
    <PoolTable v-else :tableWidth="350" />
  </div>
</template>

<script setup>
import PoolTable from '../components/PoolTable.vue'
import { tableSetups } from '../data/tableSetup'
import { useDrillStore } from '../stores/drill'
import { ref, computed, watch, onBeforeMount } from 'vue'

const store = useDrillStore()
const useProps = ref(false)

const currentDrillTableSetup = computed(() => {
  return tableSetups.find((setup) => setup.drillId === store.getDrillId()) || null
})

const currentPosition = ref(store.getPosition()) // Initialize with the store's position
const currentShot = ref(store.getShot()) // Initialize with the store's shot
const ballPositionProps = ref([])

// Compute ball positions dynamically based on the current shot
const computedBallPositionProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  const positions = [...currentDrillTableSetup.value.ballPositionProps[currentPosition.value]]
  positions[0].number = currentShot.value // Assign the current shot number to the ball
  return positions
})

watch(
  [currentDrillTableSetup, currentPosition, currentShot],
  () => {
    ballPositionProps.value = computedBallPositionProps.value
    console.log('New ball position:', ballPositionProps.value) // This logs the new value
  },
  { immediate: true }
)

watch(
  () => store.getPosition(),
  (newPosition) => {
    currentPosition.value = newPosition
  }
)

watch(
  () => store.getShot(),
  (newShot) => {
    currentShot.value = newShot
  }
)

onBeforeMount(() => {
  if (store.isCurrentDrill() && currentDrillTableSetup.value) {
    useProps.value = true
  }
})

console.log('Initial position:', currentPosition.value) // This logs the initial value
</script>
