import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Rule from './components/Rule';
import EasyGame from './components/EasyGame';
import HardGame from './components/HardGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/easy" element={<EasyGame />} />
        <Route path="/hard" element={<HardGame />} />
      </Routes>
    </Router>
  );
}

export default App;
