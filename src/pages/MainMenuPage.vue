<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import BrowseDrills from '@/components/menuComponents/BrowseDrills.vue'
import { useAuthStore } from '@/stores/auth'
import { useDrillStore } from '@/stores/drill'
import type { UserObject, DrillSet } from '@/types/types'

const showExams = ref(false)
const showMainMenu = ref(true)
const showDrills = ref(false)
const allDrillSets = ref<DrillSet[]>([])
const store = useAuthStore()
const drillStore = useDrillStore()
const user = ref<UserObject | null>(null)

const handleShowExams = () => {
  showMainMenu.value = false
  showExams.value = true
}

const handleGoBack = () => {
  showMainMenu.value = true
}

const handleShowDrills = () => {
  showMainMenu.value = false
  showDrills.value = true
}

const userName = computed(() => user.value?.name || '')

watch(showMainMenu, (newVal) => {
  if (newVal === true) {
    showExams.value = false
    showDrills.value = false
  }
})

onMounted(async () => {
  store.checkForToken()
  drillStore.fetchAllDrills()
  user.value = await store.getUser()
  const drillSets = await drillStore.fetchAllDrillSets()
  allDrillSets.value = drillSets
  console.log(drillSets)
})
</script>

<template>
  <div class="container">
    <BrowseDrills v-if="showDrills" />
    <div v-if="showMainMenu">
      <h1 class="mb">Welcome{{ userName ? ', ' + userName : '' }}!</h1>
      <ul class="menulist mb">
        <li @click="handleShowExams">Take Exam</li>
        <li @click="handleShowDrills">Browse Drills</li>
      </ul>
    </div>
    <div v-if="showExams">
      <h2 class="center mb">BU Exams</h2>
      <ul class="menulist mb" v-for="drillSet in allDrillSets" :key="drillSet.name">
        <li>
          <router-link :to="`/set/${drillSet.id}`" class="noStyleLink lime">{{
            drillSet.name
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="mt" v-if="!showMainMenu">
      <div class="back" @click="handleGoBack">
        <font-awesome-icon :icon="['fas', 'arrow-left']" /> Go Back
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 1rem;
}

.lime {
  color: lime;
}

.lime:hover,
.menulist li:hover {
  list-style-type: disc;
  color: yellow;
  cursor: pointer;
}

.menulist {
  list-style-type: square;
  padding: 0;
}

.back {
  color: lime;
  cursor: pointer;
  text-align: start;
  justify-self: center;
  width: 100%;
}

.back:hover {
  color: yellow;
}

.mb {
  margin-bottom: 1rem;
}
</style>
