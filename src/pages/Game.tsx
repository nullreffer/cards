import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Game.css';
import Board1 from '../components/Board1';
import { useParams } from 'react-router';
import Board2 from '../components/Board2';
import Board3 from '../components/Board3';
import Board4 from '../components/Board4';

const Game: React.FC = () => {
  const { id } = useParams<{ id: string; }>();
  
// load gameModel

  var boardMap = {
    "1": (<Board1></Board1>),
    "2": (<Board2></Board2>),
    "3": (<Board3></Board3>),
    "4": (<Board4></Board4>)
  }
  var boardComponent = boardMap[id]

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
