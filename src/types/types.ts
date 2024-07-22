export interface Drill {
  id: number
  name: string
  maxScore: number
  instructions: string
  image: string | string[]
  type: 'progressive' | 'standard' | 'highscore' | 'layout' | 'attempt'
  skills: string[]
  attempts?: number
  layouts?: number
  layoutMaxScore?: number
}

export interface DrillSet {
  id: number
  name: string
  drills: Drill[]
}

export interface ScoreFromApi {
  id: number
  user: number
  drillId: number
  score: number
  maxScore: number
  createdAt: string
}

export interface SubmitScorePayload {
  score: number
  maxScore: number
  drillId: number
}
