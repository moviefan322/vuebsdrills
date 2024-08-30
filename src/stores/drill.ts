import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useScoreStore } from './scores'
import type { Drill, DrillSet } from '../types/types'

const allDrillsUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/drill/drills/'
const allDrillSetsUrl = import.meta.env.VITE_APP_BACKEND_URL + 'api/drillset/'

export const useDrillStore = defineStore('drill', () => {
  const allDrills = ref<Drill[]>([])
  const drillSet = ref<DrillSet | null>(null)
  const drill = ref<Drill | null>(null)
  const currentDrill = ref<Drill | null>(null)
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
  const previousState = ref({
    shot: 1,
    position: 4,
    bonus: 0,
    pots: 0
  })

  const scoreStore = useScoreStore()

  const fetchAllDrills = async () => {
    try {
      const response = await fetch(allDrillsUrl)
      const data = await response.json()

      const sortedData = data.sort((a: Drill, b: Drill) => b.id - a.id)

      allDrills.value = sortedData

      return sortedData.sort((a: Drill, b: Drill) => a.id - b.id)
    } catch (error: any) {
      console.log('error block:', error)
    }
  }

  watch(drill, () => {
    currentDrill.value = drill.value
  })

  const fetchAllDrillSets = async () => {
    try {
      const response = await fetch(allDrillSetsUrl)
      const data = await response.json()

      const sortedData = data.sort((a: DrillSet, b: DrillSet) => a.id - b.id)

      return sortedData
    } catch (error: any) {
      console.log('error block')
    }
  }

  const fetchDrillSet = async (id: number): Promise<DrillSet | null> => {
    try {
      const response = await fetch(allDrillSetsUrl + id + '/')
      const data = await response.json()

      drillSet.value = data
      currentDrillIndex.value = 0

      drill.value = data.drills
        ? ((await fetchDrill(data.drills[currentDrillIndex.value].id)) as unknown as Drill)
        : null

      return data
    } catch (error: any) {
      console.log('Error fetching drill set:', error)
      return null
    }
  }

  const fetchDrill = async (id: number) => {
    try {
      const response = await fetch(allDrillsUrl + id + '/')
      const data = await response.json()
      drill.value = data
      if (data) {
        drill.value = data
        return data
      } else {
        console.error('Drill set not found')
      }
    } catch (error: any) {
      console.log('error block')
    }
  }

  const fetchDrillData = async (id: number) => {
    try {
      const response = await fetch(allDrillsUrl + id + '/')
      const data = await response.json()
      return data
    } catch (error: any) {
      console.log('error block')
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

  const getDrillName = async (id: number): Promise<string> => {
    const drill = await fetchDrill(id)
    return drill && drill.name ? drill.name : ''
  }

  const getDrillSet = () => {
    return drillSet.value
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
    currentAttempt.value = 0
    currentLayout.value = 0
    attemptResults.value = []
    layoutResults.value = []
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
      drill: currentDrill.value!.id,
      maxScore: currentDrill.value!.maxScore,
      isSet: isSet.value
    }

    if (isSet.value) {
      scoreStore.pushScore(submission)
      if (isLastDrill.value) {
        console.log('submitting set', submission)
        scoreStore.submitSetScore()
      } else {
        return
      }
    } else {
      console.log('submitting single score', submission)
      scoreStore.submitScore(submission)
    }
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

  const getDrillSetId = () => {
    return drillSet.value!.id
  }

  const isCurrentDrill = () => {
    return currentDrill.value !== null
  }

  const getMaxScore = () => {
    return currentDrill.value!.maxScore
  }

  const getLayoutMaxScore = () => {
    return currentDrill.value!.layoutMaxScore
  }

  const isAttempts = () => {
    return currentDrill.value!.type === 'attempt'
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

  const getCurrentDrill = () => {
    return currentDrill.value
  }

  const getCurrentDrillIndex = () => {
    return currentDrillIndex.value
  }

  const setDrillSet = async (id: number) => {
    drillSet.value = await fetchDrillSet(id)
  }

  const getCurrentTableSetup = () => {
    return currentDrill.value!.tableSetup
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
      const medianAttempt = attemptResults.value.sort((a, b) => a - b)[1]
      if (currentDrill.value!.id === 38) {
        pots.value = medianAttempt
      } else {
        pots.value = highestAttempt
      }
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

  const incrementCurrentDrillIndex = async () => {
    if (drillSet.value && drillSet.value.drills) {
      currentDrillIndex.value++
      currentDrill.value = drillSet.value.drills[currentDrillIndex.value]
    } else {
      console.error('drillSet or drillSet.drills is not defined')
    }
  }

  const decrementCurrentDrillIndex = async () => {
    if (drillSet.value && drillSet.value.drills) {
      currentDrillIndex.value--
      currentDrill.value = drillSet.value.drills[currentDrillIndex.value]
    } else {
      console.error('drillSet or drillSet.drills is not defined')
    }
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

  // reset values when drill changes
  watch(currentDrill, () => {
    resetValues()
  })

  return {
    drill,
    fetchDrill,
    nextDrill,
    previousDrill,
    fetchAllDrillSets,
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
    getLayoutMaxScore,
    isAttempts,
    getCurrentAttempt,
    getAttemptResults,
    pushAttemptResult,
    incrementCurrentAttempt,
    isLayout,
    getCurrentLayout,
    getLayoutResults,
    pushLayoutResult,
    incrementCurrentLayout,
    fetchAllDrills,
    getCurrentDrill,
    getCurrentDrillIndex,
    getCurrentTableSetup,
    incrementCurrentDrillIndex,
    decrementCurrentDrillIndex,
    setDrillSet,
    getDrillSet,
    getDrillSetId
  }
})
