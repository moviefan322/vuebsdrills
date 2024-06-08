<template>
  <div id="main">
    <PoolTable
      :tableWidth="350"
      :ballPositionsProp="ballPositionProps"
      :pottingPocketProp="pottingPocketProp"
      :targetSpecs="targetProp"
      :leaveLineProp="leaveLineProp"
      :showShotLine="showShotLine"
      :kickShotLineProp="kickShotLineProp"
      :bankShotLineProp="bankShotLineProp"
      v-if="useProps"
    />
    <PoolTable :tableWidth="350" v-else />
  </div>
</template>

<script setup lang="ts">
import PoolTable from '../components/PoolTable.vue'
import { useDrillStore } from '../stores/drill'
import { computed, ref, onBeforeMount } from 'vue'

const store = useDrillStore()
const useProps = ref(false)

onBeforeMount(() => {
  if (store.isCurrentDrill()) {
    useProps.value = true
  }
})

const showShotLine = computed(() => {
  const dontShow = [23, 24, 25, 26, 27, 28]
  if (dontShow.includes(store.getDrillId())) {
    return false
  }

  return true
})

const ballPositionProps = computed(() => {
  if (!store.isCurrentDrill) {
    return null
  }
  if (store.getDrillId() === 1) {
    return [
      { number: +store.getShot(), x: 7.7, y: 3 },
      // Cue ball
      { number: 0, x: 8 - store.getPosition(), y: 1 }
    ]
  }
  if (store.getDrillId() === 2) {
    return [
      { number: +store.getShot(), x: 7.5, y: 0.15 },
      // Cue ball
      { number: 0, x: 8 - store.getPosition(), y: 0.2 }
    ]
  }
  if (store.getDrillId() === 3) {
    if (store.getPosition() === 1) {
      return [
        { number: +store.getShot(), x: 7.7, y: 0.15 },
        // Cue ball
        { number: 0, x: 8 - store.getPosition(), y: 0.25 }
      ]
    }
    return [
      { number: +store.getShot(), x: 9 - store.getPosition(), y: 0.2 },
      // Cue ball
      { number: 0, x: 8 - store.getPosition(), y: 0.25 }
    ]
  }
  if (store.getDrillId() === 4) {
    return [
      { number: +store.getShot(), x: 7.5, y: 0.15 },
      // Cue ball
      { number: 0, x: 8 - store.getPosition(), y: 0.2 }
    ]
  }
  if (store.getDrillId() === 5) {
    return [
      { number: +store.getShot(), x: 4, y: 2 },
      // Cue ball
      { number: 0, x: 3.7, y: 1.5 }
    ]
  }
  if (store.getDrillId() === 6) {
    if (store.getShot() === 1 || store.getShot() === 2) {
      return [
        { number: +store.getShot(), x: 3, y: 1 },
        // Cue ball
        { number: 0, x: 2, y: 1 }
      ]
    }
    if (store.getShot() === 3 || store.getShot() === 4) {
      return [
        { number: +store.getShot(), x: 4, y: 2 },
        // Cue ball
        { number: 0, x: 2, y: 1 }
      ]
    }
    if (store.getShot() === 5) {
      return [
        { number: +store.getShot(), x: 6, y: 2 },
        // Cue ball
        { number: 0, x: 2, y: 1 }
      ]
    }
    if (store.getShot() === 6 || store.getShot() === 7) {
      return [
        { number: +store.getShot(), x: 3, y: 3 },
        // Cue ball
        { number: 0, x: 2, y: 3 }
      ]
    }
    if (store.getShot() === 8 || store.getShot() === 9) {
      return [
        { number: +store.getShot(), x: 4, y: 2 },
        // Cue ball
        { number: 0, x: 2, y: 3 }
      ]
    }
    if (store.getShot() === 10) {
      return [
        { number: +store.getShot(), x: 6, y: 2 },
        // Cue ball
        { number: 0, x: 2, y: 3 }
      ]
    }
    return [
      { number: +store.getShot(), x: 4, y: 2 },
      // Cue ball
      { number: 0, x: 3.7, y: 1.5 }
    ]
  }
  if (store.getDrillId() === 7) {
    if (store.getShot() === 1 || store.getShot() === 2) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 1, x: 4.95, y: 0.2 },
        { number: 2, x: 5.95, y: 0.2 },
        { number: 3, x: 6.95, y: 0.2 },
        { number: 4, x: 7.8, y: 0.2 },
        { number: 5, x: 7.8, y: 0.95 },
        { number: 6, x: 7.8, y: 1.95 },
        { number: 7, x: 7.8, y: 2.95 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 3 || store.getShot() === 4) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 2, x: 5.95, y: 0.2 },
        { number: 3, x: 6.95, y: 0.2 },
        { number: 4, x: 7.8, y: 0.2 },
        { number: 5, x: 7.8, y: 0.95 },
        { number: 6, x: 7.8, y: 1.95 },
        { number: 7, x: 7.8, y: 2.95 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 5 || store.getShot() === 6) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 3, x: 6.95, y: 0.2 },
        { number: 4, x: 7.8, y: 0.2 },
        { number: 5, x: 7.8, y: 0.95 },
        { number: 6, x: 7.8, y: 1.95 },
        { number: 7, x: 7.8, y: 2.95 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 7 || store.getShot() === 8) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 4, x: 7.8, y: 0.2 },
        { number: 5, x: 7.8, y: 0.95 },
        { number: 6, x: 7.8, y: 1.95 },
        { number: 7, x: 7.8, y: 2.95 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 9 || store.getShot() === 10) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 5, x: 7.8, y: 0.95 },
        { number: 6, x: 7.8, y: 1.95 },
        { number: 7, x: 7.8, y: 2.95 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 11 || store.getShot() === 12) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 6, x: 7.8, y: 1.95 },
        { number: 7, x: 7.8, y: 2.95 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 13 || store.getShot() === 14) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 7, x: 7.8, y: 2.95 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 15 || store.getShot() === 16) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 8, x: 7.8, y: 3.8 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 17 || store.getShot() === 18) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 9, x: 6.95, y: 3.8 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    if (store.getShot() === 19 || store.getShot() === 20) {
      return [
        { number: 0, x: 3.6, y: 2 },
        { number: 15, x: 4, y: 1 },
        { number: 10, x: 5.95, y: 3.8 }
      ]
    }
    return null
  }
  if (store.getDrillId() === 8) {
    const ballNumber = () => {
      if (store.getShot() > 15) {
        return store.getShot() - 15
      }
      return store.getShot()
    }
    return [
      { number: ballNumber(), x: 7, y: 1 },
      // Cue ball
      { number: 0, x: 6.5, y: 2 }
    ]
  }
  if (store.getDrillId() === 11 || store.getDrillId() === 12 || store.getDrillId() === 13) {
    const beginnerBalls = [
      { number: 1, x: 7.65, y: 1.95 },
      { number: 2, x: 7.25, y: 1.95 },
      { number: 3, x: 6.85, y: 1.95 },
      { number: 4, x: 6.45, y: 1.95 }
    ]
    const intermediateBalls = [
      { number: 5, x: 6.05, y: 1.95 },
      { number: 6, x: 5.65, y: 1.95 },
      { number: 7, x: 5.25, y: 1.95 }
    ]

    const advancedBalls = [
      { number: 8, x: 4.85, y: 1.95 },
      { number: 9, x: 4.45, y: 1.95 },
      { number: 10, x: 4.05, y: 1.95 }
    ]
    if (store.getDrillId() === 11) {
      return beginnerBalls
    }
    if (store.getDrillId() === 12) {
      return [...beginnerBalls, ...intermediateBalls]
    }
    if (store.getDrillId() === 13) {
      return [...beginnerBalls, ...intermediateBalls, ...advancedBalls]
    }
  }

  if (store.getDrillId() === 14 || store.getDrillId() === 15 || store.getDrillId() === 16) {
    const beginnerBalls = [
      { number: 1, x: 1.95, y: 0.15 },
      { number: 2, x: 5.95, y: 0.15 },
      { number: 3, x: 7.83, y: 1.95 },
      { number: 4, x: 5.95, y: 3.85 },
      { number: 5, x: 1.95, y: 3.85 },
      { number: 6, x: 0.15, y: 1.95 },
      { number: 7, x: 4.03, y: 1.95 }
    ]
    const intermediateBalls = [
      { number: 1, x: 1.95, y: 0.15 },
      { number: 2, x: 5.95, y: 0.15 },
      { number: 3, x: 7.83, y: 0.95 },
      { number: 4, x: 7.83, y: 1.95 },
      { number: 5, x: 7.83, y: 2.95 },
      { number: 6, x: 5.95, y: 3.85 },
      { number: 7, x: 1.95, y: 3.85 },
      { number: 8, x: 0.15, y: 2.95 },
      { number: 9, x: 0.15, y: 1.95 },
      { number: 10, x: 0.15, y: 0.95 },
      { number: 11, x: 4.03, y: 1.95 }
    ]

    const advancedBalls = [
      { number: 1, x: 0.95, y: 0.15 },
      { number: 2, x: 1.95, y: 0.15 },
      { number: 3, x: 5.95, y: 0.15 },
      { number: 4, x: 6.95, y: 0.15 },
      { number: 5, x: 7.83, y: 0.95 },
      { number: 6, x: 7.83, y: 1.95 },
      { number: 7, x: 7.83, y: 2.95 },
      { number: 8, x: 6.95, y: 3.85 },
      { number: 9, x: 5.95, y: 3.85 },
      { number: 10, x: 1.95, y: 3.85 },
      { number: 11, x: 0.95, y: 3.85 },
      { number: 12, x: 0.15, y: 2.95 },
      { number: 13, x: 0.15, y: 1.95 },
      { number: 14, x: 0.15, y: 0.95 },
      { number: 15, x: 4.03, y: 1.95 }
    ]
    if (store.getDrillId() === 14) {
      return beginnerBalls
    }
    if (store.getDrillId() === 15) {
      return intermediateBalls
    }
    if (store.getDrillId() === 16) {
      return advancedBalls
    }
  }

  if (store.getDrillId() === 17) {
    if (store.getCurrentLayout() === 0) {
      return [
        { number: 5, x: 1, y: 1 },
        { number: 6, x: 3, y: 3 },
        { number: 7, x: 1, y: 3 },
        { number: 8, x: 3, y: 1 },
        { number: 9, x: 5, y: 1 }
      ]
    }
    if (store.getCurrentLayout() === 1) {
      return [
        { number: 5, x: 0.25, y: 0.95 },
        { number: 6, x: 0.25, y: 2.95 },
        { number: 7, x: 7.75, y: 2.95 },
        { number: 8, x: 2.95, y: 3.75 },
        { number: 9, x: 7.75, y: 0.95 }
      ]
    }
    if (store.getCurrentLayout() === 2) {
      return [
        { number: 5, x: 5.8, y: 2.55 },
        { number: 6, x: 7.5, y: 0.5 },
        { number: 7, x: 6.15, y: 1.95 },
        { number: 8, x: 5.95, y: 1.95 },
        { number: 9, x: 0.95, y: 0.25 }
      ]
    }
  }
  if (store.getDrillId() === 18) {
    if (store.getCurrentLayout() === 0) {
      return [
        { number: 4, x: 6.95, y: 2.95 },
        { number: 5, x: 5.95, y: 1.95 },
        { number: 6, x: 3, y: 1 },
        { number: 7, x: 2, y: 2 },
        { number: 8, x: 1, y: 1 },
        { number: 9, x: 4.95, y: 0.25 }
      ]
    }
    if (store.getCurrentLayout() === 1) {
      return [
        { number: 4, x: 6.95, y: 1.95 },
        { number: 5, x: 6.95, y: 3.75 },
        { number: 6, x: 6.95, y: 0.25 },
        { number: 7, x: 4.95, y: 3.75 },
        { number: 8, x: 4.95, y: 0.25 },
        { number: 9, x: 0.25, y: 1.95 }
      ]
    }
    if (store.getCurrentLayout() === 2) {
      return [
        { number: 4, x: 4.95, y: 0.95 },
        { number: 5, x: 3.95, y: 2.95 },
        { number: 6, x: 0.95, y: 0.95 },
        { number: 7, x: 3.6, y: 3.85 },
        { number: 8, x: 3.8, y: 3.85 },
        { number: 9, x: 7.75, y: 0.95 }
      ]
    }
  }
  if (store.getDrillId() === 19) {
    if (store.getCurrentLayout() === 0) {
      return [
        { number: 3, x: 1, y: 2.95 },
        { number: 4, x: 1, y: 0.95 },
        { number: 5, x: 3.95, y: 1.95 },
        { number: 6, x: 1.95, y: 3.75 },
        { number: 7, x: 2.95, y: 1.95 },
        { number: 8, x: 4.95, y: 0.25 },
        { number: 9, x: 7.75, y: 1.95 }
      ]
    }
    if (store.getCurrentLayout() === 1) {
      return [
        { number: 3, x: 3.95, y: 0.95 },
        { number: 4, x: 3.95, y: 2.95 },
        { number: 5, x: 0.15, y: 2.95 },
        { number: 6, x: 0.95, y: 3.85 },
        { number: 7, x: 5.95, y: 3.85 },
        { number: 8, x: 2.95, y: 0.15 },
        { number: 9, x: 0.15, y: 1.95 }
      ]
    }
    if (store.getCurrentLayout() === 2) {
      return [
        { number: 3, x: 4.95, y: 0.95 },
        { number: 4, x: 4.95, y: 2.95 },
        { number: 5, x: 3.95, y: 0.95 },
        { number: 6, x: 6.95, y: 0.95 },
        { number: 7, x: 0.15, y: 2.95 },
        { number: 8, x: 6.95, y: 2.95 },
        { number: 9, x: 0.15, y: 0.95 }
      ]
    }
  }
  if (store.getDrillId() === 20) {
    if (store.getCurrentLayout() === 0) {
      return [
        { number: 17, x: 1, y: 2.95 },
        { number: 17, x: 4, y: 2.95 },
        { number: 17, x: 7, y: 2.95 },
        { number: 17, x: 1, y: 0.95 },
        { number: 17, x: 1, y: 2.95 },
        { number: 8, x: 7, y: 0.95 }
      ]
    }
    if (store.getCurrentLayout() === 1) {
      return [
        { number: 17, x: 7, y: 1.95 },
        { number: 17, x: 5.95, y: 3.75 },
        { number: 17, x: 7, y: 2.95 },
        { number: 17, x: 4, y: 2.95 },
        { number: 8, x: 7.85, y: 2.95 },
        { number: 16, x: 6, y: 1.95 },
        { number: 16, x: 5, y: 2.95 }
      ]
    }
    if (store.getCurrentLayout() === 2) {
      return [
        { number: 17, x: 6.95, y: 0.25 },
        { number: 17, x: 6.95, y: 3.75 },
        { number: 17, x: 0.15, y: 0.95 },
        { number: 17, x: 0.15, y: 2.95 },
        { number: 8, x: 0.95, y: 3.75 },
        { number: 16, x: 6, y: 1.95 },
        { number: 16, x: 6.2, y: 1.95 },
        { number: 16, x: 2, y: 1.95 },
        { number: 16, x: 2.2, y: 1.95 },
        { number: 16, x: 1.8, y: 1.85 }
      ]
    }
  }
  if (store.getDrillId() === 21) {
    if (store.getCurrentLayout() === 0) {
      return [
        { number: 17, x: 0.15, y: 0.95 },
        { number: 17, x: 4, y: 1.95 },
        { number: 17, x: 7, y: 2.95 },
        { number: 17, x: 1, y: 1.95 },
        { number: 17, x: 1, y: 3.75 },
        { number: 8, x: 7, y: 0.95 }
      ]
    }
    if (store.getCurrentLayout() === 1) {
      return [
        { number: 17, x: 4, y: 1.95 },
        { number: 17, x: 4, y: 0.95 },
        { number: 17, x: 7, y: 1.95 },
        { number: 17, x: 4, y: 2.95 },
        { number: 17, x: 7, y: 0.95 },
        { number: 8, x: 0.25, y: 2.95 },
        { number: 16, x: 1.95, y: 0.25 },
        { number: 16, x: 0.95, y: 1 }
      ]
    }
    if (store.getCurrentLayout() === 2) {
      return [
        { number: 17, x: 1.95, y: 0.15 },
        { number: 17, x: 6.95, y: 1 },
        { number: 17, x: 6.95, y: 3.85 },
        { number: 17, x: 5.95, y: 1.95 },
        { number: 17, x: 0.15, y: 2.95 },
        { number: 8, x: 0.3, y: 3.85 },
        { number: 16, x: 1, y: 1.95 },
        { number: 16, x: 2, y: 1.95 },
        { number: 16, x: 2.95, y: 3.65 },
        { number: 16, x: 2.95, y: 3.45 }
      ]
    }
  }
  if (store.getDrillId() === 22) {
    if (store.getCurrentLayout() === 0) {
      return [
        { number: 17, x: 4.25, y: 0.3 },
        { number: 17, x: 4, y: 2.95 },
        { number: 17, x: 6, y: 2.95 },
        { number: 17, x: 0.15, y: 0.95 },
        { number: 17, x: 2, y: 2.95 },
        { number: 17, x: 4.95, y: 3.7 },
        { number: 8, x: 7, y: 0.95 }
      ]
    }
    if (store.getCurrentLayout() === 1) {
      return [
        { number: 17, x: 6, y: 1.95 },
        { number: 17, x: 1.95, y: 0.15 },
        { number: 17, x: 7, y: 3.85 },
        { number: 17, x: 0.15, y: 2.95 },
        { number: 17, x: 7, y: 0.95 },
        { number: 8, x: 0.3, y: 3.85 },
        { number: 16, x: 1, y: 1.95 },
        { number: 16, x: 2, y: 1.95 },
        { number: 16, x: 2.95, y: 3.65 },
        { number: 16, x: 2.95, y: 3.45 }
      ]
    }
    if (store.getCurrentLayout() === 2) {
      return [
        { number: 17, x: 1.95, y: 2.95 },
        { number: 17, x: 7.85, y: 1 },
        { number: 17, x: 7.85, y: 2.95 },
        { number: 17, x: 5.95, y: 2.95 },
        { number: 17, x: 0.15, y: 2.95 },
        { number: 17, x: 3.95, y: 2.95 },
        { number: 8, x: 0.3, y: 3.85 },
        { number: 16, x: 1, y: 1.95 },
        { number: 16, x: 2, y: 1.95 },
        { number: 16, x: 2.95, y: 3.65 },
        { number: 16, x: 2.95, y: 3.45 },
        { number: 16, x: 6.95, y: 1.95 }
      ]
    }
  }
  if (store.getDrillId() === 23 || store.getDrillId() === 24 || store.getDrillId() === 25) {
    let cueBallPositions
    if (store.getDrillId() === 23) {
      cueBallPositions = [
        { number: 0, x: 0.95, y: 1.95 },
        { number: 0, x: 0.95, y: 1.95 },
        { number: 0, x: 0.95, y: 3.45 },
        { number: 0, x: 0.95, y: 3.45 },
        { number: 0, x: 1.95, y: 3.45 },
        { number: 0, x: 1.95, y: 3.45 }
      ]
    }
    if (store.getDrillId() === 24) {
      cueBallPositions = [
        { number: 0, x: 1.95, y: 1.95 },
        { number: 0, x: 1.95, y: 1.95 },
        { number: 0, x: 0.95, y: 1.95 },
        { number: 0, x: 0.95, y: 1.95 },
        { number: 0, x: 0.95, y: 2.95 },
        { number: 0, x: 0.95, y: 2.95 },
        { number: 0, x: 0.95, y: 3.45 },
        { number: 0, x: 0.95, y: 3.45 },
        { number: 0, x: 1.95, y: 3.45 },
        { number: 0, x: 1.95, y: 3.45 }
      ]
    }
    if (store.getDrillId() === 25) {
      cueBallPositions = [
        { number: 0, x: 1.95, y: 1.95 },
        { number: 0, x: 1.95, y: 1.95 },
        { number: 0, x: 0.95, y: 1.95 },
        { number: 0, x: 0.95, y: 1.95 },
        { number: 0, x: 0.95, y: 2.45 },
        { number: 0, x: 0.95, y: 2.45 },
        { number: 0, x: 0.95, y: 2.95 },
        { number: 0, x: 0.95, y: 2.95 },
        { number: 0, x: 0.95, y: 3.45 },
        { number: 0, x: 0.95, y: 3.45 },
        { number: 0, x: 1.95, y: 3.45 },
        { number: 0, x: 1.95, y: 3.45 },
        { number: 0, x: 2.45, y: 3.45 },
        { number: 0, x: 2.45, y: 3.45 }
      ]
    }
    const rack = [
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ]
    return [...rack, cueBallPositions![store.getShot() - 1]]
  }
  if (store.getDrillId() === 26 || store.getDrillId() === 27 || store.getDrillId() === 28) {
    const objBall = [
      { number: 1, x: 1.95, y: 1.95 },
      { number: 2, x: 2.95, y: 1.95 },
      { number: 3, x: 3.95, y: 1.95 },
      { number: 4, x: 5.75, y: 1.95 },
      { number: 5, x: 1.95, y: 1.95 },
      { number: 6, x: 3.95, y: 1.95 },
      { number: 7, x: 2.95, y: 1.95 }
    ]
    return [{ number: 0, x: 0.95, y: 0.95 }, objBall[store.getShot() - 1]]
  }

  if (store.getDrillId() === 29) {
    const objBall = [
      { number: 1, x: 2.95, y: 1.95 },
      { number: 2, x: 2.55, y: 1.95 },
      { number: 3, x: 2.15, y: 1.95 }
    ]
    return [objBall[store.getShot() - 1]]
  }

  if (store.getDrillId() === 30) {
    const cueBallPos = [
      { number: 0, x: 2.55, y: 1.95 },
      { number: 0, x: 2.75, y: 1.95 },
      { number: 0, x: 2.95, y: 1.95 },
      { number: 0, x: 3.15, y: 1.95 },
      { number: 0, x: 3.35, y: 1.95 }
    ]
    return [{ number: store.getShot(), x: 2.95, y: 2.95 }, cueBallPos[store.getShot() - 1]]
  }

  if (store.getDrillId() === 31) {
    const cueBallPos = [
      { number: 0, x: 5.95, y: 1.95 },
      { number: 0, x: 5.45, y: 1.95 },
      { number: 0, x: 4.95, y: 1.95 },
      { number: 0, x: 4.45, y: 1.95 },
      { number: 0, x: 3.95, y: 1.95 },
      { number: 0, x: 3.45, y: 1.95 },
      { number: 0, x: 2.95, y: 1.95 }
    ]
    return [{ number: store.getShot(), x: 5.95, y: 2.95 }, cueBallPos[store.getShot() - 1]]
  }
  if (store.getDrillId() === 32) {
    let obstacleBall = { number: 17, x: 20, y: 0.15 }
    if(store.getShot() === 3) {
      obstacleBall = { number: 17, x: 4.95, y: 0.15 }
    }
    const cueBallPos = [
      { number: 0, x: 6.95, y: 0.15 },
      { number: 0, x: 5.95, y: .15 },
      { number: 0, x: 5.05, y: .35 }
    ]
    const objBall = [
      { number: 1, x: 7.45, y: 1.95 },
      { number: 2, x: 6.9, y: 1.95 },
      { number: 3, x: 6.45, y: 2.15 }
    ]
    return [objBall[store.getShot() - 1], cueBallPos[store.getShot() - 1], obstacleBall]
  }

  return [
    { number: +store.getShot(), x: 7.5, y: 0.15 }
    // Cue ball
    // { number: 0, x: 8 - store.getPosition(), y: 0.2 }
  ]
})

