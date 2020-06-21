import React, { useState } from 'react';
import './JoinGameForm.css';
import { IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonRange, IonInput, IonButton, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';

interface JoinProps { }

const JoinGameForm: React.FC<JoinProps> = () => {
  const names = ["gloriousberserkers","hairlessliches","dwarfchangelings","greensprites","harlequinwispmother","waterjackalopes","brassvalkyries","nightogres","darkvampires","scarlethags","lionsouls","blazingslimes","granitespriggans","snowanomalies","mammothscourge","trackerspectres","restlessleprechauns","scorpionmummies","huntinghippogriffs","westernsirens","summerrocs","hiddenskeletons","camouflagedbehemoths","darkcentaurs","brasscentaurs","overlordminotaurs","haunteddemons","armoredcyclopes","woodchangelings","deafskeletons","emeraldbehemoths","venomousatranochs","hairlesswendigos","goldencorruptions","goldenvampires","goldwyrms","diresuccubi","irongargoyles","amazonanubis","fakesouleaters","pinkwraiths","caverngorgons","terracottafauns","lurkingreapers","serpentshades","pinkwendigos","arcticmummies","pixypisces","revivedspriggans","glowchimeras"]
  const [inviteCode] = useState<string>();
  const [playerName] = useState<string>(name[Math.floor(Math.random() * names.length)]);

  return (
    <IonCard>
      <IonCardHeader>
        <IonTitle>Join Game</IonTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel position="floating" >Invite code</IonLabel>
          <IonInput value={inviteCode}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating" >Player name</IonLabel>
          <IonInput value={playerName}></IonInput>
        </IonItem>
        <IonItem>
          <IonButton>Deal</IonButton>
        </IonItem>

      </IonCardContent>
    </IonCard>
  );
};

export default JoinGameForm;
