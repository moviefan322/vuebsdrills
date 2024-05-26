<script setup lang="ts">
import BaseDrill from '../components/baseComponents/BaseDrill.vue'
import { useDrillStore } from '../stores/drill'
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Drill } from '../types/types'

const drillStore = useDrillStore()
const route = useRoute()

const drillId = Number(route.params.id)

onMounted(async () => {
  await drillStore.fetchDrill(drillId)
})

watch(
  () => route.params.id,
  async (newId) => {
    await drillStore.fetchDrill(Number(newId))
  }
)

// Bind the local ref to the store's state
const drillData = computed<Drill | null>(() => drillStore.drill)

const nextDrill = () => {
  drillStore.nextDrill()
}

const previousDrill = () => {
  drillStore.previousDrill()
}
</script>

<template>
  <base-drill
    v-if="drillData"
    :title="drillData.name"
    :image="drillData.image"
    :instructions="drillData.instructions"
    :isSet="drillStore.isSet"
    @nextDrill="nextDrill"
    @previousDrill="previousDrill"
  ></base-drill>
</template>