const pottingPocketProp = computed(() => {
  if (!store.isCurrentDrill) {
    return null
  }
  if (store.getDrillId() === 1) {
    return { x: 8, y: 4, show: true }
  }

  if (store.getDrillId() === 2 || store.getDrillId() === 3 || store.getDrillId() === 4) {
    return { x: 8, y: 0, show: true }
  }

  if (store.getDrillId() === 5) {
    return { x: 4, y: 4, show: true }
  }

  if (store.getDrillId() === 6) {
    if (store.getShot() === 1 || store.getShot() === 9) {
      return { x: 4, y: 0, show: true }
    }
    if (store.getShot() === 2 || store.getShot() === 10) {
      return { x: 8, y: 0, show: true }
    }
    if (store.getShot() === 3) {
      return { x: 8, y: 4, show: true }
    }
    if (store.getShot() === 6 || store.getShot() === 4) {
      return { x: 4, y: 4, show: true }
    }
    if (store.getShot() === 7 || store.getShot() === 5) {
      return { x: 8, y: 4, show: true }
    }
    if (store.getShot() === 8) {
      return { x: 8, y: 0, show: true }
    }

    return { x: 4, y: 4, show: true }
  }

  if (store.getDrillId() === 7) {
    return { x: 4, y: 0, show: true }
  }

  if (store.getDrillId() === 8) {
    return { x: 8, y: 0, show: true }
  }

  if (store.getDrillId() === 32 || store.getDrillId() === 33 || store.getDrillId() === 34) {
    return { x: 8, y: 4, show: true }
  }

  return { show: false, x: 0, y: 0 }
})

