import { PlayerModel } from "./PlayerModel";
import { CardModel } from "./CardModel";

export interface GameModel {
  gameId: string;
  status: string; // NotStarted, InGame, Ended
  deck: CardModel[];
  players: PlayerModel[];
  loadables: Function[];
  extras: {}
}