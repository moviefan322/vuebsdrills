<script setup lang="ts">
import BaseDrillTest from '../components/baseComponents/BaseDrillTest.vue'
import { useDrillStore } from '../stores/drill'
import { useScoreStore } from '../stores/scores'
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Drill } from '../types/types'

const drillStore = useDrillStore()
const scoreStore = useScoreStore()
const route = useRoute()

const setId = Number(route.params.setId)

onMounted(async () => {
  scoreStore.resetSetScore()
  await drillStore.setDrillSet(setId)
})

const currentDrill = computed<Drill | null>(() => drillStore.getCurrentDrill())

const nextDrill = () => {
  drillStore.incrementCurrentDrillIndex()
}

const previousDrill = () => {
  drillStore.decrementCurrentDrillIndex()
}

console.log('setScore', scoreStore.getSetScore())

watch(
  () => drillStore.getCurrentDrill(),
  (newVal) => {
    console.log('newVal', newVal)
    console.log('setScore', scoreStore.getSetScore())
  }
)
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