const targetProp = computed(() => {
  if (!store.isCurrentDrill) {
    return null
  }
  if (store.getDrillId() === 3) {
    return { isTarget: true, x: 7.65, y: 0.5, rotate: false, w: 0.65, h: 0.8 }
  }
  if (store.getDrillId() === 4) {
    return { isTarget: true, x: 4.5, y: 0.5, rotate: false, w: 2, h: 1 }
  }
  if (store.getDrillId() === 5) {
    if (store.getPosition() === 4) {
      return { isTarget: true, x: 7.6, y: 1.95, rotate: false, w: 0.65, h: 0.8 }
    }
    if (store.getPosition() === 3 || store.getPosition() === 5) {
      return { isTarget: true, x: 6.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 }
    }
    if (store.getPosition() === 2 || store.getPosition() === 6) {
      return { isTarget: true, x: 5.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 }
    }
    if (store.getPosition() === 1 || store.getPosition() === 7) {
      return { isTarget: true, x: 4.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 }
    }
    return { isTarget: false, x: 5.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 }
  }
  if (store.getDrillId() === 8) {
    if (store.getShot() < 5) {
      return { isTarget: true, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }
    }
    if (store.getShot() > 4 && store.getShot() < 9) {
      return { isTarget: true, x: 1.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }
    }
    if (store.getShot() > 8 && store.getShot() < 13) {
      return { isTarget: true, x: 3.9, y: 2, rotate: false, w: 0.9, h: 0.65 }
    }
    if (store.getShot() > 12 && store.getShot() < 17) {
      return { isTarget: true, x: 1.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 }
    }
    if (store.getShot() > 16) {
      return { isTarget: true, x: 5.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 }
    }
  }
  if (store.getDrillId() === 23 || store.getDrillId() === 24 || store.getDrillId() === 25) {
    return { isTarget: true, x: 5.8, y: 1, rotate: false, w: 1.1, h: 0.7 }
  }

  return { isTarget: false, x: 4.5, y: 0.5, rotate: false, w: 2, h: 1 }
})

