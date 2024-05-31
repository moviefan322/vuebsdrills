<template>
  <div class="scorebar mt" :class="scorebarClass">
    <div>
      Shot: <span>{{ store.getShot() }}</span>
    </div>
    <div id="scoremid" v-if="!isStandard">
      Position: <span>{{ store.getPosition() }}</span>
    </div>
    <div>
      Score: <span>{{ store.getScore() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDrillStore } from '@/stores/drill'

const store = useDrillStore()

const scorebarClass = computed(() => {
  return store.currentDrill!.type === 'progressive' ? 'progscore' : ''
})

const isStandard = computed(() => {
  return store.currentDrill!.type === 'standard'
})
</script>

<style scoped>
#scoremid {
  /* margin-left: 1rem;
  margin-right: 1rem; */
  padding: 0.5rem 1rem;
  border-left: 1px solid lime;
  border-right: 1px solid lime;
}

.scorebar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 1rem;
  padding: 0 1rem;
  border: 1px solid lime;
  background-color: black;
  color: lime;
}

.progscore {
  gap: 1rem;
}
</style>
