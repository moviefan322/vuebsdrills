<script setup lang="ts">
import BaseDrill from '../components/baseComponents/BaseDrill.vue'
import { useDrillStore } from '../stores/drill'
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Drill } from '../types/types'

const drillStore = useDrillStore()
const route = useRoute()

const setId = Number(route.params.setId)

onMounted(async () => {
  await drillStore.fetchDrillSet(setId)
})

watch(
  () => route.params.setId,
  async (newSetId) => {
    await drillStore.fetchDrillSet(Number(newSetId))
  }
)

const currentDrill = computed<Drill | null>(() => drillStore.currentDrill)
const isSet = computed(() => drillStore.isSet)

const nextDrill = () => {
  drillStore.nextDrill()
}

const previousDrill = () => {
  drillStore.previousDrill()
}
</script>

<template>
  <base-drill
    v-if="currentDrill"
    :title="currentDrill.name"
    :image="currentDrill.image"
    :instructions="currentDrill.instructions"
    :isSet="isSet"
    @nextDrill="nextDrill"
    @previousDrill="previousDrill"
  ></base-drill>
</template>
