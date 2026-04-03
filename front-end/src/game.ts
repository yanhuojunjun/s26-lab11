interface GameState {
  cells: Cell[];
  instructions: String;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }