<script setup lang="ts">
import { computed } from 'vue'
import { useScoreStore } from '../stores/scores'
import { useDrillStore } from '../stores/drill'
import {RouterLink} from 'vue-router'

const store = useScoreStore()
const drillStore = useDrillStore()

const scores = store.getSetScore()

const totalScore = computed(() => {
  const pointsScored = scores.reduce((acc, score) => acc + score.score, 0)
  const possibePoints = scores.reduce((acc, score) => acc + score.maxScore, 0)

  return `${pointsScored}/${possibePoints}`
})
</script>

<template>
  <div class="container" v-if="scores.length > 0">
    <h1>Results</h1>
    <ul class="mt">
      <li v-for="score in scores" :key="score.id">
        {{ drillStore.getDrillName(score.drillId) }}: {{ score.score }}/{{ score.maxScore }}
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
