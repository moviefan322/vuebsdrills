import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Score, SubmitScorePayload } from '../types/types'

export const useScoreStore = defineStore('score', () => {
  const setScore = ref<Score[]>([])

  const pushScore = (score: SubmitScorePayload) => {
    const scoreToPush: Score = {
      id: new Date().getTime(),
      drillId: score.drillId,
      score: score.score,
      maxScore: score.maxScore,
      date: new Date().toISOString()
    }

    setScore.value.push(scoreToPush)
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
      { date: '2024-05-27T01:04:07.803Z', drillId: 8, id: 1716771847810, maxScore: 20, score: 13 },
    ]
  }

  return {
    getSetScore,
    pushScore,
    getDummyScores
  }
})
