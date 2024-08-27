export interface TableSetup {
  drill: number
  drillName: string
  ballPositionProps?: Array<{ number: number; x: number; y: number }>
  pottingPocketProp?: Array<{ show: boolean; x: number; y: number }>
  targetSpecs?: {
    isTarget: boolean
    x: number
    y: number
    rotate: boolean
    w: number
    h: number
  }
  leaveLineProp?: { draw: boolean; x: number; y: number }
  kickShotLineProp?: { draw: boolean; rails: number; objectBall: number }
  bankShotLineProp?: {
    draw: boolean
    objectBall: number
    pocket: { x: number; y: number }
  }
  startIndex: number
  showShotLine: boolean
}

export interface Drill {
  id: number
  name: string
  maxScore: number
  instructions: string
  image?: string | string[]
  type: 'progressive' | 'standard' | 'highscore' | 'layout' | 'attempt'
  skills: string[]
  attempts?: number
  layouts?: number
  layoutMaxScore?: number
  tableSetup: TableSetup
}

export interface DrillSet {
  id: number
  name: string
  drills: Drill[]
  createdBy: number
}

export interface ScoreFromApi {
  id: number
  user: number
  drill: number
  score: number
  maxScore: number
  createdAt: string
}

export interface SubmitScorePayload {
  score: number
  maxScore: number
  drill: number
}

export interface UserObject {
  name: string
  email: string
}
