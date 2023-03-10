import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Wordle Game</h1>
      <h2 className='word'>Difficulty</h2>
      <h2 className='word'>Rules <a href = "GameBoard.jsx">Click</a></h2>
      <h2 className='word'>Play the Game</h2>
    </div>
    
    //   {/* <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div> */}
  );
}

export default App
