import React from 'react';
import { Link } from 'react-router-dom';

const Rule = () => {
  return (
    <div>
      <h1>Rule</h1>
      <h2>1.Enter a 5-letter word</h2>
      <h2>2.Check the tile colors.</h2>
      <h3>
        {' '}
        - A green tile indicates that you've guessed the correct letter in the
        correct place in the word
      </h3>
      <h3>
        {' '}
        - A yellow tile means you've guessed a letter that's in the word, but
        not in the right spot
      </h3>
      <h3> - A gray tile means that letter is not in today's word</h3>
      <h2>3.Guess another word</h2>
      <h3>
        {' '}
        - If you correctly guessed a letter at the correct position (a green
        tile), make sure to use that letter at that position in your second
        guess.
      </h3>
      <h3> - Letters can appear more than once in the same word</h3>
      <h2>4.Continue entering your guesses until all letters are green</h2>
      <br />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hard">Difficult</Link>
        </li>
        <li>
          <Link to="/easy">Easy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Rule;
