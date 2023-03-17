
import React, { useEffect } from 'react';

export default function Rule (props) {
  // 子向父传值
  const { setMaking } = props;
  const changeState = (event) => {
    setMaking(false)
  };
  useEffect(() => {
    // document.title = `Hello, ${props.name}`;
  }, []);

  return (
    <div id='shadowbox'>
      <div className='contentbox'>
        <p className='tit'>rule</p>
        <p className='desc'>
          In Wordle, the game secretly chooses a random word that the user will try to guess within a certain number of attempts.  Both the length of the word and the number of attempts are based on the difficulty selected by the user (see below.)  You need to store at least 10 words for each difficulty level so that each game is different each time. On the game page, users should have a prompt to input a word that is the length defined by the difficulty level.
          If the user inputs the correct word, you should display a congratulations at the top of the screen.  If they chose an incorrect word, you will give them clues based on the location of the letters in the word by highlighting certain letters.  For instance, say the correct word is “faces” but the user submits “eats”, then you show “EATER”.  In this situation, the one E is in the word but not in the correct spot, as indicated by the yellow; the A is in the word AND in the correct spot, so this is marked by the green.  Notice that the second ‘E’ is marked in gray like the other missing letters: since E only appears once in the word, we will only highlight it once (if it were to appear twice, both would be highlighted.)

        </p>
        <p className='footers'>
          <button className='defaultbtn' onClick={changeState}>close</button>
        </p>
      </div>
    </div>
  );
}