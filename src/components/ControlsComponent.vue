<template>
  <div v-if="store.isAttempts() || store.isLayout()">
    <h5 class="center mt mb">How many Balls did you pot?</h5>
    <div class="buttonRow" v-if="store.isAttempts()">
      <div class="lime">0</div>
      <div
        class="lime"
        v-for="score in store.getMaxScore()"
        :key="score"
        @click="submitAttemptScore(score)"
      >
        {{ score }}
      </div>
    </div>
    <div class="buttonRow" v-if="store.isLayout()">
      <div class="lime">0</div>
      <div
        class="lime"
        v-for="score in store.getLayoutMaxScore()"
        :key="score"
        @click="submitLayoutScore(score)"
      >
        {{ score }}
      </div>
    </div>
  </div>
  <div class="controls" v-if="!store.getDrillComplete() && !store.currentDrill?.attempts">
    <button
      class="noStyleButt control make"
      :class="{ disabled: store.getDrillComplete() }"
      @click="handleMake"
      :disabled="store.getDrillComplete()"
    >
      &#x2714;
    </button>
    <button
      class="myButt control undo"
      :class="{ hidden: disableUndo }"
      @click="store.undo"
      :disable="disableUndo"
    >
      <font-awesome-icon icon="fa-solid fa-rotate-left" />
    </button>
    <button
      class="noStyleButt control miss"
      :class="{ disabled: store.getDrillComplete() }"
      @click="handleMiss"
      :disabled="store.getDrillComplete()"
    >
      X
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDrillStore } from '@/stores/drill'
import { computed } from 'vue'

const store = useDrillStore()

//emits

const submitAttemptScore = (score: number) => {
  store.pushAttemptResult(score)
  store.incrementCurrentAttempt()
}

const submitLayoutScore = (score: number) => {
  store.pushLayoutResult(score)
  store.incrementCurrentLayout()
}

const handleMake = () => {
  store.updatePreviousState()
  store.incrementScore()
  store.incrementPosition()
  store.incrementShot()
}

const handleMiss = () => {
  store.updatePreviousState()
  store.decrementPosition()
  store.incrementShot()
}

const disableUndo = computed(() => {
  if (store.getShot() === 1) {
    return true
  }
  if (store.getPreviousState().shot === store.getShot()) {
    return true
  }
  return false
})
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 50%;
  margin: 2rem auto;
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
  display: flex;
  height: 2rem;
  width: 2rem;
  font-size: 15px;
  background-color: black;
  color: lime;
  border: 1px solid lime;
  margin: auto;
  justify-content: center;
}

.buttonRow {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

.buttonRow div {
  border: lime 1px solid;
  padding: 0.5rem;
  margin: 0.1rem;
  flex: 1 0 10%;
  text-align: center;
}

.mt {
  margin-top: 1rem;
}

.mb {
  margin-bottom: 1rem;
}

.lime:hover {
  cursor: pointer;
  background-color: yellow;
  color: black;
}
</style>
