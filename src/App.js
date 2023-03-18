import React from 'react';
import WelcomePage from './components/WelcomePage';
import './App.css';
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

function App() {
  return (
    <div className="App">
      <WelcomePage />
    </div>
  );
}

export default App;