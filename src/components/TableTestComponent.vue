<template>
  <div id="main">
    <PoolTable
      :tableWidth="350"
      :ballPositionsProp="ballPositionProps.value"
      :pottingPocketProp="currentDrillTableSetup.pottingPocketProp"
      :targetSpecs="currentDrillTableSetup.targetSpecs"
      :leaveLineProp="currentDrillTableSetup.leaveLineProp"
      :showShotLine="currentDrillTableSetup.showShotLine"
      :kickShotLineProp="currentDrillTableSetup.kickShotLineProp"
      :bankShotLineProp="currentDrillTableSetup.bankShotLineProp"
      v-if="useProps"
    />
    <PoolTable :tableWidth="350" v-else />
  </div>
</template>

<script setup>
import PoolTable from '../components/PoolTable.vue'
import { tableSetups } from '../data/tableSetup'
import { useDrillStore } from '../stores/drill'
import { ref, computed, onBeforeMount } from 'vue'

const store = useDrillStore()
const useProps = ref(false)
const currentDrillTableSetup = computed(() => tableSetups.find(setup => setup.drillId === store.getDrillId()))

const ballPositionProps = ref([])
const ballPositionIndex = computed(() => store.getPosition() - 1)

if(currentDrillTableSetup.value.drillType === 'progressive') {
  ballPositionProps.value = currentDrillTableSetup.value.ballPositionProps[ballPositionIndex.value]
}

onBeforeMount(() => {
  if (store.isCurrentDrill()) {
    useProps.value = true
  }
})
</script>
