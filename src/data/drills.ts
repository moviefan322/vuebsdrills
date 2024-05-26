export const cutShotDrill = {
  id: 1,
  name: 'Cut Shot',
  instructions: `• Start with the cue ball (CB) in position 4. Each time you pocket the object ball (OB), advance
  the CB one position (e.g., from 4 to 5); and with each miss, move down by one number (e.g., from
  4 to 3). If you succeed at position 7 or miss at position 1, stay at that position. <br />
  • Continue for 10 shots total unless you already have a guaranteed score of 10 (e.g., you can
  stop if you make the first eight shots). <br />`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1716658046/Screenshot_2024-05-25_at_1.24.29_PM_wdum1u.png',
  type: 'progressive',
  skills: ['aim']
}

export const stopShotDrill = {
  id: 2,
  name: 'Stop Shot',
  instructions: `• The OB must be pocketed, and the stopped CB must overlap at least part of the ghost-ball
  (GB) outline. <br />
  • The CB is allowed to contact the cushion. <br />
  • You are allowed to vary the CB and OB positions away from the rail as long as the CB
  remains within one diamond of the rail. <br />
  • If you end up in position 1 you are allowed to place the CB anywhere between positions
  1 and 2. This will allow you to comfortably avoid a double hit.`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1716658045/Screenshot_2024-05-25_at_1.24.40_PM_crpuf3.png',
  type: 'progressive',
  skills: ['position, cue ball control']
}

export const followShotDrill = {
  id: 3,
  name: 'Follow Shot',
  instructions: `• The rectangular target can be printed and cut out from a template on the website. It is an
  8.5”x11” sheet of paper with the center removed, leaving a 1” border. <br />
  • The CB and OB are always 1 diamond apart. <br />
  • The OB must be pocketed and the CB must end up within or overlapping the target for
  success. <br />
  • Both the CB and OB are allowed to contact cushions. <br />
  • You are allowed to vary the CB and OB positions away from the rail as long as the CB
  remains within one diamond of the rail.`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1716658045/Screenshot_2024-05-25_at_1.24.52_PM_vojx3m.png',
  type: 'progressive',
  skills: ['position, cue ball control']
}

export const drawShotDrill = {
  id: 4,
  name: 'Draw Shot',
  instructions: `• You must pocket the OB and the CB must end up within the 2x1 diamond rectangle adjacent to
  the side pocket. The CB center (or resting point on the cloth) must be inside of the rectangle
  border. <br />
  • The CB is allowed to hit the side cushion. <br />
  • The target rectangle area is fixed and does not move with the CB. <br />
  • You are allowed to vary the CB and OB positions away from the rail as long as the CB
  remains within one diamond of the rail. <br />
  • If you end up in position 1 you are allowed to place the CB anywhere between positions
  1 and 2. This will allow you to comfortably avoid a double hit.`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1716658047/Screenshot_2024-05-25_at_1.25.07_PM_dshtnm.png',
  type: 'progressive',
  skills: ['position, cue ball control']
}

export const stunShotDrill = {
  id: 5,
  name: 'Stun Shot',
  instructions: `• The OB must be pocketed and the CB must end up within or overlapping the target for
  success. <br />
  • Start with the target in position 4. Note that the target center and orientation for position 4 is
  different from the others, with the long edge against the rail cushion. The target centers for the
  other positions are aligned with the long-rail diamonds. <br />
  • The CB must head straight to the target (without cushion contact) for positions 1, 2, and 3, and
  the CB must rebound off the end rail for target positions 5, 6, and 7. Cushion contact is
  allowed, but not required, for target position 4. <br />
  • With each success, advance the target one position (e.g., from 4 to 5); and with each miss,
  move the target back (e.g., from 4 to 3). If you succeed at position 7 or miss at position 1,
  keep the target at that position. <br />
  • Continue for 10 shots total. <br />
  • Adjust the target position after the 10th shot based on the outcome, but not below 1 or above 7. <br />
  For example if you succeed on the 10th shot at 6, the final position is 7; and if you miss the 10th
  shot at 6, the final position is 5.`,
  image:
    'https://res.cloudinary.com/dnc2xvyms/image/upload/v1716658048/Screenshot_2024-05-25_at_1.25.37_PM_t6kvnj.png',
  type: 'progressive',
  skills: ['position, cue ball control']
}