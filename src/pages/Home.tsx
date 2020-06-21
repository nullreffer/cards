import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import TableContainer from '../components/TableContainer';
import './Home.css';
import JoinGameForm from '../components/JoinGameForm';
import NewGameForm from '../components/NewGameForm';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Card Games</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid class="container">
          <IonRow>
            <IonCol>
              <JoinGameForm></JoinGameForm>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <NewGameForm></NewGameForm>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
