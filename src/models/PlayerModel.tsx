import { CardModel } from './CardModel';

export interface PlayerModel {
  name: string;
  isMe: boolean;
  cards: CardModel[];
  verticalStack: boolean;
}