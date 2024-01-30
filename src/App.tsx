import React from 'react';
import Header from './components/Header';
import StartPage from './pages/Startpage';
import GameSearch from './components/GameSearch';
import './App.css';

function App() {
  return (
    <div >
      <Header />
      <GameSearch />
      <StartPage />

    </div>
  );
};


export default App;