const leaveLineProp = computed(() => {
  if (!store.isCurrentDrill) {
    return null
  }
  if (store.getDrillId() === 7) {
    if (store.getShot() === 1 || store.getShot() === 2) {
      return { draw: true, x: 4.8, y: 0.35 }
    }
    if (store.getShot() === 3 || store.getShot() === 4) {
      return { draw: true, x: 5.8, y: 0.35 }
    }
    if (store.getShot() === 5 || store.getShot() === 6) {
      return { draw: true, x: 6.7, y: 0.35 }
    }
    if (store.getShot() === 7 || store.getShot() === 8) {
      return { draw: true, x: 7.5, y: 0.25 }
    }
    if (store.getShot() === 9 || store.getShot() === 10) {
      return { draw: true, x: 7.5, y: 0.96 }
    }
    if (store.getShot() === 11 || store.getShot() === 12) {
      return { draw: true, x: 7.5, y: 1.9 }
    }
    if (store.getShot() === 13 || store.getShot() === 14) {
      return { draw: true, x: 7.5, y: 2.8 }
    }
    if (store.getShot() === 15 || store.getShot() === 16) {
      return { draw: true, x: 7.6, y: 3.65 }
    }
    if (store.getShot() === 17 || store.getShot() === 18) {
      return { draw: true, x: 6.75, y: 3.6 }
    }
    if (store.getShot() === 19 || store.getShot() === 20) {
      return { draw: true, x: 5.8, y: 3.6 }
    }
  }
  return { draw: false, x: 0, y: 0 }
})

const kickShotLineProp = computed(() => {
  if (store.getDrillId() === 26 || store.getDrillId() === 27 || store.getDrillId() === 28) {
    let rails = 1
    if (store.getShot() > 6) {
      rails = 3
    } else if (store.getShot() > 4) {
      rails = 2
    }
    return { draw: true, rails: rails, objectBall: store.getShot() }
  }
  return { draw: false, rails: null, objectBall: null }
})

const bankShotLineProp = computed(() => {
  if (store.getDrillId() === 29 || store.getDrillId() === 30) {
    return { draw: true, objectBall: store.getShot(), pocket: { x: 4, y: 0 } }
  }
  if (store.getDrillId() === 31) {
    return { draw: true, objectBall: store.getShot(), pocket: { x: 8, y: 0 } }
  }
  return { draw: false, objectBall: null, pocket: null }
})
</script>

<style scoped>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
