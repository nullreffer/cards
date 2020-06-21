import React, { useState } from 'react';
import './Board1.css';
import { IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonRange, IonInput, IonButton, IonCard, IonCardHeader, IonCardContent, IonImg, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/react';
import Card from './Card';
import TableContainer from './TableContainer';
import { GameModel } from '../models/GameModel';

const Board1: React.FC<GameModel> = (game: GameModel) => {

  return (
    <IonContent>
      <TableContainer></TableContainer>
      <IonGrid className="fullgrid hcenter">
        <IonRow className="ion-align-items-end" >
          <IonCol>
            <Card></Card>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Board1;
