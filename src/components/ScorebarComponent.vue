<template>
  <div class="scorebar2" v-if="store.isAttempts()">
    <div
      class="attempt layout"
      v-for="attempt in store.currentDrill?.attempts"
      :key="attempt"
      :class="{ highlight: store.getCurrentAttempt() === attempt - 1 }"
    >
      <div class="borderBottom" :class="{ highlight: store.getCurrentAttempt() === attempt - 1 }">
        Attempt {{ toRomanNumeral(attempt) }}
      </div>

      <div>
        {{
          store.getAttemptResults()[attempt - 1] !== undefined
            ? store.getAttemptResults()[attempt - 1]
            : '?'
        }}
      </div>
    </div>
  </div>
  <div class="scorebar2" v-else-if="store.isLayout()">
    <div class="attempt layout" v-for="layout in store.currentDrill?.layouts" :key="layout">
      <div class="borderBottom" :class="{ highlight: store.getCurrentLayout() === layout - 1 }">
        Layout {{ toRomanNumeral(layout) }}
      </div>

      <div>
        {{
          store.getLayoutResults()[layout - 1] !== undefined
            ? store.getLayoutResults()[layout - 1]
            : '?'
        }}
      </div>
    </div>
  </div>
  <div class="scorebar2 mt" v-else :class="scorebarClass">
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

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.layout div {
  width: 100%;
  padding: 0.5rem;
  text-align: center;
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
  border-color: rgb(0, 0, 0);
}

.column {
  flex-direction: column;
}
</style>
