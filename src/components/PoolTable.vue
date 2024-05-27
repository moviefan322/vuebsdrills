<template>
  <div id="pool-table"></div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'PoolTable',
  mounted() {
    this.drawPoolTable()
    this.modifySpecificDiamonds()
  },
  methods: {
    drawPoolTable() {
      const tableWidth = 800
      const tableHeight = 400
      const borderSize = 40
      const ballRadius = 10
      const pocketRadius = 15

      // Colors for solid and stripe balls
      const colors = [
        '#FFD700',
        '#0000FF',
        '#FF0000',
        '#800080',
        '#FF4500',
        '#008000',
        '#800000',
        '#008080',
        '#FFFF00',
        '#00008B',
        '#FF6347',
        '#FF00FF',
        '#DAA520',
        '#ADFF2F',
        '#FF1493'
      ]

      // Ball positions
      const ballPositions = [
        { number: 1, x: 100, y: 200 },
        { number: 2, x: 150, y: 200 },
        { number: 3, x: 200, y: 200 },
        { number: 4, x: 250, y: 200 },
        { number: 5, x: 300, y: 200 },
        { number: 6, x: 350, y: 200 },
        { number: 7, x: 400, y: 200 },
        { number: 8, x: 450, y: 200 },
        { number: 9, x: 500, y: 200 },
        { number: 10, x: 550, y: 200 },
        { number: 11, x: 600, y: 200 },
        { number: 12, x: 650, y: 200 },
        { number: 13, x: 700, y: 200 },
        { number: 14, x: 750, y: 200 },
        { number: 15, x: 800, y: 200 },
        // Cue ball
        { number: 0, x: 50, y: 200 }
      ]

      const cuePosition = { start: { x: 50, y: 250 }, end: { x: 120, y: 250 } }
      const shotLine = { start: { x: 120, y: 200 }, end: { x: 300, y: 200 } }

      const svg = d3
        .select('#pool-table')
        .append('svg')
        .attr('width', tableWidth + 2 * borderSize)
        .attr('height', tableHeight + 2 * borderSize)

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
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', 'white')

      // Draw balls
      svg
        .selectAll('circle.ball')
        .data(ballPositions)
        .enter()
        .append('circle')
        .attr('class', 'ball')
        .attr('cx', (d) => d.x + borderSize)
        .attr('cy', (d) => d.y + borderSize)
        .attr('r', ballRadius)
        .attr('fill', (d) => (d.number === 0 ? 'white' : colors[d.number - 1]))
        .attr('stroke', 'black')
        .attr('stroke-width', 1)

      // Draw ball numbers
      svg
        .selectAll('text.ball-number')
        .data(ballPositions)
        .enter()
        .append('text')
        .attr('class', 'ball-number')
        .attr('x', (d) => d.x + borderSize)
        .attr('y', (d) => d.y + borderSize)
        .attr('dy', '.35em')
        .attr('text-anchor', 'middle')
        .attr('fill', (d) => (d.number === 0 ? 'black' : 'white'))
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .text((d) => (d.number !== 0 ? d.number : ''))

      // Draw cue stick
      svg
        .append('line')
        .attr('x1', cuePosition.start.x + borderSize)
        .attr('y1', cuePosition.start.y + borderSize)
        .attr('x2', cuePosition.end.x + borderSize)
        .attr('y2', cuePosition.end.y + borderSize)
        .attr('stroke', 'brown')
        .attr('stroke-width', 5)

      // Draw shot line
      svg
        .append('line')
        .attr('x1', shotLine.start.x + borderSize)
        .attr('y1', shotLine.start.y + borderSize)
        .attr('x2', shotLine.end.x + borderSize)
        .attr('y2', shotLine.end.y + borderSize)
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5')
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
