<template>
  <div class="scorebar2" v-if="store.currentDrill?.attempts">
    <div
      class="attempt"
      v-for="attempt in store.currentDrill?.attempts"
      :key="attempt"
      :class="{ highlight: store.getCurrentAttempt() === attempt - 1 }"
    >
      Attempt {{ toRomanNumeral(attempt) }}:
      <span>{{
        store.getAttemptResults()[attempt - 1] ? store.getAttemptResults()[attempt - 1] : '?'
      }}</span>
    </div>
  </div>
  <div class="scorebar2 mt" v-if="!store.currentDrill?.attempts" :class="scorebarClass">
    <div class="attempt">
      Shot: <span>{{ store.getShot() }}</span>
    </div>
    <div class="attempt" v-if="!isStandard">
      Position: <span>{{ store.getPosition() }}</span>
    </div>
    <div class="attempt">
      Score: <span>{{ store.getScore() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDrillStore } from '@/stores/drill'

const store = useDrillStore()

const toRomanNumeral = (num: number) => {
  const romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  return romanNumeral[num - 1]
}

const scorebarClass = computed(() => {
  return store.currentDrill!.type === 'progressive' ? 'progscore' : ''
})

const isStandard = computed(() => {
  return store.currentDrill!.type === 'standard'
})
</script>

<style scoped>
.scoremid {
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

.scorebar2 {
  display: flex;
}

.attempt {
  border: lime 1px solid;
  padding: 0.5rem 1rem;
}

.attempt .progscore {
  gap: 1rem;
}

#filler {
  width: 1px;
  background-color: lime;
  height: 2.3rem;
  margin: 0 1rem;
}

.highlight {
  background-color: yellow;
  color: black;
}
</style>
