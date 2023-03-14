import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Wordle Game!</h1>
      <br />
      <ul>
        <li>
          <Link to="/rule">Rule</Link>
        </li>
        <li>
          <Link to="/hard">Hard</Link>
        </li>
        <li>
          <Link to="/easy">Easy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
