<template>
  <div id="main">
    <PoolTable
      v-if="useProps && currentDrillTableSetup"
      :tableWidth="350"
      :ballPositionsProp="ballPositionProps"
      :pottingPocketProp="pottingPocketProps"
      :targetSpecs="targetPositionProps"
      :leaveLineProp="leaveLineProps"
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

// Match the current drill with the table setup
const currentDrillTableSetup = computed(() => {
  return tableSetups.find((setup) => setup.drillId === store.getDrillId()) || null
})

const currentPosition = ref(store.getPosition())
const currentShot = ref(store.getShot())
const ballPositionProps = ref([])
const targetPositionProps = ref([])
const pottingPocketProps = ref([])
const leaveLineProps = ref([])

// Compute ball positions dynamically based on the current shot
const computedBallPositionProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  let positions = []
  if (currentDrillTableSetup.value.ballPositionProps.length === 1) {
    positions = [...currentDrillTableSetup.value.ballPositionProps[0]]
  } else if (currentDrillTableSetup.value.drillType === 'standard') {
    positions = currentDrillTableSetup.value.ballPositionProps[currentShot.value - 1]
  } else {
    positions = [...currentDrillTableSetup.value.ballPositionProps[currentPosition.value]]
  }
  // replace ball number 99 with the current shot
  positions = positions.map((position) => {
    if (position.number === 99) {
      if (currentShot.value > 15) {
        return { ...position, number: currentShot.value - 15 }
      } else {
        return { ...position, number: currentShot.value }
      }
    }
    return position
  })

  return positions
})

const computedTargetPositionProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  let targetSpecs = []
  if (currentDrillTableSetup.value.drillType === 'standard') {
    return currentDrillTableSetup.value.targetSpecs[currentShot.value - 1]
  }
  if (currentDrillTableSetup.value.targetSpecs.length === 1) {
    targetSpecs = currentDrillTableSetup.value.targetSpecs[0]
  } else {
    console.log(currentPosition.value)
    targetSpecs = currentDrillTableSetup.value.targetSpecs[currentPosition.value - 1]
  }
  return targetSpecs
})

const computedPottingPocketProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  let pottingPocketProps = []
  if (currentDrillTableSetup.value.pottingPocketProp.length === 1) {
    pottingPocketProps = currentDrillTableSetup.value.pottingPocketProp[0]
  } else if (currentDrillTableSetup.value.drillType === 'standard') {
    return currentDrillTableSetup.value.pottingPocketProp[currentShot.value - 1]
  } else {
    pottingPocketProps = currentDrillTableSetup.value.pottingPocketProp[currentPosition.value]
  }
  return pottingPocketProps
})

const computedLeaveLineProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  let leaveLineProps = []
  if (currentDrillTableSetup.value.drillType === 'standard') {
    return currentDrillTableSetup.value.leaveLineProp[currentShot.value - 1]
  }
  if (currentDrillTableSetup.value.leaveLineProp.length === 1) {
    leaveLineProps = currentDrillTableSetup.value.leaveLineProp[0]
  } else {
    leaveLineProps = currentDrillTableSetup.value.leaveLineProp[currentPosition.value]
  }
  return leaveLineProps
})

watch(
  [currentDrillTableSetup, currentPosition, currentShot],
  () => {
    ballPositionProps.value = computedBallPositionProps.value
    targetPositionProps.value = computedTargetPositionProps.value
    pottingPocketProps.value = computedPottingPocketProps.value
    leaveLineProps.value = computedLeaveLineProps.value
  },
  { immediate: true }
)

watch

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
