// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const createUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/user/create/'
const testUser = {
  email: 'poop@poop.com',
  name: 'Phil',
  password: 'poop123'
}

export const useAuthStore = defineStore('auth', () => {
  const createUser = async () => {
    axios.post(createUrl, testUser)
    try {
      const response = await axios.post(createUrl, testUser)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return { createUser }
})
