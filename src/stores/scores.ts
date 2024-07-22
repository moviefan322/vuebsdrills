import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { ref } from 'vue'
import type { SubmitScorePayload } from '../types/types'

const drillScoreUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/drillscore/'

export const useScoreStore = defineStore('score', () => {
  const authStore = useAuthStore()
  const setScore = ref<SubmitScorePayload[]>([])

  const pushScore = (score: SubmitScorePayload) => {
    setScore.value.push(score)
  }

  const submitScore = async (score: SubmitScorePayload) => {
    const response = await fetch(drillScoreUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${authStore.getToken()}`
      },
      body: JSON.stringify(score)
    })

    if (!response.ok) {
      throw new Error('Failed to submit scores')
    }

    setScore.value = []
  }

  const getUserScores = async () => {
    const response = await fetch(drillScoreUrl)

    if (!response.ok) {
      throw new Error('Failed to fetch scores')
    }

    return response.json()
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
