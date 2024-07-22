<template>
  <div>
    <p v-for="score in scores" :key="score.id">This page hasn't been built yet</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScoreStore } from '@/stores/scores'
import type { ScoreFromApi } from '@/types/types';

const store = useScoreStore()
const scores = ref<ScoreFromApi[]>([])

onMounted(async () => {
  scores.value = await store.getUserScores()
})
</script>
