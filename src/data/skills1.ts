import type { Drill } from '../types/types'

export const lineOfBalls1: Drill = {
  id: 11,
  name: 'Line of Balls (I)',
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
  id: 12,
  name: 'Line of Balls (II)',
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
  id: 13,
  name: 'Line of Balls (III)',
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

export const RailCutShot1: Drill = {
  id: 14,
  name: 'Rail Cut Shot (I)',
  maxScore: 7,
  instructions: `• Do the drill twice, shooting the balls in any order, and use the higher score of the two attempts. <br />
  • You are not allowed to scratch, shoot combinations, or disturb any of the remaining balls. <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717537740/Screenshot_2024-06-04_at_5.48.55_PM_pbytyt.png',
  type: 'standard',
  attempts: 2,
  skills: ['aim', 'pattern play']
}

export const RailCutShot2: Drill = {
  id: 15,
  name: 'Rail Cut Shot (II)',
  maxScore: 11,
  instructions: `• Do the drill twice, shooting the balls in any order, and use the higher score of the two attempts. <br />
  • You are not allowed to scratch, shoot combinations, or disturb any of the remaining balls. <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717537849/Screenshot_2024-06-04_at_5.50.42_PM_oq3gra.png',
  type: 'standard',
  attempts: 2,
  skills: ['aim', 'pattern play']
}

export const RailCutShot3: Drill = {
  id: 16,
  name: 'Rail Cut Shot (III)',
  maxScore: 15,
  instructions: `• Do the drill twice, shooting the balls in any order, and use the higher score of the two attempts. <br />
  • You are not allowed to scratch, shoot combinations, or disturb any of the remaining balls. <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717537849/Screenshot_2024-06-04_at_5.50.42_PM_oq3gra.png',
  type: 'standard',
  attempts: 2,
  skills: ['aim', 'pattern play']
}

export const skills1: Drill[] = [lineOfBalls1, RailCutShot1]
export const skills2: Drill[] = [lineOfBalls2, RailCutShot2]
export const skills3: Drill[] = [lineOfBalls3, RailCutShot3]

export default [...skills1, ...skills2, ...skills3]
