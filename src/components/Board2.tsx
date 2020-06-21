import React, { useState } from 'react';
import './Board2.css';
import { IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonRange, IonInput, IonButton, IonCard, IonCardHeader, IonCardContent, IonImg, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/react';
import Card from './Card';
import TableContainer from './TableContainer';

const Board2: React.FC<GameModel> = () => {
  
  return (
    <IonContent>
      <TableContainer></TableContainer>
      <IonGrid className="fullgrid hcenter">
        <IonRow className="cardrow ion-align-items-start" >
          <IonCol>
            <Card></Card>
          </IonCol>
        </IonRow>
        <IonRow className="ion-align-items-end" >
          <IonCol>
            <Card></Card>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Board2;
