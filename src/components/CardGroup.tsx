import React, { useState } from 'react';
import './CardGroup.css';
import { IonGrid, IonCol, IonRow } from '@ionic/react';
import Card from './Card';
import { PlayerModel } from '../models/PlayerModel';

const CardGroup: React.FC<PlayerModel> = (player: PlayerModel) => {
  var cardGroup = player.cards.map(card => (
    <Card card={card} ></Card>
  ))

  if (!player.isMe)
  {
    // group cards as in apply floats
  }

  return (
    <IonGrid>
      <IonRow>
        <IonCol>{cardGroup}</IonCol>
      </IonRow>
      <IonRow>
        <IonCol>{player.name}</IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CardGroup;
