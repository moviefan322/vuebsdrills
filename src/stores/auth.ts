import { defineStore } from 'pinia'
import { ref } from 'vue'
import { onMounted } from 'vue'
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

  // Ensure the user is fetched if there's a token present
  onMounted(() => {
    checkForToken()
  })

  const createUser = async (userObject: UserObjectCreate) => {
    try {
      const response = await axios.post(createUrl, userObject)
      if (response.status === 201) {
        user.value = response.data
        authError.value = null
      }
      if (response.status === 400) {
        authError.value = response.data.value || response.data.message
      }
      return response
    } catch (error: any) {
      handleAuthError(error, 'Registration Failed')
    }
  }

  const loginUser = async (userObject: UserObjectLogin) => {
    authError.value = null
    try {
      const response = await axios.post(tokenUrl, userObject)
      if (response.status === 200) {
        token.value = response.data.token
        localStorage.setItem('butoken', token.value as string)
        await getMe()
      }
    } catch (error: any) {
      handleAuthError(error, 'Login Failed')
    }
  }

  const checkForToken = () => {
    const tokenString = localStorage.getItem('butoken')
    if (tokenString) {
      token.value = tokenString
      getMe()
    }
  }

  const getMe = async (): Promise<UserObject | null> => {
    if (!token.value) return null
    try {
      const response = await axios.get(meUrl, {
        headers: {
          Authorization: `Token ${token.value}`
        }
      })
      user.value = response.data
      return response.data
    } catch (error: any) {
      console.error('Get Me error:', error)
      return null
    }
  }

  const getUser = async () => {
    if (!user.value) {
      await getMe()
    }
    return user.value
  }

  const getUserName = async () => {
    const res = await getMe()
    console.group('res', res)
    return res!.name
  }

  const getUserEmail = async (): Promise<string | null> => {
    if (!user.value) {
      const fetchedUser = await getMe() // Assuming getMe() returns a UserObject or null
      return fetchedUser?.email || null
    }
    return user.value.email || null
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

  const handleAuthError = (error: any, defaultMessage: string) => {
    console.error(defaultMessage, error)
    if (error.response) {
      authError.value = `${defaultMessage}: ${error.response.data.message}`
    } else if (error.request) {
      authError.value = 'Network Error: No response received from the server'
    } else {
      authError.value = `Error: ${error.message}`
    }
  }

  return {
    createUser,
    loginUser,
    getUser,
    getError,
    getToken,
    checkForToken,
    getMe,
    getUserName,
    getUserEmail
  }
})
