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

export const pattern9Ball1: Drill = {
  id: 17,
  name: '9B Patterns (I)',
  maxScore: 10,
  instructions: `• Attempt and score all three layouts. Then add the two lowest scores.  <br />
  • You receive 1 point for each ball pocketed legally (w/o scratching) under 9-ball “rotation” rules,
  always hitting the lowest-numbered ball first.  <br />
  • If the 9-ball is pocketed early (e.g., with a combo or carom shot), you must still pocket the
  remaining balls in rotation.`,
  image: [
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717612727/Screenshot_2024-06-05_at_2.38.40_PM_zjocqi.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717613150/Screenshot_2024-06-05_at_2.45.42_PM_amjh6m.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717613264/Screenshot_2024-06-05_at_2.47.35_PM_txpzc6.png'
  ],
  type: 'layout',
  layouts: 3,
  layoutMaxScore: 5,
  skills: ['potting', 'pattern play']
}

export const pattern9Ball2: Drill = {
  id: 18,
  name: '9B Patterns (II)',
  maxScore: 12,
  instructions: `• Attempt and score all three layouts. Then add the two lowest scores.  <br />
  • You receive 1 point for each ball pocketed legally (w/o scratching) under 9-ball “rotation” rules,
  always hitting the lowest-numbered ball first.  <br />
  • If the 9-ball is pocketed early (e.g., with a combo or carom shot), you must still pocket the
  remaining balls in rotation.`,
  image: [
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717613075/Screenshot_2024-06-05_at_2.44.26_PM_gjjn4f.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717613315/Screenshot_2024-06-05_at_2.48.26_PM_yytvhp.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717613346/Screenshot_2024-06-05_at_2.48.57_PM_dsbzkg.png'
  ],
  type: 'layout',
  layouts: 3,
  layoutMaxScore: 6,
  skills: ['potting', 'pattern play']
}

export const pattern9Ball3: Drill = {
  id: 19,
  name: '9B Patterns (III)',
  maxScore: 14,
  instructions: `• Attempt and score all three layouts. Then add the two lowest scores.  <br />
  • You receive 1 point for each ball pocketed legally (w/o scratching) under 9-ball “rotation” rules,
  always hitting the lowest-numbered ball first.  <br />
  • If the 9-ball is pocketed early (e.g., with a combo or carom shot), you must still pocket the
  remaining balls in rotation.`,
  image: [
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717619273/Screenshot_2024-06-05_at_4.27.43_PM_yx7o1e.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717613384/Screenshot_2024-06-05_at_2.49.34_PM_ftntvg.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717613447/Screenshot_2024-06-05_at_2.50.37_PM_g6t7tl.png'
  ],
  type: 'layout',
  layouts: 3,
  layoutMaxScore: 7,
  skills: ['potting', 'pattern play']
}

export const pattern8Ball1: Drill = {
  id: 20,
  name: '8 Pattern Drills (I)',
  maxScore: 10,
  instructions: `• Attempt and score all three layouts. Then add the two lowest scores<br />.
  • Pocket the stripes in any order, then the 8, starting with ball in hand. <br />
  • You receive 1 point for each ball pocketed legally (w/o scratching) before a miss<br />.
  • You are allowed to contact the obstacle balls.  <br />`,
  image: [
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717692565/Screenshot_2024-06-06_at_12.48.14_PM_apspfq.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717692559/Screenshot_2024-06-06_at_12.48.43_PM_rpl6lh.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717692552/Screenshot_2024-06-06_at_12.48.56_PM_aazagy.png'
  ],
  type: 'layout',
  layouts: 3,
  layoutMaxScore: 5,
  skills: ['potting', 'pattern play']
}

export const pattern8Ball2: Drill = {
  id: 21,
  name: '8 Pattern Drills (II)',
  maxScore: 12,
  instructions: `• Attempt and score all three layouts. Then add the two lowest scores<br />.
  • Pocket the stripes in any order, then the 8, starting with ball in hand. <br />
  • You receive 1 point for each ball pocketed legally (w/o scratching) before a miss<br />.
  • You are allowed to contact the obstacle balls.  <br />`,
  image: [
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717692844/Screenshot_2024-06-06_at_12.53.41_PM_sonhlf.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717692876/Screenshot_2024-06-06_at_12.54.24_PM_z4ufay.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717692905/Screenshot_2024-06-06_at_12.54.54_PM_sayqpe.png'
  ],
  type: 'layout',
  layouts: 3,
  layoutMaxScore: 6,
  skills: ['potting', 'pattern play']
}

export const pattern8Ball3: Drill = {
  id: 22,
  name: '8 Pattern Drills (III)',
  maxScore: 14,
  instructions: `• Attempt and score all three layouts. Then add the two lowest scores<br />.
  • Pocket the stripes in any order, then the 8, starting with ball in hand. <br />
  • You receive 1 point for each ball pocketed legally (w/o scratching) before a miss<br />.
  • You are allowed to contact the obstacle balls.  <br />`,
  image: [
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717694909/Screenshot_2024-06-06_at_1.28.14_PM_t7vgtt.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717695127/Screenshot_2024-06-06_at_1.31.49_PM_ibacab.png',
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717694942/Screenshot_2024-06-06_at_1.28.49_PM_d9gi3m.png'
  ],
  type: 'layout',
  layouts: 3,
  layoutMaxScore: 7,
  skills: ['potting', 'pattern play']
}

