import React, { useState } from 'react';
import './CardGroup.css';
import { IonGrid, IonCol, IonRow, IonContent } from '@ionic/react';
import Card from './Card';
import { PlayerModel } from '../models/PlayerModel';

const CardGroup: React.FC<{ model: PlayerModel}> = (input: {model: PlayerModel}) => {
  const player = input.model;
  const cardGroup = player.cards.map(card => (
    <li><Card model={card} ></Card></li>
  ))
  
  return (
    <IonContent>
      <ul>
        {cardGroup}
      </ul>
    </IonContent>
  );
};

export default CardGroup;
