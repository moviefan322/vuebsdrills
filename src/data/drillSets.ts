import bufDrills from '../data/bufDrills'
import { skills1, skills2, skills3 } from '../data/skills1'

const fundamentals = {
  id: 1,
  name: 'Fundamentals',
  drills: [...bufDrills]
}

const skillsBachelor = {
  id: 2,
  name: 'Skills 1',
  drills: [...skills1]
}

const skillsMasters = {
  id: 3,
  name: 'Skills 2',
  drills: [...skills2]
}

const skillsDoctorate = {
  id: 4,
  name: 'Skills 3',
  drills: [...skills3]
}

const drillSets = [fundamentals, skillsBachelor, skillsMasters, skillsDoctorate]

export default drillSets