export const safety1: Drill = {
  id: 23,
  name: 'Safety (I)',
  maxScore: 6,
  instructions: `• Take two attempts from each CB position, getting 1 point for each successful snooker, where
  the OB is hidden from the CB with no direct path of contact between the balls. <br />
  • The 1 ball may not be pocketed. <br />
  • You are allowed to contact the balls in the obstacle cluster, but all of them must remain within
  or overlapping the target.  <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717740461/Screenshot_2024-06-07_at_2.07.26_AM_z3kjxq.png',
  type: 'standard',
  skills: ['cue ball control', 'safety']
}

export const safety2: Drill = {
  id: 24,
  name: 'Safety (II)',
  maxScore: 10,
  instructions: `• Take two attempts from each CB position, getting 1 point for each successful snooker, where
  the OB is hidden from the CB with no direct path of contact between the balls. <br />
  • The 1 ball may not be pocketed. <br />
  • You are allowed to contact the balls in the obstacle cluster, but all of them must remain within
  or overlapping the target.  <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717795677/Screenshot_2024-06-07_at_5.27.12_PM_zgrxdy.png',
  type: 'standard',
  skills: ['cue ball control', 'safety']
}

export const safety3: Drill = {
  id: 25,
  name: 'Safety (III)',
  maxScore: 14,
  instructions: `• Take two attempts from each CB position, getting 1 point for each successful snooker, where
  the OB is hidden from the CB with no direct path of contact between the balls. <br />
  • The 1 ball may not be pocketed. <br />
  • You are allowed to contact the balls in the obstacle cluster, but all of them must remain within
  or overlapping the target.  <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717796173/Screenshot_2024-06-07_at_5.36.08_PM_jtt0zq.png',
  type: 'standard',
  skills: ['cue ball control', 'safety']
}

export const kick1: Drill = {
  id: 26,
  name: 'Kick Shot (I)',
  maxScore: 3,
  instructions: `• Kick at each OB off the same long rail (as shown), with the CB in the same starting position for
  each kick, getting 1 point for each successful and legal shot (i.e., no scratch, ball to rail).`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717798362/Screenshot_2024-06-07_at_6.12.36_PM_kkxj24.png',
  type: 'standard',
  skills: ['kicking']
}

export const kick2: Drill = {
  id: 27,
  name: 'Kick Shot (II)',
  maxScore: 5,
  instructions: `• Shots 1-4: Kick at each OB off the same long rail (as shown), with the CB in the same starting
  position for each kick, getting 1 point for each successful and legal shot (i.e., no scratch, ball to
  rail). <br />
  • Shot 5: With CB in hand, kick off any two rails at the 5 ball.`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717798483/Screenshot_2024-06-07_at_6.14.25_PM_nnf6bx.png',
  type: 'standard',
  skills: ['kicking']
}

export const kick3: Drill = {
  id: 28,
  name: 'Kick Shot (III)',
  maxScore: 7,
  instructions: `• Shots 1-4: Kick at each OB off the same long rail (as shown), with the CB in the same starting
  position for each kick, getting 1 point for each successful and legal shot (i.e., no scratch, ball to
  rail). <br />
  • Shots 5,6: With CB in hand on each shot, kick off any two rails at the 5 ball and the 6 ball. <br />
  • Shot 7: With CB in hand, kick off any three rails at the 7 ball.`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717798483/Screenshot_2024-06-07_at_6.14.25_PM_nnf6bx.png',
  type: 'standard',
  skills: ['kicking']
}
export const bank1: Drill = {
  id: 29,
  name: 'Bank Shot (I)',
  maxScore: 3,
  instructions: `• With CB in hand for each shot, bank each ball cross side. <br />
  • You receive 1 point for each bank pocketed legally (w/o scratching).`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717803152/Screenshot_2024-06-07_at_7.32.26_PM_daom3s.png',
  type: 'standard',
  skills: ['banking', 'potting']
}

export const bank2: Drill = {
  id: 30,
  name: 'Bank Shot (II)',
  maxScore: 5,
  instructions: `• With CB in hand for each shot, bank each ball cross side. <br />
  • You receive 1 point for each bank pocketed legally (w/o scratching).`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717803280/Screenshot_2024-06-07_at_7.34.25_PM_qcjbqx.png',
  type: 'standard',
  skills: ['banking', 'potting']
}

export const bank3: Drill = {
  id: 31,
  name: 'Bank Shot (III)',
  maxScore: 7,
  instructions: `• With CB in hand for each shot, bank each ball cross side. <br />
  • You receive 1 point for each bank pocketed legally (w/o scratching).`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1717803360/Screenshot_2024-06-07_at_7.35.52_PM_uqpnq5.png',
  type: 'standard',
  skills: ['banking', 'potting']
}

export const skills1: Drill[] = [lineOfBalls1, RailCutShot1, pattern9Ball1, pattern8Ball1, safety1, kick1, bank1]
export const skills2: Drill[] = [lineOfBalls2, RailCutShot2, pattern9Ball2, pattern8Ball2, safety2, kick2, bank2]
export const skills3: Drill[] = [lineOfBalls3, RailCutShot3, pattern9Ball3, pattern8Ball3, safety3, kick3, bank3]

export default [...skills1, ...skills2, ...skills3]
