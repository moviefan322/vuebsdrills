<script setup lang="ts">
import { RouterView } from 'vue-router';

const testEnv = import.meta.env.VITE_APP_TEST;

console.log(testEnv)

</script>

<template>
<h1>Butt</h1>
<h2>{{ testEnv }}</h2>
<RouterView />
</template>

<style scoped></style>
