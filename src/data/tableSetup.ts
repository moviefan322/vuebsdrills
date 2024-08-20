export interface BallPosition {
  x: number
  y: number
  number?: number
}

export interface TableSetup {
  drillName: string
  drillType: string
  drillId: number
  ballPositionProps: BallPosition[][]
  startIndex: number
  showShotLine: boolean
  pottingPocketProp: { x: number; y: number; show: boolean }
  targetSpecs: {
    isTarget: boolean
    x: number
    y: number
    rotate: boolean
    w: number
    h: number
  } | null
  leaveLineProp: { draw: boolean; x: number; y: number } | null
  kickShotLineProp: { draw: boolean; rails: number | null; objectBall: number | null } | null
  bankShotLineProp: {
    draw: boolean
    objectBall: number | null
    pocket: { x: number; y: number } | null
  } | null
}

export const cutShotTableSetup: TableSetup = {
  drillId: 1,
  drillName: 'Cut Shot',
  drillType: 'Progressive',
  ballPositionProps: [
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 8, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 7, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 6, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 5, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 4, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 3, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 1, y: 1 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: { x: 8, y: 4, show: true },
  targetSpecs: { isTarget: false, x: 7.5, y: 0.5, rotate: false, w: 0.65, h: 0.8 },
  leaveLineProp: { draw: false, x: 0, y: 0 },
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const stopShotTableSetup: TableSetup = {
  drillId: 2,
  drillName: 'Stop Shot',
  drillType: 'Progressive',
  ballPositionProps: [
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 8, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 7, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 6, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 5, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 4, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 3, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 1, y: 1 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: { x: 8, y: 0, show: true },
  targetSpecs: { isTarget: false, x: 7.5, y: 0.5, rotate: false, w: 0.65, h: 0.8 },
  leaveLineProp: { draw: false, x: 0, y: 0 },
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const followShotTableSetup: TableSetup = {
  drillId: 3,
  drillName: 'Follow Shot',
  drillType: 'Progressive',
  ballPositionProps: [
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 8, y: 0.15 }
    ],
    [
      { number: 1, x: 8, y: 0.15 },
      { number: 0, x: 7, y: 0.15 }
    ],
    [
      { number: 1, x: 7, y: 0.15 },
      { number: 0, x: 6, y: 0.15 }
    ],
    [
      { number: 1, x: 6, y: 0.15 },
      { number: 0, x: 5, y: 0.15 }
    ],
    [
      { number: 1, x: 5, y: 0.15 },
      { number: 0, x: 4, y: 0.15 }
    ],
    [
      { number: 1, x: 4, y: 0.15 },
      { number: 0, x: 3, y: 0.15 }
    ],
    [
      { number: 1, x: 3, y: 0.15 },
      { number: 0, x: 2, y: .15}
    ],
    [
      { number: 1, x: 2, y: 0.15 },
      { number: 0, x: 1, y: .15 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: { x: 8, y: 0, show: true },
  targetSpecs: { isTarget: true, x: 7.65, y: 0.5, rotate: false, w: 0.65, h: 0.8 },
  leaveLineProp: { draw: false, x: 0, y: 0 },
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const tableSetups = [cutShotTableSetup, stopShotTableSetup, followShotTableSetup]
