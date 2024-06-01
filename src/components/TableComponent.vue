<template>
  <div id="main">
    <PoolTable
      :tableWidth="350"
      :ballPositionsProp="ballPositionProps"
      :pottingPocketProp="pottingPocketProp"
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
  return []
})

const pottingPocketProp = computed(() => {
  if (store.getDrillId()  === 1) {
    return { x: 8, y: 4 }
  }
  return []
})

watch(store.getShot, () => {
  console.log('shot changed')
  console.log(store.getShot())
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
