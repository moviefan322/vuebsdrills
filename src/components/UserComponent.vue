<template>
  <div id="userbar">
    <div>
      <p>
        <router-link to="/" class="noStyleLink lime">
          <img :src="PoolBallSvg" alt="Pool Ball" height="40" width="40"
        /></router-link>
      </p>
    </div>
    <div>
      <p v-if="!isUserLoggedIn">
        <router-link to="/auth" class="noStyleLink lime">Login</router-link>
      </p>
      <p v-else><router-link to="/history" class="noStyleLink lime">Stats</router-link></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import PoolBallSvg from '../assets/poolBall.svg'

const store = useAuthStore()

const isUserLoggedIn = computed(() => !!store.getToken())
</script>

<style scoped>
#userbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px dotted lime;
}

#userbar p {
  padding: 0.5rem;
  text-align: end;
}
</style>
