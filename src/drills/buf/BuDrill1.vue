<template>
  <div class="mb"><h1>Cut Shot Drill</h1></div>
  <div class="showInst">
    <button class="noStyleButt instButt" @click="toggleShowInstructions">
      {{ showInstructions ? `Hide` : `Show` }} Intstructions
    </button>
  </div>
  <div v-if="showInstructions" class="smFont mt mb">
    • Start with the cue ball (CB) in position 4. Each time you pocket the object ball (OB), advance
    the CB one position (e.g., from 4 to 5); and with each miss, move down by one number (e.g., from
    4 to 3). If you succeed at position 7 or miss at position 1, stay at that position. <br />
    • Continue for 10 shots total unless you already have a guaranteed score of 10 (e.g., you can
    stop if you make the first eight shots). <br />
    <br />
  </div>
  <div id="image-wrapper" class="mb">
    <div id="image-container" :style="backgroundImageStyle"></div>
  </div>
  <div id="scorebar" v-if="!drillComplete" class="mt">
    <div>
      Shot: <span>{{ shot }}</span>
    </div>
    <div id="scoremid">
      Position: <span>{{ position }}</span>
    </div>
    <div>
      Score: <span>{{ score }}</span>
    </div>
  </div>
  <div v-if="drillComplete" class="endGameMes">
    {{ endGameMessage }} <br />
    You scored {{ score }} point{{ score !== 1 ? 's' : '' }}!
  </div>
  <div id="controls">
    <button
      class="noStyleButt control make"
      :class="{ disabled: drillComplete }"
      @click="handleMake"
      :disabled="drillComplete"
    >
      &#x2714;
    </button>
    <button
      class="muButt control undo"
      :class="{ disabledUndo: disableUndo }"
      @click="undo"
      :disable = "disableUndo"
    >
      <font-awesome-icon icon="fa-solid fa-rotate-left" />
    </button>
    <button
      class="noStyleButt control miss"
      :class="{ disabled: drillComplete }"
      @click="handleMiss"
      :disabled="drillComplete"
    >
      X
    </button>
  </div>
  <div id="footControl">
    <button class="myButt">&lt;&lt;</button>
    <button class="myButt" @click="resetValues">Try Again</button>
    <button class="myButt">>></button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// data

const shot = ref(1)
const position = ref(4)
const bonus = ref(0)

const previousState = ref({
  shot: 1,
  position: 4,
  bonus: 0
})

const drillComplete = ref(false)
const showInstructions = ref(false)
const imageSrc = ref(
  'https://res.cloudinary.com/dnc2xvyms/image/upload/v1716658046/Screenshot_2024-05-25_at_1.24.29_PM_wdum1u.png'
)

// methods

const toggleShowInstructions = () => {
  showInstructions.value = !showInstructions.value
}

const incrementShot = () => {
  if (shot.value === 10) {
    drillComplete.value = true
    return
  }
  shot.value++
}

const incrementScore = () => {
  if (position.value === 7) {
    bonus.value++
    return
  }
}

const incrementPosition = () => {
  if (position.value === 7) {
    return
  }
  position.value++
}

const decrementPosition = () => {
  if (position.value === 1) {
    return
  }
  position.value--
}

const resetValues = () => {
  shot.value = 1
  position.value = 4
  bonus.value = 0
  drillComplete.value = false
}

const handleMake = () => {
  updatePreviousState()
  incrementScore()
  incrementPosition()
  incrementShot()
}

const handleMiss = () => {
  updatePreviousState()
  decrementPosition()
  incrementShot()
}

const updatePreviousState = () => {
  previousState.value = {
    shot: shot.value,
    position: position.value,
    bonus: bonus.value
  }
}

const undo = () => {
  shot.value = previousState.value.shot
  position.value = previousState.value.position
  bonus.value = previousState.value.bonus
}

// computed

const score = computed(() => position.value + bonus.value)

const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${imageSrc.value})`,
  backgroundSize: 'cover',
  backgroundPosition: 'fit-content',
  width: 'inherit',
  height: '14.5rem' // Adjust height as needed
}))

const endGameMessage = computed(() => {
  if (score.value <= 2) {
    return `Damn, you suck!`
  }
  if (score.value <= 4) {
    return `You're not very good at this.`
  }
  if (score.value <= 6) {
    return `Not bad.`
  }
  if (score.value <= 8) {
    return `You're pretty good.`
  }
  if (score.value <= 10) {
    return `You are killing it!`
  }
  return 'Drill complete'
})

const disableUndo = computed(() => {
  if (shot.value === 1) {
    return true
  }
  if (previousState.value.shot === shot.value) {
    return true
  }
  return false
})

// watch

watch(shot, () => {
  if (shot.value >= 8 && score.value >= 12) {
    drillComplete.value = true
  }
})

watch(drillComplete, () => {
  if (drillComplete.value) {
    if (score.value >= 10) {
      bonus.value = 3
    }
  }
})
</script>

<style scoped>
.endGameMes {
  font-size: 20px;
  font-weight: bolder;
  margin-top: 1rem;
  text-align: center;
}

#footControl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
}

#controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 50%;
}

.control {
  height: 3rem;
  width: 3rem;
  border: 1px solid black;
  border-radius: 50%;
}

.make {
  font-size: 30px;
  background-color: rgb(0, 255, 0);
}

.miss {
  font-size: 30px;
  font-weight: bolder;
  background-color: rgb(255, 0, 0);
}

.undo {
  height: 2rem;
  width: 2rem;
  font-size: 15px;
  background-color: black;
  color: lime;
  border: 1px solid lime;
}

.disabledUndo {
  visibility: hidden;
}

.disabled {
  background-color: rgb(200, 200, 200);
}

#scoremid {
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-left: 1px solid lime;
  border-right: 1px solid lime;
}

#scorebar {
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

.smFont {
  font-size: 10px;
}

#image-wrapper {
  padding: 0;
  width: 100%;
}

.mb {
  margin-bottom: 1rem;
}

.mt {
  margin-top: 1rem;
}

.showInst {
  cursor: pointer;
  color: rgb(124, 124, 255);
  text-decoration: underline;
  align-self: start;
  font-size: 10px;
}

.instButt {
  background-color: transparent;
  border: none;
  color: rgb(124, 124, 255);
  text-decoration: underline;
  font-size: 10px;
}
</style>
