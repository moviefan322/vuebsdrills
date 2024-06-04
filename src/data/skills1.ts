import type { Drill } from '../types/types'

export const lineOfBalls1: Drill = {
  id: 11,
  name: 'Line of Balls',
  maxScore: 4,
  instructions: `• Pocket the balls in rotation (i.e., in numerical order) in any pockets without scratching or
  contacting any of the remaining balls. <br />
  • If you disturb a ball while pocketing one, the one pocketed counts, but the run ends <br />
  • Shoot the drill twice and use the higher score of the two attempts <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717526801/Screenshot_2024-06-04_at_2.44.12_PM_zraapz.png',
  type: 'standard',
  attempts: 2,
  skills: ['position', 'cue ball control', 'pattern play']
}

export const lineOfBalls2: Drill = {
  id: 21,
  name: 'Line of Balls',
  maxScore: 7,
  instructions: `• Pocket the balls in rotation (i.e., in numerical order) in any pockets without scratching or
  contacting any of the remaining balls. <br />
  • If you disturb a ball while pocketing one, the one pocketed counts, but the run ends <br />
  • Shoot the drill twice and use the higher score of the two attempts <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717527553/Screenshot_2024-06-04_at_2.59.04_PM_obzasb.png',
  type: 'standard',
  attempts: 2,
  skills: ['position', 'cue ball control', 'pattern play']
}

export const lineOfBalls3: Drill = {
  id: 31,
  name: 'Line of Balls',
  maxScore: 10,
  instructions: `• Pocket the balls in rotation (i.e., in numerical order) in any pockets without scratching or
  contacting any of the remaining balls. <br />
  • If you disturb a ball while pocketing one, the one pocketed counts, but the run ends <br />
  • Shoot the drill twice and use the higher score of the two attempts <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717527553/Screenshot_2024-06-04_at_2.59.04_PM_obzasb.png',
  type: 'standard',
  attempts: 2,
  skills: ['position', 'cue ball control', 'pattern play']
}

export const skills1: Drill[] = [lineOfBalls1]
export const skills2: Drill[] = [lineOfBalls2]
export const skills3: Drill[] = [lineOfBalls3]

export default [...skills1, ...skills2, ...skills3]
