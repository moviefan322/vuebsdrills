export interface Drill {
  id: number
  name: string
  maxScore: number
  instructions: string
  image: string | string[]
  type: 'progressive' | 'standard' | 'highscore' | 'layout'
  skills: string[]
  attempts?: number
  layouts?: number
}

export interface DrillSet {
  id: number
  name: string
  drills: Drill[]
}

export interface Score {
  id: number
  drillId: number
  score: number
  maxScore: number
  date: string
}

export interface SubmitScorePayload {
  score: number
  maxScore: number
  drillId: number
}
