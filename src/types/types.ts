export type Player = {
  id: number;
  name: string;
  totalScore: number;
  score: {
    dutch: number;
    blitz: number;
  };
};

export type Round = {
  round: number;
  player: Player[];
};

export type GameState = {
  winningScore: number;
  players: Player[];
  rounds: Round[];
};
