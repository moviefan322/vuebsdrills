<template>
  <div id="pool-table"></div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'PoolTable',
  props: {
    tableWidth: {
      type: Number,
      default: 800
    },
    ballPositionsProp: {
      type: Array,
      default: () => [
        { number: 1, x: 7.7, y: 3 },
        // Cue ball
        { number: 0, x: 4, y: 1 }
      ]
    },
    pottingPocketProp: {
      type: Object,
      default: () => ({ show: false, x: 8, y: 4 }) // Diamond coordinates for the pocket
    },
    targetSpecs: {
      type: Object,
      required: false,
      default: () => ({ isTarget: false, x: 7.5, y: 0.5, rotate: false, w: 0.65, h: 0.8 })
    },
    leaveLineProp: {
      type: Object,
      default: () => ({ draw: false, x: 0, y: 0 })
    },
    showShotLine: {
      type: Boolean,
      default: true
    },
    kickShotLineProp: {
      type: Object,
      default: () => ({ draw: false, rails: 0, objectBall: null })
    },
    bankShotLineProp: {
      type: Object,
      default: () => ({ draw: false, objectBall: null, pocket: null })
    }
  },
  computed: {
    cueBallPosition() {
      return this.ballPositions.find((ball) => ball.number === 0)
    },
    ballPositions() {
      const tableWidth = this.tableWidth
      const tableHeight = tableWidth / 2
      const ballRadius = tableWidth / 80
      return this.ballPositionsProp.map((ball) => ({
        ...ball,
        x: (ball.x * tableWidth) / 8,
        y: (ball.y * tableHeight) / 4,
        radius: ballRadius
      }))
    },
    objectBall() {
      return this.ballPositions.find((ball) => ball.number !== 0)
    },
    kickShotLine() {
      const kickShotLine = this.kickShotLineProp
      if (!kickShotLine.draw || !kickShotLine.rails) return null

      const tableWidth = this.tableWidth
      const tableHeight = tableWidth / 2

      const cueBall = this.cueBallPosition
      const objectBall = this.ballPositions.find((ball) => ball.number === kickShotLine.objectBall)
      if (!cueBall || !objectBall) return null

      let railHit = { x: 0, y: 0 }

      if (kickShotLine.rails === 1) {
        // Calculate rail hit assuming top rail hit
        railHit.y = tableHeight
        railHit.x = cueBall.x + (objectBall.x - cueBall.x) / 2
        return {
          start: { x: cueBall.x, y: cueBall.y },
          railHit,
          end: { x: objectBall.x, y: objectBall.y }
        }
      }

      if (kickShotLine.rails === 2) {
        let railHit1 = { x: 0, y: 0 }
        let railHit2 = { x: 0, y: 0 }
        // Calculate rail hit assuming top rail hit
        railHit1.y = tableHeight
        railHit1.x = cueBall.x + (objectBall.x - cueBall.x) / 3
        railHit2.y = 0
        railHit2.x = cueBall.x + (objectBall.x - cueBall.x) * 0.66
        return {
          start: { x: cueBall.x, y: cueBall.y },
          railHit1,
          railHit2,
          end: { x: objectBall.x, y: objectBall.y }
        }
      }

      if (kickShotLine.rails === 3) {
        const diamondWidth = tableWidth / 8
        // Calculate rail hit assuming top rail hit
        return {
          start: { x: cueBall.x, y: cueBall.y },
          railHit1: { x: 2 * diamondWidth, y: 0.1 * diamondWidth },
          railHit2: { x: 7.9 * diamondWidth, y: 3.1 * diamondWidth },
          railHit3: { x: 6.9 * diamondWidth, y: 3.9 * diamondWidth },
          end: { x: objectBall.x, y: objectBall.y }
        }
      }

      return null
    },
    bankShotLine() {
      const bankShotLine = this.bankShotLineProp
      if (!bankShotLine.draw) return null
      const tableWidth = this.tableWidth
      const tableHeight = tableWidth / 2
      const diamondWidth = tableWidth / 8
      const ballRadius = tableWidth / 80

      const objectBall = this.ballPositions.find((ball) => ball.number === bankShotLine.objectBall)
      if (!objectBall) return null
      const pocket = {
        x: bankShotLine.pocket.x * diamondWidth,
        y: bankShotLine.pocket.y * diamondWidth
      }

      // Calculate the slope of the trajectory line
      const slope = ((pocket.y - objectBall.y) / (pocket.x - objectBall.x)) * 3

      // Determine the rail hit point
      let railHit = {}

      if (pocket.y > tableHeight) {
        // Pocket is on the bottom rail
        railHit.y = 0
        railHit.x = objectBall.x + (tableHeight - objectBall.y) / slope
      } else {
        // Pocket is on the top rail
        railHit.y = tableHeight
        railHit.x = objectBall.x - objectBall.y / slope
      }

      const directionVector = { x: railHit.x - objectBall.x, y: railHit.y - objectBall.y }
      const length = Math.sqrt(directionVector.x ** 2 + directionVector.y ** 2)

      const normalizedVector = { x: directionVector.x / length, y: directionVector.y / length }

      const start = {
        x: objectBall.x + normalizedVector.x * (ballRadius * 1.5),
        y: objectBall.y + normalizedVector.y * (ballRadius * 1.5)
      }

      return {
        start,
        railHit,
        end: { x: pocket.x, y: pocket.y + diamondWidth * 0.1 }
      }
    },
    pottingPocket() {
      const tableWidth = this.tableWidth
      const tableHeight = tableWidth / 2
      return {
        x: (this.pottingPocketProp.x * tableWidth) / 8,
        y: (this.pottingPocketProp.y * tableHeight) / 4
      }
    },
    pottingLine() {
      const objectBall = this.objectBall
      if (!objectBall) return null

      const pocketX = this.pottingPocket.x
      const pocketY = this.pottingPocket.y

      const angle = Math.atan2(pocketY - objectBall.y, pocketX - objectBall.x)
      const objectBallEdgeX = objectBall.x + Math.cos(angle) * (objectBall.radius * 2)
      const objectBallEdgeY = objectBall.y + Math.sin(angle) * (objectBall.radius * 2)

      return {
        start: { x: objectBallEdgeX, y: objectBallEdgeY },
        end: { x: pocketX, y: pocketY }
      }
    },
    shotLine() {
      const showShotLine = this.showShotLine
      const cueBall = this.cueBallPosition
      const objectBall = this.objectBall
      if (!cueBall || !objectBall || !showShotLine) return null

      let pocketX
      let pocketY

      if (this.bankShotLineProp.draw) {
        pocketX = (this.bankShotLine.railHit.x * this.tableWidth) / 8
        pocketY = (this.bankShotLine.railHit.y * this.tableWidth) / 8
      } else {
        pocketX = this.pottingPocket.x
        pocketY = this.pottingPocket.y
      }
      const pocketAngle = Math.atan2(pocketY - objectBall.y, pocketX - objectBall.x)

      const cueBallAngle = Math.atan2(objectBall.y - cueBall.y, objectBall.x - cueBall.x)
      const cueBallEdgeX = cueBall.x + Math.cos(cueBallAngle) * cueBall.radius
      const cueBallEdgeY = cueBall.y + Math.sin(cueBallAngle) * cueBall.radius
      const objectBallEdgeX = objectBall.x - Math.cos(pocketAngle) * objectBall.radius
      const objectBallEdgeY = objectBall.y - Math.sin(pocketAngle) * objectBall.radius

      return {
        start: { x: cueBallEdgeX, y: cueBallEdgeY },
        end: { x: objectBallEdgeX, y: objectBallEdgeY }
      }
    },
    leaveLine() {
      const leaveLine = this.leaveLineProp
      if (!leaveLine.draw) return null
      const diamondWidth = this.tableWidth / 8
      const objectBall = this.objectBall
      const pocketX = this.pottingPocket.x
      const pocketY = this.pottingPocket.y
      const pocketAngle = Math.atan2(pocketY - objectBall.y, pocketX - objectBall.x)

      const xEnd = this.leaveLineProp.x * diamondWidth
      const yEnd = this.leaveLineProp.y * diamondWidth
      const objectBallEdgeX = objectBall.x - Math.cos(pocketAngle) * objectBall.radius
      const objectBallEdgeY = objectBall.y - Math.sin(pocketAngle) * objectBall.radius

      return {
        start: { x: objectBallEdgeX, y: objectBallEdgeY },
        end: { x: xEnd, y: yEnd }
      }
    },
    cuePosition() {
      const shotLine = this.shotLine
      if (!shotLine) return { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }

      const cueBall = this.cueBallPosition
      const ballRadius = this.tableWidth / 80
      const cueLength = (this.tableWidth / 8) * 4

      const angle = Math.atan2(shotLine.end.y - shotLine.start.y, shotLine.end.x - shotLine.start.x)
      const cueEndX = cueBall.x - Math.cos(angle) * (ballRadius + 10)
      const cueEndY = cueBall.y - Math.sin(angle) * (ballRadius + 10)
      const cueStartX = cueEndX - Math.cos(angle) * cueLength
      const cueStartY = cueEndY - Math.sin(angle) * cueLength

      return {
        start: { x: cueStartX, y: cueStartY },
        end: { x: cueEndX, y: cueEndY }
      }
    }
  },
  mounted() {
    this.drawPoolTable()
    this.modifySpecificDiamonds()
  },
  methods: {
    getColor(number) {
      const colors = {
        1: '#FFD700',
        2: '#0000FF',
        3: '#FF0000',
        4: '#800080',
        5: '#FF4500',
        6: '#008000',
        7: '#800000',
        8: '#000000',
        9: '#FFD700',
        10: '#0000FF',
        11: '#FF0000',
        12: '#800080',
        13: '#FF4500',
        14: '#008000',
        15: '#800000',
        16: '#D1D8D1', // generic solid
        17: '#D1D8D1', // generic stripe
        0: '#FFFFFF' // Cue ball
      }
      return colors[number] || '#FFFFFF'
    },
    drawPoolTable() {
      const tableWidth = this.tableWidth
      const tableHeight = tableWidth / 2
      const borderSize = tableWidth / 20
      const ballRadius = tableWidth / 80
      const pocketRadius = tableWidth / 53
      const diamondWidth = tableWidth / 8

      const svg = d3
        .select('#pool-table')
        .append('svg')
        .attr('width', tableWidth + 2 * borderSize)
        .attr('height', tableHeight + 2 * borderSize)

      // Define arrow marker
      svg
        .append('defs')
        .append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 5)
        .attr('refY', 5)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M 0 0 L 10 5 L 0 10 Z')
        .attr('fill', 'red')

      // Draw oak-colored frame
      svg
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', tableWidth + 2 * borderSize)
        .attr('height', tableHeight + 2 * borderSize)
        .attr('fill', 'saddlebrown')

      // Draw pool table (felt)
      svg
        .append('rect')
        .attr('x', borderSize)
        .attr('y', borderSize)
        .attr('width', tableWidth)
        .attr('height', tableHeight)
        .attr('fill', 'lightseagreen')
        .attr('stroke', 'black')
        .attr('stroke-width', 5)

      // Draw pockets
      const pockets = [
        { x: borderSize, y: borderSize },
        { x: borderSize + tableWidth / 2, y: borderSize },
        { x: borderSize + tableWidth, y: borderSize },
        { x: borderSize, y: borderSize + tableHeight },
        { x: borderSize + tableWidth / 2, y: borderSize + tableHeight },
        { x: borderSize + tableWidth, y: borderSize + tableHeight }
      ]
      svg
        .selectAll('circle.pocket')
        .data(pockets)
        .enter()
        .append('circle')
        .attr('class', 'pocket')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', pocketRadius)
        .attr('fill', 'black')

      // Draw diamonds on the rails, omitting corners
      const longSideDiamonds = d3.range(9).map((i) => ({
        x: borderSize + (i * tableWidth) / 8,
        y: borderSize / 2,
        id: `diamond-long-${i}`
      }))
      const shortSideDiamonds = d3.range(5).map((i) => ({
        x: borderSize / 2,
        y: borderSize + (i * tableHeight) / 4,
        id: `diamond-short-${i}`
      }))

      svg
        .selectAll('rect.diamond')
        .data(
          longSideDiamonds
            .concat(
              longSideDiamonds.map((d, i) => ({
                x: d.x,
                y: d.y + tableHeight + borderSize,
                id: `diamond-long-bottom-${i}`
              }))
            )
            .concat(shortSideDiamonds)
            .concat(
              shortSideDiamonds.map((d, i) => ({
                x: d.x + tableWidth + borderSize,
                y: d.y,
                id: `diamond-short-right-${i}`
              }))
            )
        )
        .enter()
        .append('rect')
        .attr('class', 'diamond')
        .attr('id', (d) => d.id)
        .attr('x', (d) => d.x - 5)
        .attr('y', (d) => d.y - 5)
        .attr('width', tableWidth / 60)
        .attr('height', tableWidth / 60)
        .attr('fill', 'white')
      // .attr('transform', (d) => `rotate(45, ${d.x}, ${d.y})`)

      // draw target
      if (this.targetSpecs.isTarget) {
        const targetRect = svg
          .append('rect')
          .attr('class', 'target')
          .attr('x', this.targetSpecs.x * diamondWidth)
          .attr('y', this.targetSpecs.y * diamondWidth)
          .attr('width', diamondWidth * this.targetSpecs.w)
          .attr('height', diamondWidth * this.targetSpecs.h)
          .attr('fill', 'none')
          .attr('stroke', 'white')
          .attr('stroke-width', 3)
          .attr('stroke-dasharray', '5,5')

        if (this.targetSpecs.rotate) {
          const cx = this.targetSpecs.x * diamondWidth + (diamondWidth * 0.8) / 2
          const cy = this.targetSpecs.y * diamondWidth + diamondWidth / 2
          targetRect.attr('transform', `rotate(90, ${cx}, ${cy})`)
        }
      }

      // Draw balls
      svg
        .selectAll('circle.ball')
        .data(this.ballPositions)
        .enter()
        .append('circle')
        .attr('class', 'ball')
        .attr('cx', (d) => d.x + borderSize)
        .attr('cy', (d) => d.y + borderSize)
        .attr('r', ballRadius)
        .attr('fill', (d) => this.getColor(d.number))
        .attr('stroke', 'black')
        .attr('stroke-width', 1)

      // Draw stripes on balls 9-15
      svg
        .selectAll('rect.stripe')
        .data(this.ballPositions.filter((d) => d.number >= 9 && d.number <= 15))
        .enter()
        .append('rect')
        .attr('class', 'stripe')
        .attr('x', (d) => d.x + borderSize - ballRadius * 0.82)
        .attr('y', (d) => d.y + borderSize - ballRadius * 0.47)
        .attr('width', ballRadius * 1.7)
        .attr('height', ballRadius * 0.85)
        .attr('fill', 'white')
        .attr('rx', ballRadius / 4)
        .attr('ry', ballRadius / 4)

      svg
        .selectAll('rect.stripe')
        .data(this.ballPositions.filter((d) => d.number === 17))
        .enter()
        .append('rect')
        .attr('class', 'stripe')
        .attr('x', (d) => d.x + borderSize - ballRadius * 0.84)
        .attr('y', (d) => d.y + borderSize - ballRadius * 0.47)
        .attr('width', ballRadius * 1.7)
        .attr('height', ballRadius * 0.85)
        .attr('fill', 'black')
        .attr('rx', ballRadius / 4)
        .attr('ry', ballRadius / 4)

      // Draw white circle for numbers on balls 1-8
      svg
        .selectAll('circle.white')
        .data(this.ballPositions.filter((d) => d.number >= 1 && d.number <= 8))
        .enter()
        .append('circle')
        .attr('class', 'white')
        .attr('cx', (d) => d.x + borderSize)
        .attr('cy', (d) => d.y + borderSize)
        .attr('r', ballRadius / 2)
        .attr('fill', 'white')
        .attr('stroke', 'white')
        .attr('stroke-width', 1)

      // Draw ball numbers
      svg
        .selectAll('text.ball-number')
        .data(this.ballPositions.filter((d) => d.number >= 1 && d.number <= 15))
        .enter()
        .append('text')
        .attr('class', 'ball-number')
        .attr('x', (d) => d.x + borderSize)
        .attr('y', (d) => d.y + borderSize)
        .attr('dy', '.35em')
        .attr('text-anchor', 'middle')
        .attr('fill', 'black')
        .attr('font-size', `${ballRadius}px`)
        .attr('font-weight', 'bold')
        .text((d) => (d.number !== 0 ? d.number : ''))

      // Draw cue stick
      svg
        .append('line')
        .attr('x1', this.cuePosition.start.x + borderSize)
        .attr('y1', this.cuePosition.start.y + borderSize)
        .attr('x2', this.cuePosition.end.x + borderSize)
        .attr('y2', this.cuePosition.end.y + borderSize)
        .attr('stroke', 'lime')
        .attr('stroke-width', 5)

      // Draw shot line
      const shotLine = this.shotLine
      if (shotLine) {
        svg
          .append('line')
          .attr('x1', shotLine.start.x + borderSize)
          .attr('y1', shotLine.start.y + borderSize)
          .attr('x2', shotLine.end.x + borderSize)
          .attr('y2', shotLine.end.y + borderSize)
          .attr('stroke', 'black')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '5')
      }

      // Draw potting line
      const pottingLine = this.pottingLine
      if (pottingLine && this.pottingPocketProp.show) {
        svg
          .append('line')
          .attr('x1', pottingLine.start.x + borderSize)
          .attr('y1', pottingLine.start.y + borderSize)
          .attr('x2', pottingLine.end.x + borderSize)
          .attr('y2', pottingLine.end.y + borderSize)
          .attr('stroke', 'red')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '4')
          .attr('marker-end', 'url(#arrowhead)')
      }

      // Draw leave line
      const leaveLine = this.leaveLine
      if (leaveLine) {
        svg
          .append('line')
          .attr('x1', leaveLine.start.x + borderSize)
          .attr('y1', leaveLine.start.y + borderSize)
          .attr('x2', leaveLine.end.x + borderSize)
          .attr('y2', leaveLine.end.y + borderSize)
          .attr('stroke', 'red')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '4')
          .attr('marker-end', 'url(#arrowhead)')
      }

      // Draw kick shot line
      const kickShotLine = this.kickShotLine
      if (kickShotLine && this.kickShotLineProp.rails === 1) {
        svg
          .append('line')
          .attr('x1', kickShotLine.start.x + borderSize)
          .attr('y1', kickShotLine.start.y + borderSize)
          .attr('x2', kickShotLine.railHit.x + borderSize)
          .attr('y2', kickShotLine.railHit.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')

        svg
          .append('line')
          .attr('x1', kickShotLine.railHit.x + borderSize)
          .attr('y1', kickShotLine.railHit.y + borderSize)
          .attr('x2', kickShotLine.end.x + borderSize)
          .attr('y2', kickShotLine.end.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')
      }
      if (kickShotLine && this.kickShotLineProp.rails === 2) {
        svg
          .append('line')
          .attr('x1', kickShotLine.start.x + borderSize)
          .attr('y1', kickShotLine.start.y + borderSize)
          .attr('x2', kickShotLine.railHit1.x + borderSize)
          .attr('y2', kickShotLine.railHit1.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')

        svg
          .append('line')
          .attr('x1', kickShotLine.railHit1.x + borderSize)
          .attr('y1', kickShotLine.railHit1.y + borderSize)
          .attr('x2', kickShotLine.railHit2.x + borderSize)
          .attr('y2', kickShotLine.railHit2.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')

        svg
          .append('line')
          .attr('x1', kickShotLine.railHit2.x + borderSize)
          .attr('y1', kickShotLine.railHit2.y + borderSize)
          .attr('x2', kickShotLine.end.x + borderSize)
          .attr('y2', kickShotLine.end.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')
      }

      if (kickShotLine && this.kickShotLineProp.rails === 3) {
        svg
          .append('line')
          .attr('x1', kickShotLine.start.x + borderSize)
          .attr('y1', kickShotLine.start.y + borderSize)
          .attr('x2', kickShotLine.railHit1.x + borderSize)
          .attr('y2', kickShotLine.railHit1.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')

        svg
          .append('line')
          .attr('x1', kickShotLine.railHit1.x + borderSize)
          .attr('y1', kickShotLine.railHit1.y + borderSize)
          .attr('x2', kickShotLine.railHit2.x + borderSize)
          .attr('y2', kickShotLine.railHit2.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')

        svg
          .append('line')
          .attr('x1', kickShotLine.railHit2.x + borderSize)
          .attr('y1', kickShotLine.railHit2.y + borderSize)
          .attr('x2', kickShotLine.railHit3.x + borderSize)
          .attr('y2', kickShotLine.railHit3.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')

        svg
          .append('line')
          .attr('x1', kickShotLine.railHit3.x + borderSize)
          .attr('y1', kickShotLine.railHit3.y + borderSize)
          .attr('x2', kickShotLine.end.x + borderSize)
          .attr('y2', kickShotLine.end.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')
      }

      // draw bank shot line
      const bankShotLine = this.bankShotLine
      if (bankShotLine) {
        svg
          .append('line')
          .attr('x1', bankShotLine.start.x + borderSize)
          .attr('y1', bankShotLine.start.y + borderSize)
          .attr('x2', bankShotLine.railHit.x + borderSize)
          .attr('y2', bankShotLine.railHit.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')

        svg
          .append('line')
          .attr('x1', bankShotLine.railHit.x + borderSize)
          .attr('y1', bankShotLine.railHit.y + borderSize)
          .attr('x2', bankShotLine.end.x + borderSize)
          .attr('y2', bankShotLine.end.y + borderSize)
          .attr('stroke', 'yellow')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5')
      }
    },
    modifySpecificDiamonds() {
      // Example: Modify a specific diamond by its ID
      d3.select('#diamond-long-0').attr('display', 'none')
      d3.select('#diamond-long-4').attr('display', 'none')
      d3.select('#diamond-long-bottom-4').attr('display', 'none')
      d3.select('#diamond-short-0').attr('display', 'none')
      d3.select('#diamond-long-8').attr('display', 'none')
      d3.select('#diamond-short-4').attr('display', 'none')
      d3.select('#diamond-long-bottom-0').attr('display', 'none')
      d3.select('#diamond-short-right-0').attr('display', 'none')
      d3.select('#diamond-long-bottom-8').attr('display', 'none')
      d3.select('#diamond-short-right-4').attr('display', 'none')
    }
  },
  watch: {
    ballPositions() {
      d3.select('#pool-table').selectAll('*').remove()
      this.drawPoolTable()
      this.modifySpecificDiamonds()
    },
    leaveLine() {
      d3.select('#pool-table').selectAll('*').remove()
      this.drawPoolTable()
      this.modifySpecificDiamonds()
    },
    kickShotLine() {
      d3.select('#pool-table').selectAll('*').remove()
      this.drawPoolTable()
      this.modifySpecificDiamonds()
    },
    bankShotLine() {
      d3.select('#pool-table').selectAll('*').remove()
      this.drawPoolTable()
      this.modifySpecificDiamonds()
    }
  }
}
</script>

<style scoped>
#pool-table {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
