<template>
  <div v-if="areScores">
    <p v-for="score in scores" :key="score.id">
      {{ score.drillId }}: {{ score.score }}/{{ score.maxScore }}
    </p>
  </div>
  <div v-else>
    <p>No scores yet</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useScoreStore } from '@/stores/scores'
import type { ScoreFromApi } from '@/types/types'

const store = useScoreStore()
const scores = ref<ScoreFromApi[]>([])
const areScores = computed(() => scores.value.length > 0)

onMounted(async () => {
  try {
    const fetchedScores = await store.getUserScores()
    scores.value = fetchedScores
    console.log('Scores fetched:', fetchedScores) // Debug log to check scores
  } catch (error) {
    console.error('Failed to fetch scores:', error)
  }
})
</script>

<style scoped></style>
