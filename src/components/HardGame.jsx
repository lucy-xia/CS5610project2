import React from 'react';
import { Link } from 'react-router-dom';

const HardGame = () => {
  return (
    <div>
      <h1>Hard Game!</h1>
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

export default HardGame;
