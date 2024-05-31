<template>
  <div class="controls" v-if="!store.getDrillComplete()">
    <button
      class="noStyleButt control make"
      :class="{ disabled: store.getDrillComplete() }"
      @click="handleMake"
      :disabled="store.getDrillComplete()"
    >
      &#x2714;
    </button>
    <button
      class="muButt control undo"
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
</style>