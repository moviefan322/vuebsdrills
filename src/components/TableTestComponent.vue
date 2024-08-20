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

const currentPosition = ref(4)
const ballPositionProps = ref([])

watch(
  [currentPosition],
  ([newPosition]) => {
    if (newPosition) {
      ballPositionProps.value = currentDrillTableSetup.value.ballPositionProps[newPosition] || []
      console.log('New ball position:', ballPositionProps.value) // This logs the new value
    }
  },
  { immediate: true }
)

watch(
  () => store.getPosition(),
  (newPosition) => {
    currentPosition.value = newPosition
  }
)

onBeforeMount(() => {
  if (store.isCurrentDrill() && currentDrillTableSetup.value) {
    useProps.value = true
  }
})

console.log('Initial position:', currentPosition.value) // This logs the initial value
</script>
