<template>
  <base-dialog :fixed="false" :show="drillComplete" title="Drill Complete!" @close="handleClose">
    Congrats! You scored {{ score }} points!
  </base-dialog>
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
  <div id="image-wrapper">
    <div id="image-container" :style="backgroundImageStyle"></div>
  </div>
  <div id="scorebar">
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

const shot = ref(1)
const position = ref(4)
const bonus = ref(0)
const drillComplete = ref(false)
const score = computed(() => position.value + bonus.value)

const imageSrc = ref(
  'https://res.cloudinary.com/dnc2xvyms/image/upload/v1716658046/Screenshot_2024-05-25_at_1.24.29_PM_wdum1u.png'
)

const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${imageSrc.value})`,
  backgroundSize: 'cover',
  backgroundPosition: 'fit-content',
  width: 'inherit',
  height: '15rem' // Adjust height as needed
}))

const showInstructions = ref(false)
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

const handleClose = () => {
  resetValues()
  drillComplete.value = false
}

const handleMake = () => {
  incrementScore()
  incrementPosition()
  incrementShot()
}

const handleMiss = () => {
  decrementPosition()
  incrementShot()
}

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
  width: 40%;
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

.disabled {
  background-color: rgb(200, 200, 200);
}

#scoremid {
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

#scorebar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 1rem;
  padding: 0 1rem;
  border: 1px solid black;
  background-color: rgb(250, 250, 205);
  color: black;
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
