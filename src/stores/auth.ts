// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

interface userObject {
  email: string
  name: string
  password: string
}

const createUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/user/create/'

export const useAuthStore = defineStore('auth', () => {
  const createUser = async (userObject: userObject) => {
    try {
      const response = await axios.post(createUrl, userObject)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return { createUser }
})
