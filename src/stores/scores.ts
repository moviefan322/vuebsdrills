import { defineStore } from 'pinia'
import { useDrillStore } from './drill'
import { useAuthStore } from './auth'
import { ref } from 'vue'
import axios from 'axios'
import type { SubmitScorePayload, SubmitSetScorePayload } from '../types/types'

const drillScoreUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/drillscore/'
const drillSetScoreUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/drillsetscore/'

export const useScoreStore = defineStore('score', () => {
  const authStore = useAuthStore()
  const drillStore = useDrillStore()
  
  const setScore = ref<SubmitScorePayload[]>([])
  const token = authStore.getToken()

  const resetSetScore = () => {
    setScore.value = []
  }

  const pushScore = (score: SubmitScorePayload) => {
    setScore.value.push(score)
  }

  const submitSetScore = async () => {
    const submitScorePayload: SubmitSetScorePayload = {
      drill_set: drillStore.getDrillSetId(),
      scores: [...setScore.value]
    }
    console.log('submitting setScore', submitScorePayload)
    console.log(token)
    try {
      const response = await axios.post(drillSetScoreUrl, submitScorePayload, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      })
      console.log(response.data)
      if (response.status !== 201) {
        throw new Error('Failed to submit scores')
      }

    } catch (error) {
      console.error('Error submitting score:', error)
      throw new Error('Failed to submit scores')
    }
  }

  const submitScore = async (score: SubmitScorePayload) => {
    console.log('submitting score', score)
    try {
      const response = await axios.post(drillScoreUrl, score, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.status !== 201) {
        throw new Error('Failed to submit scores')
      }

      setScore.value = []
    } catch (error) {
      console.error('Error submitting score:', error)
      throw new Error('Failed to submit scores')
    }
  }

  const getUserScores = async () => {
    try {
      const response = await axios.get(drillScoreUrl, {
        headers: {
          Authorization: `Token ${authStore.getToken()}`
        }
      })

      console.log(response)

      if (response.status !== 200) {
        throw new Error('Failed to fetch scores')
      }

      return response.data // Ensure this returns the correct data
    } catch (error) {
      console.error('Error fetching scores:', error)
      throw error
    }
  }

  const getSetScore = () => {
    return setScore.value
  }

  return {
    getSetScore,
    pushScore,
    submitScore,
    getUserScores,
    submitSetScore,
    resetSetScore
  }
})
