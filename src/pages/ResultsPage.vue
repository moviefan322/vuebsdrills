<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useScoreStore } from '../stores/scores'
import { useDrillStore } from '../stores/drill'
import {RouterLink} from 'vue-router'

const store = useScoreStore()
const drillStore = useDrillStore()
const drillNames = ref<{ [key: number]: string }>({})

const scores = store.getSetScore()

const totalScore = computed(() => {
  const pointsScored = scores.reduce((acc, score) => acc + score.score, 0)
  const possibePoints = scores.reduce((acc, score) => acc + score.maxScore, 0)

  return `${pointsScored}/${possibePoints}`
})

onMounted(async () => {
  for (const score of scores) {
    drillNames.value[score.drill] = await drillStore.getDrillName(score.drill)
  }
  console.log(drillNames.value)  // Log to check if drill names are loaded
})

console.log(scores)
</script>

<template>
  <div class="container" v-if="scores.length > 0">
    <h1>Results</h1>
    <ul class="mt">
      <li v-for="score, index in scores" :key="index">
        {{ drillNames[score.drill] || 'Loading...' }}: {{ score.score }}/{{ score.maxScore }}
      </li>
    </ul>
    <h2 className="mt">Total: {{ totalScore }}</h2>
  </div>
  <div class="container" v-else>
    <h1>What results?</h1>
    <p class="mx mt center">
      You couldn't score with a pocketfull of quarters at a nickel whorehouse
    </p>
      <router-link class="b2m" to="/">Back To Main</router-link>
  </div>
</template>

<style scoped>
.mt {
  margin-top: 1rem;
}

.mx {
  margin: 1rem;
}

.center {
  text-align: center;
}

.b2m {
  color: white;
}
</style>
