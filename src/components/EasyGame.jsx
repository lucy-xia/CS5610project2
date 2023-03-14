import React from 'react';
import { Link } from 'react-router-dom';

const EasyGame = () => {
  return (
    <div>
      <h1>Wordle Game</h1>

      <div class="game-board"></div>

      <div id="keyboard">
        <table>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td>I</td>
            <td>J</td>
          </tr>
          <tr>
            <td>K</td>
            <td>L</td>
            <td>M</td>
            <td>N</td>
            <td>O</td>
            <td>P</td>
            <td>Q</td>
            <td>R</td>
            <td>S</td>
            <td>T</td>
          </tr>
          <tr>
            <td>U</td>
            <td>V</td>
            <td>W</td>
            <td>X</td>
            <td>Y</td>
            <td>Z</td>
          </tr>
        </table>
      </div>
      <br />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rule">Rule</Link>
        </li>
      </ul>
    </div>
  );
};

export default EasyGame;
