interface GameInfo {
  title: string;
  category: Category[];
  image?: string;
  publisher: string;
  developer: string;
  video?: string;
  date?: string;
}

export interface Category {
  text: string;
  genre: string;
}
export interface PlatForm {
  platform: string[];
}

interface GamesOfMonth {
  date: string;
  games: Record<string, GameInfo>;
}

interface GameModel {
  [monthId: string]: GamesOfMonth;
}

export interface List {
  PC: GameModel;
  XBOX: GameModel;
  PS5: GameModel;
  Switch: GameModel;
}
