export interface Drill {
  id: number;
  name: string;
  instructions: string;
  image: string;
  type: 'progressive' | 'standard' | 'highscore';
  skills: string[];
}

export interface DrillSet {
  id: number;
  name: string;
  drills: Drill[];
}