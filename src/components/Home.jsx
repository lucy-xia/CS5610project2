import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Wordle Game!</h1>
      <br />
      <ul>
        
        <Link to="/rule">
            <h2>Rule</h2>
        </Link>
      </ul>  
      <ul>
        <Link to="/easy">
            <h2>Easy</h2>
        </Link>
      </ul>
      <ul>
        <Link to="/hard">
          <h2>Hard</h2>
        </Link> 
        
      </ul>
    </div>
  );
};

export default Home;
