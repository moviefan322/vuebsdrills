export interface BallPosition {
  x: number
  y: number
  number?: number
}

export interface TargetSpec {
  isTarget: boolean
  x: number
  y: number
  rotate: boolean
  w: number
  h: number
}

export interface PottingPocketProp {
  x: number
  y: number
  show: boolean
}

export interface LeaveLineProp {
  draw: boolean
  x: number
  y: number
}

export interface TableSetup {
  drillName: string
  drillType: string
  drillId: number
  ballPositionProps: BallPosition[][]
  startIndex: number
  showShotLine: boolean
  pottingPocketProp: PottingPocketProp[]
  targetSpecs: TargetSpec[]
  leaveLineProp: LeaveLineProp[]
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
  drillType: 'progressive',
  ballPositionProps: [
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 8, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 7, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 6, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 5, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 4, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 3, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 3 },
      { number: 0, x: 1, y: 1 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 4, show: true }],
  targetSpecs: [{ isTarget: false, x: 7.5, y: 0.5, rotate: false, w: 0.65, h: 0.8 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const stopShotTableSetup: TableSetup = {
  drillId: 2,
  drillName: 'Stop Shot',
  drillType: 'progressive',
  ballPositionProps: [
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 8, y: 0.25 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 7, y: 0.25 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 6, y: 0.25 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 5, y: 0.25 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 4, y: 0.25 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 3, y: 0.25 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 1, y: 1 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: true }],
  targetSpecs: [{ isTarget: false, x: 7.5, y: 0.5, rotate: false, w: 0.65, h: 0.8 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const followShotTableSetup: TableSetup = {
  drillId: 3,
  drillName: 'Follow Shot',
  drillType: 'progressive',
  ballPositionProps: [
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 8, y: 0.25 }
    ],
    [
      { number: 99, x: 7.7, y: 0.15 },
      { number: 0, x: 7, y: 0.25 }
    ],
    [
      { number: 99, x: 7, y: 0.2 },
      { number: 0, x: 6, y: 0.25 }
    ],
    [
      { number: 99, x: 6, y: 0.2 },
      { number: 0, x: 5, y: 0.25 }
    ],
    [
      { number: 99, x: 5, y: 0.2 },
      { number: 0, x: 4, y: 0.25 }
    ],
    [
      { number: 99, x: 4, y: 0.2 },
      { number: 0, x: 3, y: 0.25 }
    ],
    [
      { number: 99, x: 3, y: 0.2 },
      { number: 0, x: 2, y: 0.25 }
    ],
    [
      { number: 99, x: 2, y: 0.2 },
      { number: 0, x: 1, y: 0.25 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: true }],
  targetSpecs: [{ isTarget: true, x: 7.65, y: 0.5, rotate: false, w: 0.65, h: 0.8 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const drawShotTableSetup: TableSetup = {
  drillId: 4,
  drillName: 'Draw Shot',
  drillType: 'progressive',
  ballPositionProps: [
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 8, y: 0.2 }
    ],
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 7, y: 0.2 }
    ],
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 6, y: 0.2 }
    ],
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 5, y: 0.2 }
    ],
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 4, y: 0.2 }
    ],
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 3, y: 0.2 }
    ],
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 2, y: 0.2 }
    ],
    [
      { number: 99, x: 7.5, y: 0.15 },
      { number: 0, x: 1, y: 0.2 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: true }],
  targetSpecs: [{ isTarget: true, x: 4.5, y: 0.5, rotate: false, w: 2, h: 1 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const stunShotTableSetup: TableSetup = {
  drillId: 5,
  drillName: 'Stun Shot',
  drillType: 'progressive',
  ballPositionProps: [
    [
      { number: 99, x: 4, y: 2 },
      { number: 0, x: 3.7, y: 1.5 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 4, y: 4, show: true }],
  targetSpecs: [
    { isTarget: true, x: 4.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 },
    { isTarget: true, x: 5.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 },
    { isTarget: true, x: 6.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 },
    { isTarget: true, x: 7.6, y: 1.95, rotate: false, w: 0.65, h: 0.8 },
    { isTarget: true, x: 6.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 },
    { isTarget: true, x: 5.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 },
    { isTarget: true, x: 4.9, y: 1.95, rotate: true, w: 0.65, h: 0.8 }
  ],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const pocketingTableSetup: TableSetup = {
  drillId: 6,
  drillName: 'Ball Pocketing',
  drillType: 'standard',
  ballPositionProps: [
    [
      { number: 99, x: 3, y: 1 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 99, x: 3, y: 1 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 99, x: 4, y: 2 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 99, x: 4, y: 2 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 99, x: 6, y: 2 },
      { number: 0, x: 2, y: 1 }
    ],
    [
      { number: 99, x: 3, y: 3 },
      { number: 0, x: 2, y: 3 }
    ],
    [
      { number: 99, x: 3, y: 3 },
      { number: 0, x: 2, y: 3 }
    ],
    [
      { number: 99, x: 4, y: 2 },
      { number: 0, x: 2, y: 3 }
    ],
    [
      { number: 99, x: 4, y: 2 },
      { number: 0, x: 2, y: 3 }
    ],
    [
      { number: 99, x: 6, y: 2 },
      { number: 0, x: 2, y: 3 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [
    { x: 4, y: 0, show: true },
    { x: 8, y: 0, show: true },
    { x: 8, y: 4, show: true },
    { x: 4, y: 4, show: true },
    { x: 8, y: 4, show: true },
    { x: 4, y: 4, show: true },
    { x: 8, y: 4, show: true },
    { x: 8, y: 0, show: true },
    { x: 4, y: 0, show: true },
    { x: 8, y: 0, show: true }
  ],
  targetSpecs: [{ isTarget: false, x: 4.5, y: 0.5, rotate: false, w: 2, h: 1 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const wagonWheelTableSetup: TableSetup = {
  drillId: 7,
  drillName: 'Wagon Wheel',
  drillType: 'standard',
  ballPositionProps: [
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 11, x: 4, y: 1 },
      { number: 1, x: 4.95, y: 0.2 },
      { number: 2, x: 5.95, y: 0.2 },
      { number: 3, x: 6.95, y: 0.2 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 12, x: 4, y: 1 },
      { number: 1, x: 4.95, y: 0.2 },
      { number: 2, x: 5.95, y: 0.2 },
      { number: 3, x: 6.95, y: 0.2 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 13, x: 4, y: 1 },
      { number: 2, x: 5.95, y: 0.2 },
      { number: 3, x: 6.95, y: 0.2 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 14, x: 4, y: 1 },
      { number: 2, x: 5.95, y: 0.2 },
      { number: 3, x: 6.95, y: 0.2 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 15, x: 4, y: 1 },
      { number: 3, x: 6.95, y: 0.2 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 1, x: 4, y: 1 },
      { number: 3, x: 6.95, y: 0.2 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 2, x: 4, y: 1 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 3, x: 4, y: 1 },
      { number: 4, x: 7.8, y: 0.2 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 4, x: 4, y: 1 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 11, x: 4, y: 1 },
      { number: 5, x: 7.8, y: 0.95 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 12, x: 4, y: 1 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 13, x: 4, y: 1 },
      { number: 6, x: 7.8, y: 1.95 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 14, x: 4, y: 1 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 15, x: 4, y: 1 },
      { number: 7, x: 7.8, y: 2.95 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 1, x: 4, y: 1 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 2, x: 4, y: 1 },
      { number: 8, x: 7.8, y: 3.8 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 3, x: 4, y: 1 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 3, x: 4, y: 1 },
      { number: 9, x: 6.95, y: 3.8 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 4, x: 4, y: 1 },
      { number: 10, x: 5.95, y: 3.8 }
    ],
    [
      { number: 0, x: 3.6, y: 2 },
      { number: 4, x: 4, y: 1 },
      { number: 10, x: 5.95, y: 3.8 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 4, y: 0, show: true }],
  targetSpecs: [{ isTarget: false, x: 4.5, y: 0.5, rotate: false, w: 2, h: 1 }],
  leaveLineProp: [
    { draw: true, x: 4.8, y: 0.35 },
    { draw: true, x: 4.8, y: 0.35 },
    { draw: true, x: 5.8, y: 0.35 },
    { draw: true, x: 5.8, y: 0.35 },
    { draw: true, x: 6.7, y: 0.35 },
    { draw: true, x: 6.7, y: 0.35 },
    { draw: true, x: 7.5, y: 0.25 },
    { draw: true, x: 7.5, y: 0.25 },
    { draw: true, x: 7.5, y: 0.96 },
    { draw: true, x: 7.5, y: 0.96 },
    { draw: true, x: 7.5, y: 1.9 },
    { draw: true, x: 7.5, y: 1.9 },
    { draw: true, x: 7.5, y: 2.8 },
    { draw: true, x: 7.5, y: 2.8 },
    { draw: true, x: 7.6, y: 3.65 },
    { draw: true, x: 7.6, y: 3.65 },
    { draw: true, x: 6.75, y: 3.6 },
    { draw: true, x: 6.75, y: 3.6 },
    { draw: true, x: 5.8, y: 3.6 },
    { draw: true, x: 5.8, y: 3.6 }
  ],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const tableSetups = [
  cutShotTableSetup,
  stopShotTableSetup,
  followShotTableSetup,
  drawShotTableSetup,
  stunShotTableSetup,
  pocketingTableSetup,
  wagonWheelTableSetup
]
