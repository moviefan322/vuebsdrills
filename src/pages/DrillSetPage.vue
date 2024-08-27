<script setup lang="ts">
import BaseDrillTest from '../components/baseComponents/BaseDrillTest.vue'
import { useDrillStore } from '../stores/drill'
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Drill } from '../types/types'

const drillStore = useDrillStore()
const route = useRoute()

const setId = Number(route.params.setId)

onMounted(async () => {
  await drillStore.setDrillSet(setId)
  const drillSet = drillStore.getDrillSet()
  console.log('drillSet', drillSet)
})

const currentDrill = computed<Drill | null>(() => drillStore.getCurrentDrill())

const nextDrill = () => {
  drillStore.incrementCurrentDrillIndex()
}

const previousDrill = () => {
  drillStore.decrementCurrentDrillIndex()
}
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
