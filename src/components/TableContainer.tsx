import React from 'react';
import './TableContainer.css';
import { GameModel } from '../models/GameModel';

const TableContainer: React.FC<{model: GameModel}> = (input: { model: GameModel}) => {
  const game = input.model;
  
  return (
    <div className="container">
      <strong>Status: {game.status}</strong>
      <p>Current player: {game.currentPlayer}</p>
    </div>
  );
};

export default TableContainer;
