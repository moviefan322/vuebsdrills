<template>
  <div id="main">
    <PoolTable
      :tableWidth="350"
      :ballPositionsProp="ballPositionProps"
      :pottingPocketProp="pottingPocketProp"
      :targetSpecs="targetProp"
    />
  </div>
</template>

<script setup lang="ts">
import PoolTable from '../components/PoolTable.vue'
import { useDrillStore } from '../stores/drill'
import { computed, watch } from 'vue'

const store = useDrillStore()

const ballPositionProps = computed(() => {
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
    if(store.getPosition() === 1) {
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
  return [
    { number: +store.getShot(), x: 7.5, y: 0.15 },
    // Cue ball
    { number: 0, x: 8 - store.getPosition(), y: 0.2 }
  ]
})

const pottingPocketProp = computed(() => {
  if (store.getDrillId() === 1) {
    return { x: 8, y: 4 }
  }

  if (store.getDrillId() === 2 || store.getDrillId() === 3 || store.getDrillId() === 4) {
    return { x: 8, y: 0 }
  }

  if (store.getDrillId() === 5) {
    return { x: 4, y: 4 }
  }

  return { x: 8, y: 2 }
})

const targetProp = computed(() => {
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
  return { isTarget: false, x: 4.5, y: 0.5, rotate: false, w: 2, h: 1 }
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
