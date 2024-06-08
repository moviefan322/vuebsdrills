<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import BrowseDrills from '@/components/menuComponents/BrowseDrills.vue'

const showExams = ref(false)
const showMainMenu = ref(true)
const showDrills = ref(false)

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

watch(showMainMenu, (newVal) => {
  if (newVal === true) {
    showExams.value = false
    showDrills.value = false
  }
})
</script>

<template>
  <div class="container">
    <BrowseDrills v-if="showDrills" />
    <div v-if="showMainMenu">
      <h1 class="mb">Welcome!</h1>
      <ul class="menulist mb">
        <li @click="handleShowExams">Take Exam</li>
        <li @click="handleShowDrills">Browse Drills</li>
      </ul>
    </div>
    <div v-if="showExams">
      <ul class="menulist mb">
        <li><router-link to="/set/1" class="noStyleLink lime">BU Fundamentals</router-link></li>
        <li>
          <router-link to="/set/2" class="noStyleLink lime">BU Skills I (Bachelors)</router-link>
        </li>
        <li>
          <router-link to="/set/3" class="noStyleLink lime">BU Skills II (Masters)</router-link>
        </li>
        <li>
          <router-link to="/set/4" class="noStyleLink lime">BU Skills III (Doctorate)</router-link>
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
</style>
