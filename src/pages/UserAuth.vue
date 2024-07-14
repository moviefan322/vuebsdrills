<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <div v-if="mode === 'signup'" class="form-control">
          <label for="input">Name</label>
          <input type="name" id="name" v-model.trim="userName" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password (must be at least 6 characters long).
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import BaseButton from '../ui/BaseButton.vue'
import BaseCard from '../ui/BaseCard.vue'
import BaseDialog from '../ui/BaseDialog.vue'
import BaseSpinner from '../ui/BaseSpinner.vue'

interface LoginPayload {
  email: string
  password: string
}

const router = useRouter()
const store = useAuthStore()

const email = ref('')
const password = ref('')
const userName = ref('')
const formIsValid = ref(true)
const mode = ref('login')
const isLoading = ref(false)
const error = ref<string | null>(null)

const submitButtonCaption = computed(() => {
  if (mode.value === 'login') {
    return 'Login'
  } else {
    return 'Signup'
  }
})

const switchModeButtonCaption = computed(() => {
  if (mode.value === 'login') {
    return 'Signup instead'
  } else {
    return 'Login instead'
  }
})

const loginUser = async (actionPayload: LoginPayload) => {
  await store.loginUser(actionPayload)
  if (store.getUser()!.email === email.value) {
    const redirectUrl = '/'
    router.replace(redirectUrl)
  } else {
    error.value = 'Login Failed'
  }
}

const submitForm = async () => {
  formIsValid.value = true
  if (email.value === '' || !email.value.includes('@') || password.value.length < 6) {
    formIsValid.value = false
    return
  }

  isLoading.value = true

  const actionPayload = {
    email: email.value,
    password: password.value
  }

  try {
    if (mode.value === 'login') {
      loginUser(actionPayload)
    } else {
      const userObject = {
        email: email.value,
        password: password.value,
        name: userName.value
      }
      await store.createUser(userObject)
      loginUser(actionPayload)
    }
  } catch (err: any) {
    error.value = err.message || 'Failed to authenticate, try later.'
  }

  isLoading.value = false
}
const switchAuthMode = () => {
  if (mode.value === 'login') {
    mode.value = 'signup'
  } else {
    mode.value = 'login'
  }
}
const handleError = () => {
  error.value = null
}

console.log('getERROR', store.getError())
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
