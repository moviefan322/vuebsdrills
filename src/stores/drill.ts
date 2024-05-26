import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Drill } from '../types/types'
import drills from '../data/drills'

export const useDrillStore = defineStore('drill', () => {
  const drill = ref<Drill | null>(null)

  const fetchDrill = async (id: number) => {
    const data = await new Promise<Drill | undefined>((resolve) => {
      setTimeout(() => {
        resolve(drills.find((d) => d.id === id))
      }, 200)
    })

    if (data) {
      drill.value = data
    } else {
      console.error('Drill not found')
    }
  }

  return { drill, fetchDrill }
})
