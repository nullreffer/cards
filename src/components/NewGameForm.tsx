import React, { useState } from 'react';
import './NewGameForm.css';
import { IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonRange, IonCard, IonCardHeader, IonCardContent, IonButton, IonInfiniteScroll, IonInput, IonTextarea } from '@ionic/react';

interface NewGameProps { }

const NewGameForm: React.FC<NewGameProps> = () => {
  const [playerCount, setPlayerCount] = useState<number>(2)
  const [deckMetadata, setDeckMetadata] = useState<string>(`[
  {
    "name": "basilisk",
    "count": 9
  },
  {
    "name": "centaurus",
    "count": 9
  },
  {
    "name": "chimera",
    "count": 9
  },
  {
    "name": "hippogriff",
    "count": 9
  },
  {
    "name": "manticore",
    "count": 9
  },
  {
    "name": "medusa",
    "count": 9
  },
  {
    "name": "pegasus",
    "count": 9
  },
  {
    "name": "phoenix",
    "count": 9
  }
]`)

const [winningCondition, setWinningCondition] = useState<string>(`function hasPlayerWon(player) {
  return player.cards.every(card => card.cardDenomination == card[0].cardDenomination);
}`);

const [losingCondition, setLosingCondition] = useState<string>(`function hasPlayerLost(player) {
  return false; // maybe use later
}`);

const [dealScript, setDealScript] = useState<string>(`function dealScript(game) {
  var randomDeck = game.deck.sort(d => 0.5 - Math.random());
  var handSize = randomDeck.length / playerCount;
  var playerId = 0;
  game.players.forEach(function(player) => {
    player.cards = deck.slice(playerId * handSize, playerId * handSize + handSize);
  });

  return game.players[Math.floor(Math.random() * game.players.length)];
}`);

const [canPlayerAct, setCanPlayerAct] = useState<string>(`function canPlayerAct(game) {
  
}`);

  return (
    <IonCard>
      <IonCardHeader>
        <IonTitle>New Game</IonTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel># of Players</IonLabel>
          <IonRange min={1} max={6} value={playerCount} onIonChange={e => setPlayerCount(e.detail.value as number)} >
          <IonLabel slot="end">{playerCount}</IonLabel>
          </IonRange>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Deck</IonLabel>
          <IonTextarea autoGrow={true} value={deckMetadata} onIonChange={e => setDeckMetadata(e.detail.value as string)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Dect dealing script (return starting player)</IonLabel>
          <IonTextarea autoGrow={true} value={dealScript} onIonChange={e => setDealScript(e.detail.value as string)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Winning condition (return whether player passed in has won)</IonLabel>
          <IonTextarea autoGrow={true} value={winningCondition} onIonChange={e => setWinningCondition(e.detail.value as string)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Losing condition (return whether player passed in has lost)</IonLabel>
          <IonTextarea autoGrow={true} value={losingCondition} onIonChange={e => setLosingCondition(e.detail.value as string)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Player turn action (return true for only one player at a time for turn based games)</IonLabel>
          <IonTextarea autoGrow={true} value={canPlayerAct} onIonChange={e => setCanPlayerAct(e.detail.value as string)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonButton>Create</IonButton>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default NewGameForm;
