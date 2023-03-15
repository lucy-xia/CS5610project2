import React from 'react';
import { Link } from 'react-router-dom';

const HardGame = () => {
  return (
    <div>
      <h1>Hard Game!</h1>
      <br/>
      <ul>
          <Link to="/">
            <h2>Home</h2></Link>
  
          <Link to="/rule">
            <h2>Rule</h2>
          </Link>
          
          <Link to="/rule">
            <h2>Easy</h2>
          </Link>

      </ul>
    </div>
  );
};

export default HardGame;
