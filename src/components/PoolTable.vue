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
      default: () => ({ x: 8, y: 4 }) // Diamond coordinates for the pocket
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
    pottingPocket() {
      const tableWidth = this.tableWidth
      const tableHeight = tableWidth / 2
      return {
        x: (this.pottingPocketProp.x * tableWidth) / 8,
        y: (this.pottingPocketProp.y * tableHeight) / 4
      }
    },
    objectBall() {
      return this.ballPositions.find((ball) => ball.number !== 0)
    },
    pottingLine() {
      const objectBall = this.objectBall
      if (!objectBall) return null

      const pocketX = this.pottingPocket.x
      const pocketY = this.pottingPocket.y

      const angle = Math.atan2(pocketY - objectBall.y, pocketX - objectBall.x)
      const objectBallEdgeX = objectBall.x + Math.cos(angle) * objectBall.radius
      const objectBallEdgeY = objectBall.y + Math.sin(angle) * objectBall.radius

      return {
        start: { x: objectBallEdgeX, y: objectBallEdgeY },
        end: { x: pocketX, y: pocketY }
      }
    },
    shotLine() {
      const cueBall = this.cueBallPosition
      const objectBall = this.objectBall
      if (!cueBall || !objectBall) return null

      const pocketX = this.pottingPocket.x
      const pocketY = this.pottingPocket.y
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
    console.log(this.ballPositions)
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

      // Draw balls
      svg
        .selectAll('circle.ball')
        .data(this.ballPositions)
        .enter()
        .append('circle')
        .attr('class', 'ball')
        .attr('cx', (d) => d.x + borderSize)
        .attr('cy', (d) => d.y + borderSize)
        .attr('r', ballRadius * 1.2)
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
        .attr('x', (d) => d.x + borderSize - ballRadius)
        .attr('y', (d) => d.y + borderSize - ballRadius / 3)
        .attr('width', ballRadius * 2)
        .attr('height', ballRadius)
        .attr('fill', 'white')
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
        .data(this.ballPositions)
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
          .attr('stroke', 'blue')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5,5')
      }

      // Draw potting line
      const pottingLine = this.pottingLine
      if (pottingLine) {
        svg
          .append('line')
          .attr('x1', pottingLine.start.x + borderSize)
          .attr('y1', pottingLine.start.y + borderSize)
          .attr('x2', pottingLine.end.x + borderSize)
          .attr('y2', pottingLine.end.y + borderSize)
          .attr('stroke', 'red')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '5,5')
          .attr('marker-end', 'url(#arrowhead)')
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
