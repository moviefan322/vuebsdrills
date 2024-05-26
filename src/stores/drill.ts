import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Drill, DrillSet } from '../types/types'
import drills from '../data/bufDrills'
import drillSets from '../data/drillSets'

export const useDrillStore = defineStore('drill', () => {
  const drillSet = ref<DrillSet | null>(null)
  const drill = ref<Drill | null>(null)
  const currentDrillIndex = ref(0)
  const isSet = computed(() => !!drillSet.value)

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
      console.error('Drill not found')
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

  return { drill, fetchDrill, nextDrill, previousDrill, fetchDrillSet, currentDrill, isSet, isFirstDrill, isLastDrill}
})
