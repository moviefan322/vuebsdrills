<template>
  <div class="mb">
    <h1>{{ store.currentDrill!.name }}</h1>
  </div>
  <div class="showInst">
    <button class="noStyleButt instButt" @click="toggleShowInstructions">
      {{ showInstructions ? `Hide` : `Show` }} Instructions
    </button>
  </div>
  <div v-if="showInstructions" id="instruct" class="smFont mt mb" v-html="setInstructions"></div>
  <div id="image-wrapper" class="mb">
    <div id="image-container" :style="backgroundImageStyle"></div>
  </div>
  <ScorebarComponent />
  <div v-if="store.getDrillComplete()" class="endGameMes">
    {{ endGameMessage }} <br />
    You scored {{ store.getScore() }} point{{ store.getScore() !== 1 ? 's' : '' }}!
  </div>
  <ControlsComponent />
  <div class="mt my">
    <router-link
      to="/results"
      class="myButt noStyleLink"
      v-if="store.isLastDrill && store.getDrillComplete()"
      >View Results</router-link
    >
  </div>
  <div id="footControl" v-if="store.getDrillComplete() && !store.isLastDrill">
    <button
      class="myButt"
      :class="{ hidden: store.isFirstDrill || isExam }"
      @click="handlePrevious"
      v-if="store.getIsSet()"
    >
      &lt;&lt;
    </button>
    <button
      class="myButt"
      :class="{ hidden: store.getShot() === 1 }"
      @click="store.resetValues"
      v-if="!isExam"
    >
      {{ store.getDrillComplete() ? 'Try Again' : 'Start Over' }}
    </button>
    <button
      class="myButt"
      :class="{ hidden: store.isLastDrill || !store.getDrillComplete() }"
      @click="handleNext"
      v-if="store.getIsSet()"
    >
      >>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDrillStore } from '../../stores/drill'
import { RouterLink } from 'vue-router'
import ScorebarComponent from '../ScorebarComponent.vue'
import ControlsComponent from '../ControlsComponent.vue'

const store = useDrillStore()

//emits

const emits = defineEmits(['nextDrill', 'previousDrill'])

// local data

const isExam = true
const showInstructions = ref(false)

// methods

const toggleShowInstructions = () => {
  showInstructions.value = !showInstructions.value
}

const handleNext = () => {
  store.resetValues()
  emits('nextDrill')
}

const handlePrevious = () => {
  store.resetValues()
  emits('previousDrill')
}

// computed

const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${store.currentDrill!.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'fit-content',
  width: 'inherit',
  height: '14.5rem' // Adjust height as needed
}))

const endGameMessage = computed(() => {
  if (store.getScore() <= +store.currentDrill!.maxScore * 0.2) {
    return `Damn, you suck!`
  }
  if (store.getScore() <= +store.currentDrill!.maxScore * 0.4) {
    return `You're not very good at this.`
  }
  if (store.getScore() <= +store.currentDrill!.maxScore * 0.6) {
    return `Not bad.`
  }
  if (store.getScore() <= +store.currentDrill!.maxScore * 0.8) {
    return `You're pretty good.`
  }
  if (store.getScore() <= +store.currentDrill!.maxScore) {
    return `You are killing it!`
  }
  return 'Drill complete'
})

const setInstructions = computed(() => {
  return store.currentDrill!.instructions
})

watch(store, (newV, oldV) => {
  if (newV !== oldV) {
    if (store.currentDrill!.type === 'progressive') {
      store.setPosition(4)
    } else {
      store.setPosition(0)
    }
  }
})
</script>

<style scoped>
.endGameMes {
  font-size: 20px;
  font-weight: bolder;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

#footControl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
}

#image-wrapper {
  padding: 0;
  width: 100%;
}

.showInst {
  cursor: pointer;
  color: lime;
  text-decoration: underline;
  align-self: center;
  font-size: 10px;
  margin-bottom: 0.5rem;
}

.instButt {
  background-color: transparent;
  border: none;
  color: lime;
  text-decoration: underline;
  font-size: 10px;
}
</style>
