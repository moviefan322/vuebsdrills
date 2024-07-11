<template>
  <button v-if="!props.link" :class="props.mode">
    <slot></slot>
  </button>
  <router-link v-else :to="props.to" :class="props.mode">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps(['mode', 'link', 'to'])
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: lime;
  border: 1px solid lime;
  color: black;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: lime;
  border-color: lime;
}

.flat {
  background-color: transparent;
  color: lime;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: lime;
  color: lime;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: rgb(158, 248, 158);
  color: black;
}
</style>
