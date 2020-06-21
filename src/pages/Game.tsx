import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Game.css';
import Board from '../components/Board';
import { useParams } from 'react-router';
import { GameModel } from '../models/GameModel';

const Game: React.FC = () => {
  const { id } = useParams<{ id: string; }>();
  
  // load gameModel
  const game : GameModel = null;
  
  var boardComponent = (<Board model={game} ></Board>)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {boardComponent}
      </IonContent>
    </IonPage>
  );
};

export default Game;
