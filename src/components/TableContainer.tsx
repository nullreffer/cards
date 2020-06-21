import React from 'react';
import './TableContainer.css';
import { GameModel } from '../models/GameModel';

const TableContainer: React.FC<GameModel> = (game: GameModel) => {
  return (
    <div className="container">
      <strong>Status: {game.status}</strong>
      <p>Current player: {game.currentPlayer}</p>
    </div>
  );
};

export default TableContainer;
