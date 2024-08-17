export interface BallPosition {
  x: number
  y: number
  number?: number
}

export interface TableSetup {
  drillName: string
  ballPositionProps: BallPosition[][]
  startIndex: number
  showShotline: boolean
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
  drillName: 'Cut Shot',
  ballPositionProps: [
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 1, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 3, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 4, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 5, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 6, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 7, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 3 },
      { number: 0, x: 8, y: 1 }
    ]
  ],
  startIndex: 3,
  showShotline: true,
  pottingPocketProp: { x: 8, y: 4, show: true },
  targetSpecs: null,
  leaveLineProp: null,
  kickShotLineProp: null,
  bankShotLineProp: null
}

export const stopShotTableSetup: TableSetup = {
  drillName: 'Stop Shot',
  ballPositionProps: [
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 1, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 3, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 4, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 5, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 6, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 7, y: 0.25 }
    ],
    [
      { number: 1, x: 7.7, y: 0.15 },
      { number: 0, x: 8, y: 0.25 }
    ]
  ],
  startIndex: 3,
  showShotline: true,
  pottingPocketProp: { x: 8, y: 0, show: true },
  targetSpecs: null,
  leaveLineProp: null,
  kickShotLineProp: null,
  bankShotLineProp: null
}

export const followShotTableSetup: TableSetup = {
    drillName: 'Follow Shot',
    ballPositionProps: [
      [
        { number: 1, x: 7.7, y: 0.15 },
        { number: 0, x: 1, y: 1 }
      ],
      [
        { number: 1, x: 7.7, y: 2 },
        { number: 0, x: 2, y: 1 }
      ],
      [
        { number: 1, x: 7.7, y: 2 },
        { number: 0, x: 3, y: 0.25 }
      ],
      [
        { number: 1, x: 7.7, y: 2 },
        { number: 0, x: 4, y: 0.25 }
      ],
      [
        { number: 1, x: 7.7, y: 2 },
        { number: 0, x: 5, y: 0.25 }
      ],
      [
        { number: 1, x: 7.7, y: 2 },
        { number: 0, x: 6, y: 0.25 }
      ],
      [
        { number: 1, x: 7.7, y: 2 },
        { number: 0, x: 7, y: 0.25 }
      ],
      [
        { number: 1, x: 7.7, y: 2 },
        { number: 0, x: 8, y: 0.25 }
      ]
    ],
    startIndex: 3,
    showShotline: true,
    pottingPocketProp: { x: 8, y: 0, show: true },
    targetSpecs: null,
    leaveLineProp: null,
    kickShotLineProp: null,
    bankShotLineProp: null
  }