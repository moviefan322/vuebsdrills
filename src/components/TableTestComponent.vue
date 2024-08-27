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
      :kickShotLineProp="kickShotLineProps"
      :bankShotLineProp="bankShotLineProps"
    />
    <PoolTable v-else :tableWidth="350" />
  </div>
</template>

<script setup>
import PoolTable from '../components/PoolTable.vue'
import { useDrillStore } from '../stores/drill'
import { ref, computed, watch, onBeforeMount } from 'vue'

const store = useDrillStore()
const useProps = ref(false)

// Match the current drill with the table setup
const currentDrillTableSetup = computed(() => {
  return store.getCurrentTableSetup()
})

const currentDrill = computed(() => {
  return store.getCurrentDrill()
})

const currentPosition = ref(store.getPosition())
const currentShot = ref(store.getShot())
const currentLayout = ref(store.getCurrentLayout())
const ballPositionProps = ref([])
const targetPositionProps = ref([])
const pottingPocketProps = ref([])
const leaveLineProps = ref([])
const kickShotLineProps = ref([])
const bankShotLineProps = ref([])

// Compute ball positions dynamically based on the current shot
const computedBallPositionProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []

  let positions = []
  const ballPositionProps = currentDrillTableSetup.value.ballPositionProps
  console.log('ballPositionProps', currentDrillTableSetup.value)

  if (!ballPositionProps || !Array.isArray(ballPositionProps)) {
    console.error('ballPositionProps is undefined or not an array', ballPositionProps)
    return []
  }

  if (currentDrillTableSetup.value.ballPositionProps.length === 1) {
    positions = [...currentDrillTableSetup.value.ballPositionProps[0]]
  } else if (currentDrill.value.type === 'standard') {
    positions = currentDrillTableSetup.value.ballPositionProps[currentShot.value - 1]
  } else if (currentDrill.value.type === 'layout') {
    return currentDrillTableSetup.value.ballPositionProps[currentLayout.value]
  } else {
    positions = [...currentDrillTableSetup.value.ballPositionProps[currentPosition.value]]
  }
  // replace ball number 99 with the current shot
  if (positions.length === 0) throw new Error('No ball positions found')
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
  if (currentDrill.value.type === 'standard') {
    return currentDrillTableSetup.value.targetSpecs[currentShot.value - 1]
  }
  if (currentDrillTableSetup.value.targetSpecs.length === 1) {
    targetSpecs = currentDrillTableSetup.value.targetSpecs[0]
  } else {
    targetSpecs = currentDrillTableSetup.value.targetSpecs[currentPosition.value - 1]
  }
  return targetSpecs
})

const computedPottingPocketProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  let pottingPocketProps = []
  if (currentDrillTableSetup.value.pottingPocketProp.length === 1) {
    pottingPocketProps = currentDrillTableSetup.value.pottingPocketProp[0]
  } else if (currentDrill.value.type === 'standard') {
    return currentDrillTableSetup.value.pottingPocketProp[currentShot.value - 1]
  } else {
    pottingPocketProps = currentDrillTableSetup.value.pottingPocketProp[currentPosition.value]
  }
  return pottingPocketProps
})

const computedLeaveLineProps = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  let leaveLineProps = []
  if (currentDrill.value.type === 'standard') {
    return currentDrillTableSetup.value.leaveLineProp[currentShot.value - 1]
  }
  if (currentDrillTableSetup.value.leaveLineProp.length === 1) {
    leaveLineProps = currentDrillTableSetup.value.leaveLineProp[0]
  } else {
    leaveLineProps = currentDrillTableSetup.value.leaveLineProp[currentPosition.value]
  }
  return leaveLineProps
})

const computedKickShotLineProp = computed(() => {
  if (!currentDrillTableSetup.value || !currentPosition.value) return []
  let kickShotLineProp = []
  if (currentDrillTableSetup.value.kickShotLineProp.length === 1) {
    kickShotLineProp = currentDrillTableSetup.value.kickShotLineProp[0]
  } else if (currentDrill.value.type === 'standard') {
    kickShotLineProp = currentDrillTableSetup.value.kickShotLineProp[currentShot.value - 1]
  } else {
    kickShotLineProp = currentDrillTableSetup.value.kickShotLineProp[currentPosition.value]
  }

  if (kickShotLineProp.length === 0) throw new Error('No ball kickShotLineProp found')
  if (kickShotLineProp.objectBall === 99) {
    if (currentShot.value > 15) {
      kickShotLineProp = { ...kickShotLineProp, objectBall: currentShot.value - 15 }
    } else {
      kickShotLineProp = { ...kickShotLineProp, objectBall: currentShot.value }
    }
  }

  return kickShotLineProp
})

const computedBankShotLineProp = computed(() => {
  let bankShotLineProp = []
  if (currentDrillTableSetup.value.bankShotLineProp.objectBall === 99) {
    if (currentShot.value > 15) {
      bankShotLineProp = {
        ...currentDrillTableSetup.value.bankShotLineProp,
        objectBall: currentShot.value - 15
      }
    } else {
      bankShotLineProp = {
        ...currentDrillTableSetup.value.bankShotLineProp,
        objectBall: currentShot.value
      }
    }
  }
  return bankShotLineProp
})

watch(
  [currentDrillTableSetup, currentPosition, currentShot, currentLayout],
  () => {
    if (currentDrillTableSetup.value) {
      ballPositionProps.value = computedBallPositionProps.value
      targetPositionProps.value = computedTargetPositionProps.value
      pottingPocketProps.value = computedPottingPocketProps.value
      leaveLineProps.value = computedLeaveLineProps.value
      kickShotLineProps.value = computedKickShotLineProp.value
      bankShotLineProps.value = computedBankShotLineProp.value
    }
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

watch(
  () => store.getCurrentLayout(),
  (newLayout) => {
    currentLayout.value = newLayout
  }
)

onBeforeMount(() => {
  if (store.isCurrentDrill() && currentDrillTableSetup.value) {
    useProps.value = true
  }
})
</script>
