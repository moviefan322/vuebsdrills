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

export const landingZoneTableSetup: TableSetup = {
  drillId: 8,
  drillName: 'Landing Zone',
  drillType: 'standard',
  ballPositionProps: [
    [
      { number: 99, x: 7, y: 1 },
      { number: 0, x: 6.5, y: 2 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: true }],
  targetSpecs: [
    { isTarget: true, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 3.9, y: 2, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 3.9, y: 2, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 3.9, y: 2, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 3.9, y: 2, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 1.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 5.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 5.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 5.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 },
    { isTarget: true, x: 5.9, y: 3.65, rotate: false, w: 0.9, h: 0.65 }
  ],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const lineOfBalls1TableSetup: TableSetup = {
  drillId: 11,
  drillName: 'Line of Balls (I)',
  drillType: 'attempt',
  ballPositionProps: [
    [
      { number: 1, x: 7.65, y: 1.95 },
      { number: 2, x: 7.25, y: 1.95 },
      { number: 3, x: 6.85, y: 1.95 },
      { number: 4, x: 6.45, y: 1.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const lineOfBalls2TableSetup: TableSetup = {
  drillId: 12,
  drillName: 'Line of Balls (II)',
  drillType: 'attempt',
  ballPositionProps: [
    [
      { number: 1, x: 7.65, y: 1.95 },
      { number: 2, x: 7.25, y: 1.95 },
      { number: 3, x: 6.85, y: 1.95 },
      { number: 4, x: 6.45, y: 1.95 },
      { number: 5, x: 6.05, y: 1.95 },
      { number: 6, x: 5.65, y: 1.95 },
      { number: 7, x: 5.25, y: 1.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const lineOfBalls3TableSetup: TableSetup = {
  drillId: 13,
  drillName: 'Line of Balls (III)',
  drillType: 'attempt',
  ballPositionProps: [
    [
      { number: 1, x: 7.65, y: 1.95 },
      { number: 2, x: 7.25, y: 1.95 },
      { number: 3, x: 6.85, y: 1.95 },
      { number: 4, x: 6.45, y: 1.95 },
      { number: 5, x: 6.05, y: 1.95 },
      { number: 6, x: 5.65, y: 1.95 },
      { number: 7, x: 5.25, y: 1.95 },
      { number: 8, x: 4.85, y: 1.95 },
      { number: 9, x: 4.45, y: 1.95 },
      { number: 10, x: 4.05, y: 1.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const railCutShot1TableSetup: TableSetup = {
  drillId: 14,
  drillName: 'Rail Cut Shot (I)',
  drillType: 'attempt',
  ballPositionProps: [
    [
      { number: 1, x: 1.95, y: 0.15 },
      { number: 2, x: 5.95, y: 0.15 },
      { number: 3, x: 7.83, y: 1.95 },
      { number: 4, x: 5.95, y: 3.85 },
      { number: 5, x: 1.95, y: 3.85 },
      { number: 6, x: 0.15, y: 1.95 },
      { number: 7, x: 4.03, y: 1.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const railCutShot2TableSetup: TableSetup = {
  drillId: 15,
  drillName: 'Rail Cut Shot (II)',
  drillType: 'attempt',
  ballPositionProps: [
    [
      { number: 1, x: 1.95, y: 0.15 },
      { number: 2, x: 5.95, y: 0.15 },
      { number: 3, x: 7.83, y: 0.95 },
      { number: 4, x: 7.83, y: 1.95 },
      { number: 5, x: 7.83, y: 2.95 },
      { number: 6, x: 5.95, y: 3.85 },
      { number: 7, x: 1.95, y: 3.85 },
      { number: 8, x: 0.15, y: 2.95 },
      { number: 9, x: 0.15, y: 1.95 },
      { number: 10, x: 0.15, y: 0.95 },
      { number: 11, x: 4.03, y: 1.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const railCutShot3TableSetup: TableSetup = {
  drillId: 16,
  drillName: 'Rail Cut Shot (III)',
  drillType: 'attempt',
  ballPositionProps: [
    [
      { number: 1, x: 0.95, y: 0.15 },
      { number: 2, x: 1.95, y: 0.15 },
      { number: 3, x: 5.95, y: 0.15 },
      { number: 4, x: 6.95, y: 0.15 },
      { number: 5, x: 7.83, y: 0.95 },
      { number: 6, x: 7.83, y: 1.95 },
      { number: 7, x: 7.83, y: 2.95 },
      { number: 8, x: 6.95, y: 3.85 },
      { number: 9, x: 5.95, y: 3.85 },
      { number: 10, x: 1.95, y: 3.85 },
      { number: 11, x: 0.95, y: 3.85 },
      { number: 12, x: 0.15, y: 2.95 },
      { number: 13, x: 0.15, y: 1.95 },
      { number: 14, x: 0.15, y: 0.95 },
      { number: 15, x: 4.03, y: 1.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const pattern9Ball1TableSetup: TableSetup = {
  drillId: 17,
  drillName: '9B Patterns (I)',
  drillType: 'layout',
  ballPositionProps: [
    [
      { number: 5, x: 1, y: 1 },
      { number: 6, x: 3, y: 3 },
      { number: 7, x: 1, y: 3 },
      { number: 8, x: 3, y: 1 },
      { number: 9, x: 5, y: 1 }
    ],
    [
      { number: 5, x: 0.25, y: 0.95 },
      { number: 6, x: 0.25, y: 2.95 },
      { number: 7, x: 7.75, y: 2.95 },
      { number: 8, x: 2.95, y: 3.75 },
      { number: 9, x: 7.75, y: 0.95 }
    ],
    [
      { number: 5, x: 5.8, y: 2.55 },
      { number: 6, x: 7.5, y: 0.5 },
      { number: 7, x: 6.15, y: 1.95 },
      { number: 8, x: 5.95, y: 1.95 },
      { number: 9, x: 0.95, y: 0.25 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const pattern9Ball2TableSetup: TableSetup = {
  drillId: 18,
  drillName: '9B Patterns (II)',
  drillType: 'layout',
  ballPositionProps: [
    [
      { number: 4, x: 6.95, y: 2.95 },
      { number: 5, x: 5.95, y: 1.95 },
      { number: 6, x: 3, y: 1 },
      { number: 7, x: 2, y: 2 },
      { number: 8, x: 1, y: 1 },
      { number: 9, x: 4.95, y: 0.25 }
    ],
    [
      { number: 4, x: 6.95, y: 1.95 },
      { number: 5, x: 6.95, y: 3.75 },
      { number: 6, x: 6.95, y: 0.25 },
      { number: 7, x: 4.95, y: 3.75 },
      { number: 8, x: 4.95, y: 0.25 },
      { number: 9, x: 0.25, y: 1.95 }
    ],
    [
      { number: 4, x: 4.95, y: 0.95 },
      { number: 5, x: 3.95, y: 2.95 },
      { number: 6, x: 0.95, y: 0.95 },
      { number: 7, x: 3.6, y: 3.85 },
      { number: 8, x: 3.8, y: 3.85 },
      { number: 9, x: 7.75, y: 0.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const pattern9Ball3TableSetup: TableSetup = {
  drillId: 19,
  drillName: '9B Patterns (III)',
  drillType: 'layout',
  ballPositionProps: [
    [
      { number: 3, x: 1, y: 2.95 },
      { number: 4, x: 1, y: 0.95 },
      { number: 5, x: 3.95, y: 1.95 },
      { number: 6, x: 1.95, y: 3.75 },
      { number: 7, x: 2.95, y: 1.95 },
      { number: 8, x: 4.95, y: 0.25 },
      { number: 9, x: 7.75, y: 1.95 }
    ],
    [
      { number: 3, x: 3.95, y: 0.95 },
      { number: 4, x: 3.95, y: 2.95 },
      { number: 5, x: 0.15, y: 2.95 },
      { number: 6, x: 0.95, y: 3.85 },
      { number: 7, x: 5.95, y: 3.85 },
      { number: 8, x: 2.95, y: 0.15 },
      { number: 9, x: 0.15, y: 1.95 }
    ],
    [
      { number: 3, x: 4.95, y: 0.95 },
      { number: 4, x: 4.95, y: 2.95 },
      { number: 5, x: 3.95, y: 0.95 },
      { number: 6, x: 6.95, y: 0.95 },
      { number: 7, x: 0.15, y: 2.95 },
      { number: 8, x: 6.95, y: 2.95 },
      { number: 9, x: 0.15, y: 0.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const pattern8Ball1TableSetup: TableSetup = {
  drillId: 20,
  drillName: '8 Pattern Drills (I)',
  drillType: 'layout',
  ballPositionProps: [
    [
      { number: 17, x: 1, y: 2.95 },
      { number: 17, x: 4, y: 2.95 },
      { number: 17, x: 7, y: 2.95 },
      { number: 17, x: 1, y: 0.95 },
      { number: 17, x: 1, y: 2.95 },
      { number: 8, x: 7, y: 0.95 }
    ],
    [
      { number: 17, x: 7, y: 1.95 },
      { number: 17, x: 5.95, y: 3.75 },
      { number: 17, x: 7, y: 2.95 },
      { number: 17, x: 4, y: 2.95 },
      { number: 8, x: 7.85, y: 2.95 },
      { number: 16, x: 6, y: 1.95 },
      { number: 16, x: 5, y: 2.95 }
    ],
    [
      { number: 17, x: 6.95, y: 0.25 },
      { number: 17, x: 6.95, y: 3.75 },
      { number: 17, x: 0.15, y: 0.95 },
      { number: 17, x: 0.15, y: 2.95 },
      { number: 8, x: 0.95, y: 3.75 },
      { number: 16, x: 6, y: 1.95 },
      { number: 16, x: 6.2, y: 1.95 },
      { number: 16, x: 2, y: 1.95 },
      { number: 16, x: 2.2, y: 1.95 },
      { number: 16, x: 1.8, y: 1.85 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const pattern8Ball2TableSetup: TableSetup = {
  drillId: 21,
  drillName: '8 Pattern Drills (II)',
  drillType: 'layout',
  ballPositionProps: [
    [
      { number: 17, x: 0.15, y: 0.95 },
      { number: 17, x: 4, y: 1.95 },
      { number: 17, x: 7, y: 2.95 },
      { number: 17, x: 1, y: 1.95 },
      { number: 17, x: 1, y: 3.75 },
      { number: 8, x: 7, y: 0.95 }
    ],
    [
      { number: 17, x: 4, y: 1.95 },
      { number: 17, x: 4, y: 0.95 },
      { number: 17, x: 7, y: 1.95 },
      { number: 17, x: 4, y: 2.95 },
      { number: 17, x: 7, y: 0.95 },
      { number: 8, x: 0.25, y: 2.95 },
      { number: 16, x: 1.95, y: 0.25 },
      { number: 16, x: 0.95, y: 1 }
    ],
    [
      { number: 17, x: 1.95, y: 0.15 },
      { number: 17, x: 6.95, y: 1 },
      { number: 17, x: 6.95, y: 3.85 },
      { number: 17, x: 5.95, y: 1.95 },
      { number: 17, x: 0.15, y: 2.95 },
      { number: 8, x: 0.3, y: 3.85 },
      { number: 16, x: 1, y: 1.95 },
      { number: 16, x: 2, y: 1.95 },
      { number: 16, x: 2.95, y: 3.65 },
      { number: 16, x: 2.95, y: 3.45 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const pattern8Ball3TableSetup: TableSetup = {
  drillId: 22,
  drillName: '8 Pattern Drills (III)',
  drillType: 'layout',
  ballPositionProps: [
    [
      { number: 17, x: 4.25, y: 0.3 },
      { number: 17, x: 4, y: 2.95 },
      { number: 17, x: 6, y: 2.95 },
      { number: 17, x: 0.15, y: 0.95 },
      { number: 17, x: 2, y: 2.95 },
      { number: 17, x: 4.95, y: 3.7 },
      { number: 8, x: 7, y: 0.95 }
    ],
    [
      { number: 17, x: 6, y: 1.95 },
      { number: 17, x: 1.95, y: 0.15 },
      { number: 17, x: 7, y: 3.85 },
      { number: 17, x: 0.15, y: 2.95 },
      { number: 17, x: 7, y: 0.95 },
      { number: 8, x: 0.3, y: 3.85 },
      { number: 16, x: 1, y: 1.95 },
      { number: 16, x: 2, y: 1.95 },
      { number: 16, x: 2.95, y: 3.65 },
      { number: 16, x: 2.95, y: 3.45 }
    ],
    [
      { number: 17, x: 1.95, y: 2.95 },
      { number: 17, x: 7.85, y: 1 },
      { number: 17, x: 7.85, y: 2.95 },
      { number: 17, x: 5.95, y: 2.95 },
      { number: 17, x: 0.15, y: 2.95 },
      { number: 17, x: 3.95, y: 2.95 },
      { number: 8, x: 0.3, y: 3.85 },
      { number: 16, x: 1, y: 1.95 },
      { number: 16, x: 2, y: 1.95 },
      { number: 16, x: 2.95, y: 3.65 },
      { number: 16, x: 2.95, y: 3.45 },
      { number: 16, x: 6.95, y: 1.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const safety1TableSetup: TableSetup = {
  drillId: 23,
  drillName: 'Safety (I)',
  drillType: 'standard',
  ballPositionProps: [
    [
      { number: 0, x: 0.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ]
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const safety2TableSetup: TableSetup = {
  drillId: 24,
  drillName: 'Safety (II)',
  drillType: 'standard',
  ballPositionProps: [
    [
      { number: 0, x: 1.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 2.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 2.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
  kickShotLineProp: { draw: false, rails: 0, objectBall: null },
  bankShotLineProp: { draw: false, objectBall: null, pocket: null }
}

export const safety3TableSetup: TableSetup = {
  drillId: 25,
  drillName: 'Safety (II)',
  drillType: 'standard',
  ballPositionProps: [
    [
      { number: 0, x: 1.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 1.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 2.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 2.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 2.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 2.95 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 0.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 1.95, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 2.45, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
    [
      { number: 0, x: 2.45, y: 3.45 },
      { number: 1, x: 1.95, y: 2.95 },
      { number: 2, x: 5.55, y: 0.95 },
      { number: 3, x: 5.75, y: 0.85 },
      { number: 4, x: 5.75, y: 1.05 },
      { number: 6, x: 5.95, y: 0.95 },
      { number: 5, x: 5.95, y: 0.75 },
      { number: 7, x: 5.95, y: 1.15 },
      { number: 8, x: 6.15, y: 0.85 },
      { number: 9, x: 6.15, y: 1.05 },
      { number: 10, x: 6.35, y: 0.95 }
    ],
  ],
  startIndex: 3,
  showShotLine: true,
  pottingPocketProp: [{ x: 8, y: 0, show: false }],
  targetSpecs: [{ isTarget: false, x: 5.9, y: 0.5, rotate: false, w: 0.9, h: 0.65 }],
  leaveLineProp: [{ draw: false, x: 0, y: 0 }],
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
  wagonWheelTableSetup,
  landingZoneTableSetup,
  lineOfBalls1TableSetup,
  lineOfBalls2TableSetup,
  lineOfBalls3TableSetup,
  railCutShot1TableSetup,
  railCutShot2TableSetup,
  railCutShot3TableSetup,
  pattern9Ball1TableSetup,
  pattern9Ball2TableSetup,
  pattern9Ball3TableSetup,
  pattern8Ball1TableSetup,
  pattern8Ball2TableSetup,
  pattern8Ball3TableSetup,
  safety1TableSetup,
  safety2TableSetup,
  safety3TableSetup
]
