// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

interface UserObjectCreate {
  email: string
  name: string
  password: string
}

interface UserObjectLogin {
  email: string
  password: string
}

interface UserObject {
  email: string
  name: string
}

const createUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/user/create/'
const tokenUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/user/token/'
const meUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/user/me/'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserObject | null>(null)
  const authError = ref<string | null>(null)
  const token = ref<string | null>(null)

  const createUser = async (userObject: UserObjectCreate) => {
    try {
      const response = await axios.post(createUrl, userObject)
      if (response.status === 201) {
        user.value = response.data
        authError.value = null // Clear any previous error
      }
      if (response.status === 400) {
        authError.value = response.data.value || response.data.message
      }
      return response
    } catch (error: any) {
      console.log('error block')
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        authError.value = 'Registration Failed: ' + error.response.data.email
        console.log('Response error:', error.response)
        console.log('Response status:', error.response.status)
      } else if (error.request) {
        // The request was made but no response was received
        authError.value = 'Network Error: No response received from the server'
        console.log('Request error:', error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        authError.value = 'Error: ' + error.message
        console.log('Error:', error.message)
      }
    }
  }

  const loginUser = async (userObject: UserObjectLogin) => {
    authError.value = null
    const response = await axios.post(tokenUrl, userObject)
    token.value = response.data.token
    if (response.status === 200) {
      await getMe()
    }
  }

  const getMe = async () => {
    if (!token.value) return
    const response = await axios.get(meUrl, {
      headers: {
        Authorization: 'Token ' + token.value
      }
    })
    user.value = response.data
  }

  const getUser = () => {
    if (!user.value) return null
    return user.value
  }

  const getError = () => {
    return authError.value
  }

  const getToken = () => {
    return token.value
  }

  return { createUser, loginUser, getUser, getError, getToken }
})
