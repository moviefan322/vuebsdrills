import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { ref } from 'vue'
import axios from 'axios'
import type { SubmitScorePayload } from '../types/types'

const drillScoreUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/drillscore/'

export const useScoreStore = defineStore('score', () => {
  const authStore = useAuthStore()
  const setScore = ref<SubmitScorePayload[]>([])
  const token = authStore.getToken()

  const pushScore = (score: SubmitScorePayload) => {
    setScore.value.push(score)
  }

  const submitScore = async (score: SubmitScorePayload) => {
    const token = authStore.getToken()
    console.log('Token:', token) // Log the token
    console.log('Submitting Score:', score) // Log the score payload
    console.log('URL:', drillScoreUrl) // Log the URL

    try {
      const response = await axios.post(drillScoreUrl, score, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      })

      console.log('Response Status:', response.status) // Log the response status

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

  const getDummyScores = () => {
    return [
      { date: '2024-05-27T01:04:07.803Z', drillId: 1, id: 1716771847803, maxScore: 10, score: 10 },
      { date: '2024-05-27T01:04:07.803Z', drillId: 2, id: 1716771847804, maxScore: 10, score: 9 },
      { date: '2024-05-27T01:04:07.803Z', drillId: 3, id: 1716771847805, maxScore: 10, score: 8 },
      { date: '2024-05-27T01:04:07.803Z', drillId: 4, id: 1716771847806, maxScore: 10, score: 7 },
      { date: '2024-05-27T01:04:07.803Z', drillId: 5, id: 1716771847807, maxScore: 10, score: 6 },
      { date: '2024-05-27T01:04:07.803Z', drillId: 6, id: 1716771847808, maxScore: 10, score: 5 },
      { date: '2024-05-27T01:04:07.803Z', drillId: 7, id: 1716771847809, maxScore: 20, score: 14 },
      { date: '2024-05-27T01:04:07.803Z', drillId: 8, id: 1716771847810, maxScore: 20, score: 13 }
    ]
  }

  return {
    getSetScore,
    pushScore,
    getDummyScores,
    submitScore,
    getUserScores
  }
})
