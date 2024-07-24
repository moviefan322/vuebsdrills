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
    try {
      const response = await axios.post(tokenUrl, userObject)
      if (response.status === 200) {
        token.value = response.data.token
        localStorage.setItem('butoken', token.value as string) // Store the token as a string
        await getMe()
      }
    } catch (error: any) {
      console.error('Login error:', error)
      if (error.response) {
        authError.value = 'Login Failed: ' + error.response.data.message
      } else if (error.request) {
        authError.value = 'Network Error: No response received from the server'
      } else {
        authError.value = 'Error: ' + error.message
      }
    }
  }

  const checkForToken = () => {
    const tokenString = localStorage.getItem('butoken')
    if (tokenString) {
      token.value = tokenString
      getMe()
    }
  }

  const getMe = async () => {
    if (!token.value) return
    try {
      const response = await axios.get(meUrl, {
        headers: {
          Authorization: `Token ${token.value}`
        }
      })
      user.value = response.data
    } catch (error: any) {
      console.error('Get Me error:', error)
      if (error.response) {
        authError.value = 'Failed to fetch user data: ' + error.response.data.message
      } else if (error.request) {
        authError.value = 'Network Error: No response received from the server'
      } else {
        authError.value = 'Error: ' + error.message
      }
    }
  }

  const getUser = () => {
    return user.value
  }

  const getError = () => {
    return authError.value
  }

  const getToken = () => {
    if (!token.value) {
      const storedToken = localStorage.getItem('butoken')
      if (storedToken) {
        token.value = storedToken
      }
    }
    return token.value
  }

  return { createUser, loginUser, getUser, getError, getToken, checkForToken }
})
