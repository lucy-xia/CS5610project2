import React from 'react';
import { Link } from 'react-router-dom';
import './game.css';

const EasyGame = () => {
  return (
    <div>
      <h1>Wordle Game: Easy</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rule">Rule</Link>
        </li>
      </ul>

      <div class="game-board">

        <div class = "word-row"></div>
        <div class = "word-row"></div>
        <div class = "word-row"></div>
        <div class = "word-row"></div>

      </div>


      <div id="keyboard">
        <table>
          <tr>
            <td>Q</td>
            <td>W</td>
            <td>E</td>
            <td>R</td>
            <td>T</td>
            <td>Y</td>
            <td>U</td>
            <td>I</td>
            <td>O</td>
            <td>P</td>
          </tr>
          <tr>
            <td>A</td>
            <td>S</td>
            <td>D</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td>J</td>
            <td>K</td>
            <td>L</td>
          </tr>
          <tr>
            <td>ENTER</td>
            <td>Z</td>
            <td>X</td>
            <td>C</td>
            <td>V</td>
            <td>B</td>
            <td>N</td>
            <td>M</td>
            <td>DELETE</td>
          </tr>
        </table>
      </div>
      <br />
      
    </div>
    
   
  );
};

export default EasyGame;
