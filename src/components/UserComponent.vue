<template>
  <div id="userbar">
    <p v-if="!isUserLoggedIn">
      <router-link to="/auth" class="noStyleLink lime">Login</router-link>
    </p>
    <p v-else>Stats</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const store = useAuthStore()

const isUserLoggedIn = computed(() => !!store.getUser()?.name)
</script>

<style scoped>
#userbar {
  display: inline;
  width: 100%;
  border-bottom: 1px dotted lime;
}

#userbar p {
  padding: 0.5rem;
  text-align: end;
}
</style>
