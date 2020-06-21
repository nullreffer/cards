import React, { useState } from 'react';
import './Board.css';
import { IonContent,  } from '@ionic/react';
import TableContainer from './TableContainer';
import { GameModel } from '../models/GameModel';
import { PlayerModel } from '../models/PlayerModel';
import CardGroup from './CardGroup';

const Board: React.FC<{model: GameModel}> = (input: {model: GameModel}) => {
  const game = input.model;
  const def: PlayerModel = { name: "ERR", id: -1, isMe: true, verticalStack: false, cards: []}
  const empty =(<div></div>)
  const table = <TableContainer model={game} ></TableContainer>
  const me = game.players.find(p => { p.isMe == true}) || def
  const sortedPlayers = game.players.sort(p => p.id >= me.id ? p.id : p.id + game.players.length); // me == all[0]
  const all = sortedPlayers.map(p => (
    <CardGroup model={p} ></CardGroup>
  ));

  const boardConfigs = [
    [ [empty, empty, empty], [empty, empty, empty], [empty, all[0], empty] ], // 1 player
    [ [empty, all[1], empty], [empty, table, empty], [empty, all[0], empty] ], // 2 player
    [ [all[1], empty, all[2]], [empty, table, empty], [empty, all[0], empty] ], // 3 player
    [ [empty, all[2], empty], [all[1], table, all[3]], [empty, all[0], empty] ], // 4 player
    [ [all[2], empty, all[3]], [all[1], table, all[4]], [empty, all[0], empty] ], // 5 player
    [ [all[2], all[3], all[4]], [all[1], table, all[5]], [empty, all[0], empty] ], // 6 player
    [ [all[2], all[3], all[4]], [all[1], table, all[5]], [all[0], empty, all[6]] ], // 7 player
    [ [all[3], all[4], all[5]], [all[2], table, all[6]], [all[1], all[0], all[7]] ] // 8 player
  ];

  const selectedBoard = boardConfigs[game.players.length - 1];
  const board = selectedBoard.map(row => {
    var cols = row.map(col => (<td>{col}</td>))
    return (<tr>{cols}</tr>)
  });

  return (
    <IonContent>
      <table>
        {board}
      </table>
    </IonContent>
  );
};

export default Board;
