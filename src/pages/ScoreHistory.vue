<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useScoreStore } from '@/stores/scores'
import { useDrillStore } from '@/stores/drill'
import { useAuthStore } from '@/stores/auth'
import type { ScoreFromApi } from '@/types/types'

const store = useScoreStore()
const drillStore = useDrillStore()
const authStore = useAuthStore()
const scores = ref<ScoreFromApi[]>([])
const drillNames = ref<{ [key: number]: string }>({}) // To store drill names by ID
const areScores = computed(() => scores.value.length > 0)
const userName = ref('')

onMounted(async () => {
  try {
    const fetchedScores = await store.getUserScores()
    scores.value = fetchedScores
    const userNameValue = await authStore.getUserName()
    userName.value = userNameValue

    // Fetch and store drill names
    for (const score of fetchedScores) {
      const drillName = await drillStore.getDrillName(score.drill)
      drillNames.value[score.drill] = drillName
    }
  } catch (error) {
    console.error('Failed to fetch scores or drill names:', error)
  }
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const month = date.getMonth() + 1 // getMonth() returns 0-11
  const day = date.getDate()
  return `${month}/${day}`
}
</script>

<template>
  <div>
    <h3>{{ userName }}'s Scores</h3>
  </div>
  <div id="areScores" v-if="areScores">
    <div class="score" v-for="score in scores" :key="score.id">
      <p>{{ formatDate(score.createdAt) }}</p>
      <p>{{ drillNames[score.drill] }}: {{ score.score }}/{{ score.maxScore }}</p>
    </div>
  </div>
  <div v-else>
    <p>No scores yet</p>
  </div>
</template>

<style scoped>
h3 {
  margin: 1rem;
  text-decoration: underline;
}

.score {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#areScores {
  width: 100%;
}
</style>
