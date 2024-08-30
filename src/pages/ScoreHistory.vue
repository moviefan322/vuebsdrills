<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useScoreStore } from '@/stores/scores'
import { useDrillStore } from '@/stores/drill'
import { useAuthStore } from '@/stores/auth'
import type { ScoreFromApi, DrillSetScoreFromApi } from '@/types/types'

const store = useScoreStore()
const drillStore = useDrillStore()
const authStore = useAuthStore()
const scores = ref<ScoreFromApi[]>([])
const drillNames = ref<{ [key: number]: string }>({}) // To store drill names by ID
const areScores = computed(() => scores.value.length > 0)
const userName = ref('')
const expandedSetScores = ref<{ [key: number]: boolean }>({})

const toggleExpandScore = (id: number) => {
  expandedSetScores.value[id] = !expandedSetScores.value[id]
}

onMounted(async () => {
  try {
    const fetchedScores = await store.getUserScores()
    const filteredScores = fetchedScores.filter((score: ScoreFromApi) => !score.isSet)
    const setScores = await store.getUserSetScores()
    const combinedScores = [...filteredScores, ...setScores].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
    scores.value = combinedScores
    const userNameValue = await authStore.getUserName()
    userName.value = userNameValue

    // Fetch and store drill names
    for (const score of fetchedScores) {
      const drillName = await drillStore.getDrillName(score.drill)
      drillNames.value[score.drill] = drillName
    }

    for (const score of setScores) {
      const drillName = await drillStore.getDrillSetName(score.drill_set)
      console.log(drillName)
      drillNames.value[score.drill_set] = drillName
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

function isScoreFromApi(object: any): object is ScoreFromApi {
  return 'drill' in object && 'score' in object && 'maxScore' in object
}

function isDrillSetScoreFromApi(object: any): object is DrillSetScoreFromApi {
  return 'drill_set' in object && 'scores' in object && 'total_score' in object
}
</script>

<template>
  <div>
    <h3>{{ userName }}'s Scores</h3>
  </div>
  <div id="areScores" v-if="areScores">
    <div v-for="score in scores" :key="score.id">
      <div class="score" v-if="isScoreFromApi(score)">
        <p>{{ formatDate(score.createdAt) }}</p>
        <p>{{ drillNames[score.drill] }}: {{ score.score }}/{{ score.maxScore }}</p>
      </div>
      <div v-if="isDrillSetScoreFromApi(score)">
        <div class="score">
          <p>{{ formatDate(score.createdAt) }}</p>
          <p>
            <button @click="toggleExpandScore(score.id)" class="butt">
              {{ expandedSetScores[score.id] ? '-' : '+' }}
              {{ drillNames[score.drill_set] }}: {{ score.total_score }}/{{ score.total_max_score }}
            </button>
          </p>
        </div>
        <div v-if="expandedSetScores[score.id]">
          <div
            v-for="individualSetScore in score.scores"
            :key="individualSetScore.id"
            class="score"
          >
            <p></p>
            <p>
              {{ drillNames[individualSetScore.drill] }}: {{ individualSetScore.score }}/
              {{ individualSetScore.maxScore }}
            </p>
          </div>
        </div>
      </div>
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

.setScoreExpand {
  align-self: flex-end;
}

#areScores {
  width: 100%;
}

.butt {
  font: inherit;
  color: lime;
  border: none;
  background-color: transparent;
  font-size: 1rem;
}

.butt:hover {
  color: yellow;
  cursor: pointer;
}
</style>
