import React, { useState } from 'react';
import './Card.css';
import { IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonRange, IonInput, IonButton, IonCard, IonCardHeader, IonCardContent, IonImg, IonFooter } from '@ionic/react';
import { CardModel } from '../models/CardModel';

const Card: React.FC<{ model: CardModel}> = (input: {model: CardModel}) => {
  const [cardFaction] = useState<string>(input.model.cardFaction || "spades");
  const [cardDenomination] = useState<string>(input.model.cardDenomination || "A");
  const [cardImage] = useState<string>(input.model.cardImage || "../../assets/images/card_placeholder.png");

  return (
    <div className="card" >
    <IonCard>
      <IonCardHeader>
        <IonTitle>{cardFaction}-{cardDenomination}</IonTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonImg src={cardImage}></IonImg>
      </IonCardContent>
      <IonFooter>
        <IonTitle className="verticalflip">{cardFaction}-{cardDenomination}</IonTitle>
      </IonFooter>
    </IonCard>
    </div>
  );
};

export default Card;
