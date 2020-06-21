import { CardModel } from './CardModel';

export interface PlayerModel {
  name: string;
  id: number;
  isMe: boolean;
  cards: CardModel[];
  verticalStack: boolean;
}