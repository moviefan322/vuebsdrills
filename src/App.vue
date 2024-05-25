<script setup lang="ts">
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()

const add = () => {
  counter.increment()
}
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>
    <h2>{{ counter.doubleCount }}</h2>
    <button @click="add">++</button>
  </div>
</template>

<style scoped></style>
