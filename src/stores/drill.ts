import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useScoreStore } from './scores'
import { useRouter } from 'vue-router'
import type { Drill, DrillSet } from '../types/types'
import drills from '../data/bufDrills'
import drillSets from '../data/drillSets'

export const useDrillStore = defineStore('drill', () => {
  const drillSet = ref<DrillSet | null>(null)
  const drill = ref<Drill | null>(null)
  const currentDrillIndex = ref(0)
  const isSet = computed(() => !!drillSet.value)
  const shot = ref(1)
  const position = ref(4)
  const bonus = ref(0)
  const pots = ref(0)
  const drillComplete = ref(false)
  const currentAttempt = ref(0)
  const currentLayout = ref(0)
  const attemptResults = ref<number[]>([])
  const layoutResults = ref<number[]>([])
  const router = useRouter()
  const previousState = ref({
    shot: 1,
    position: 4,
    bonus: 0,
    pots: 0
  })

  const scoreStore = useScoreStore()

  const currentDrill = computed<Drill | null>(() => {
    if (drillSet.value) {
      return drillSet.value.drills[currentDrillIndex.value]
    } else {
      return drill.value
    }
  })

  const fetchDrillSet = async (id: number) => {
    const data = await new Promise<DrillSet | undefined>((resolve) => {
      setTimeout(() => {
        resolve(drillSets.find((set: DrillSet) => set.id === id))
      }, 200)
    })

    if (data) {
      drillSet.value = data
      currentDrillIndex.value = 0
      drill.value = null
    } else {
      console.error('Drill set not found')
    }
  }

  const fetchDrill = async (id: number) => {
    const data = await new Promise<Drill | undefined>((resolve) => {
      setTimeout(() => {
        resolve(drills.find((d) => d.id === id))
      }, 200)
    })

    if (data) {
      drill.value = data
      drillSet.value = null
    } else {
      router.push('/notfound')
    }
  }

  const nextDrill = () => {
    if (drillSet.value && currentDrillIndex.value < drillSet.value.drills.length - 1) {
      currentDrillIndex.value++
    }
  }

  const previousDrill = () => {
    if (drillSet.value && currentDrillIndex.value > 0) {
      currentDrillIndex.value--
    }
  }

  const isFirstDrill = computed(() => currentDrillIndex.value === 0)
  const isLastDrill = computed(() => {
    if (drillSet.value) {
      return currentDrillIndex.value === drillSet.value.drills.length - 1
    }
    return false
  })

  const getDrillName = (id: number) => {
    const drill = drills.find((d) => d.id === id)
    return drill ? drill.name : ''
  }

  const resetValues = () => {
    shot.value = 1
    position.value = 4
    bonus.value = 0
    drillComplete.value = false
    pots.value = 0
    previousState.value = {
      shot: 1,
      position: 4,
      bonus: 0,
      pots: 0
    }
  }

  const incrementShot = () => {
    if (shot.value === currentDrill.value!.maxScore) {
      drillComplete.value = true
      return
    }
    shot.value++
  }

  const incrementScore = () => {
    pots.value++
    if (position.value === 7) {
      bonus.value++
      return
    }
  }

  const incrementPosition = () => {
    if (position.value === 7) {
      return
    }
    position.value++
  }

  const decrementPosition = () => {
    if (position.value === 1) {
      return
    }
    position.value--
  }

  const updatePreviousState = () => {
    previousState.value = {
      shot: shot.value,
      position: position.value,
      bonus: bonus.value,
      pots: pots.value
    }
  }

  const undo = () => {
    shot.value = previousState.value.shot
    position.value = previousState.value.position
    bonus.value = previousState.value.bonus
    pots.value = previousState.value.pots
  }

  const submitScore = () => {
    const submission = {
      score: getScore(),
      drillId: currentDrill.value!.id,
      maxScore: currentDrill.value!.maxScore
    }
    scoreStore.pushScore(submission)
  }

  const score = computed(() => {
    if (currentDrill.value?.type === 'progressive') {
      return position.value + bonus.value
    } else {
      return pots.value
    }
  })

  const getShot = () => {
    return shot.value
  }

  const getPosition = () => {
    return position.value
  }

  const getBonus = () => {
    return bonus.value
  }

  const getPots = () => {
    return pots.value
  }

  const getPreviousState = () => {
    return previousState.value
  }

  const getIsSet = () => {
    return isSet.value
  }

  const getScore = () => {
    return score.value
  }

  const setBonus = (value: number) => {
    bonus.value = value
  }

  const setPosition = (value: number) => {
    position.value = value
  }

  const getDrillComplete = () => {
    return drillComplete.value
  }

  const getDrillId = () => {
    return currentDrill.value!.id
  }

  const isCurrentDrill = () => {
    return currentDrill.value !== null
  }

  const getMaxScore = () => {
    return currentDrill.value!.maxScore
  }

  const isAttempts = () => {
    return currentDrill.value!.attempts
  }

  const getCurrentAttempt = () => {
    return currentAttempt.value
  }

  const getAttemptResults = () => {
    return attemptResults.value
  }
  const isLayout = () => {
    return currentDrill.value!.type === 'layout'
  }

  const getCurrentLayout = () => {
    return currentLayout.value
  }

  const getLayoutResults = () => {
    return layoutResults.value
  }

  const pushAttemptResult = (result: number) => {
    attemptResults.value.push(result)
  }

  const pushLayoutResult = (result: number) => {
    layoutResults.value.push(result)
  }

  const incrementCurrentAttempt = () => {
    if (currentAttempt.value === currentDrill.value!.attempts! - 1) {
      const highestAttempt = Math.max(...attemptResults.value)
      pots.value = highestAttempt
      drillComplete.value = true
      return
    }
    currentAttempt.value++
  }

  const incrementCurrentLayout = () => {
    if (currentLayout.value === currentDrill.value!.layouts! - 1) {
      const sortedResults = layoutResults.value.sort((a, b) => a - b)
      const twoLowestLayoutScores = sortedResults[0] + sortedResults[1]
      pots.value = twoLowestLayoutScores
      drillComplete.value = true
      return
    }
    currentLayout.value++
  }

  watch([shot, score], () => {
    if (currentDrill.value!.type === 'progressive') {
      if (shot.value >= 8 && score.value >= 12) {
        drillComplete.value = true
      }
    }
  })

  watch(drillComplete, () => {
    if (drillComplete.value) {
      if (getScore() >= 10) {
        setBonus(3)
      }
      submitScore()
    }
  })

  return {
    drill,
    fetchDrill,
    nextDrill,
    previousDrill,
    fetchDrillSet,
    currentDrill,
    isFirstDrill,
    isLastDrill,
    getDrillName,
    resetValues,
    incrementShot,
    incrementScore,
    incrementPosition,
    decrementPosition,
    updatePreviousState,
    undo,
    getShot,
    getPosition,
    setPosition,
    getBonus,
    setBonus,
    getPots,
    getPreviousState,
    getIsSet,
    getScore,
    getDrillComplete,
    getDrillId,
    isCurrentDrill,
    getMaxScore,
    isAttempts,
    getCurrentAttempt,
    getAttemptResults,
    pushAttemptResult,
    incrementCurrentAttempt,
    isLayout,
    getCurrentLayout,
    getLayoutResults,
    pushLayoutResult,
    incrementCurrentLayout
  }
})
