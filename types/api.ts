export interface Player {
  id: number;
  nickname: string;
  score: number;
  state: 'alive' | 'dead';
  kills: number;
  deaths: number;
}

export interface Team {
  winningTeam: Player[];
  losingTeam: Player[];
}
