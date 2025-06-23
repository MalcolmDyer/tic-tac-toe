import React from 'react';
import Board from './components/Board';

export default function App() {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board />
      <button class="reset_button">Reset</button>
    </div>
  );
}
